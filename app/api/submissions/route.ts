import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendNewSubmissionEmail } from "@/lib/email";

const VALID_TYPES = [
  "EVENT", "TRAINING", "RESOURCE", "OPPORTUNITY",
  "DIRECTORY", "STORY", "CONTACT",
] as const;

type SubmissionType = (typeof VALID_TYPES)[number];

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = req.nextUrl;
  const type = searchParams.get("type") as SubmissionType | null;
  const status = searchParams.get("status") as "PENDING" | "APPROVED" | "REJECTED" | null;
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(50, parseInt(searchParams.get("limit") || "20"));
  const search = searchParams.get("search") || "";
  const skip = (page - 1) * limit;

  const where: Record<string, unknown> = {};
  if (type && VALID_TYPES.includes(type)) where.type = type;
  if (status) where.status = status;
  if (search) {
    where.OR = [
      { submittedBy: { contains: search, mode: "insensitive" } },
      { data: { path: ["$"], string_contains: search } },
    ];
  }

  const [submissions, total] = await Promise.all([
    prisma.submission.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: {
        views: { where: { userId: session.userId }, select: { viewedAt: true } },
      },
    }),
    prisma.submission.count({ where }),
  ]);

  // Get unread counts per type
  const unreadByType = await Promise.all(
    VALID_TYPES.map(async (t) => {
      const count = await prisma.submission.count({
        where: {
          type: t,
          status: "PENDING",
          views: { none: { userId: session.userId } },
        },
      });
      return [t, count] as [string, number];
    })
  );

  const mapped = submissions.map((s) => ({
    ...s,
    viewedByCurrentUser: s.views.length > 0,
    views: undefined,
  }));

  return NextResponse.json({
    submissions: mapped,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
    unread: Object.fromEntries(unreadByType),
  });
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    let body: Record<string, unknown>;

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries()) as Record<string, unknown>;
      if (body.data && typeof body.data === "string") {
        body = { ...body, ...JSON.parse(body.data) };
      }
    } else {
      body = await req.json();
    }

    const { type, data, submittedBy } = body as {
      type: string;
      data: Record<string, unknown>;
      submittedBy?: string;
    };

    if (!type || !VALID_TYPES.includes(type as SubmissionType)) {
      return NextResponse.json({ error: "Invalid submission type." }, { status: 400 });
    }

    const submission = await prisma.submission.create({
      data: {
        type: type as SubmissionType,
        data: (data || body) as object,
        submittedBy: submittedBy || null,
        userId: session?.userId || null,
        status: "PENDING",
      },
    });

    // Notify admin via email (fire-and-forget)
    sendNewSubmissionEmail({
      type,
      submittedBy: submittedBy || null,
      data: (data || body) as Record<string, unknown>,
    }).catch(console.error);

    return NextResponse.json({ submission }, { status: 201 });
  } catch (err) {
    console.error("Submission error:", err);
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }
}

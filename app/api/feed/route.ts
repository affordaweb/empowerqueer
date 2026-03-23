import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { searchParams } = req.nextUrl;
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = 15;
  const skip = (page - 1) * limit;

  const [items, total, statusLogs] = await Promise.all([
    prisma.submission.findMany({
      where: { status: "APPROVED" },
      skip,
      take: limit,
      orderBy: { publishedAt: "desc" },
      include: {
        likes: { select: { userId: true } },
        comments: {
          orderBy: { createdAt: "asc" },
          include: {
            user: { select: { id: true, name: true, photoUrl: true } },
          },
        },
      },
    }),
    prisma.submission.count({ where: { status: "APPROVED" } }),
    prisma.activityLog.findMany({
      where: { action: "POSTED_STATUS" },
      orderBy: { createdAt: "desc" },
      take: 50,
      include: {
        user: { select: { id: true, name: true, photoUrl: true } },
      },
    }),
  ]);

  const submissionFeed = items.map((item) => ({
    ...item,
    type: item.type as string,
    likeCount: item.likes.length,
    likedByMe: item.likes.some((l) => l.userId === session.userId),
    commentCount: item.comments.length,
    comments: item.comments,
    likes: undefined,
  }));

  const statusFeed = statusLogs.map((log) => ({
    id: log.id,
    type: "STATUS",
    data: {
      note: (log.details as Record<string, unknown>)?.note ?? "",
      userName: log.user.name,
      photoUrl: log.user.photoUrl ?? null,
    },
    publishedAt: log.createdAt.toISOString(),
    postedBy: log.user,
    likeCount: 0,
    likedByMe: false,
    commentCount: 0,
    comments: [],
    status: "APPROVED",
    submittedBy: log.user.name,
  }));

  return NextResponse.json({
    feed: submissionFeed,
    statusPosts: statusFeed,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
}

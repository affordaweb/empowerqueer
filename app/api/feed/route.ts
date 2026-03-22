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

  const [items, total] = await Promise.all([
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
  ]);

  const feed = items.map((item) => ({
    ...item,
    likeCount: item.likes.length,
    likedByMe: item.likes.some((l) => l.userId === session.userId),
    commentCount: item.comments.length,
    comments: item.comments,
    likes: undefined,
  }));

  return NextResponse.json({
    feed,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
  });
}

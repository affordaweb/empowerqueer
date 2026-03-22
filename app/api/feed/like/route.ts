import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { submissionId } = await req.json();
  if (!submissionId) {
    return NextResponse.json({ error: "submissionId required." }, { status: 400 });
  }

  // Toggle like
  const existing = await prisma.submissionLike.findUnique({
    where: { submissionId_userId: { submissionId, userId: session.userId } },
  });

  if (existing) {
    await prisma.submissionLike.delete({
      where: { submissionId_userId: { submissionId, userId: session.userId } },
    });
    const count = await prisma.submissionLike.count({ where: { submissionId } });
    return NextResponse.json({ liked: false, likeCount: count });
  } else {
    await prisma.submissionLike.create({
      data: { submissionId, userId: session.userId },
    });
    const count = await prisma.submissionLike.count({ where: { submissionId } });
    return NextResponse.json({ liked: true, likeCount: count });
  }
}

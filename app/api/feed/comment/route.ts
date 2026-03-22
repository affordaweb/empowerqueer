import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { submissionId, content } = await req.json();
  if (!submissionId || !content?.trim()) {
    return NextResponse.json({ error: "submissionId and content required." }, { status: 400 });
  }
  if (content.length > 500) {
    return NextResponse.json({ error: "Comment must be 500 characters or less." }, { status: 400 });
  }

  const comment = await prisma.submissionComment.create({
    data: { submissionId, userId: session.userId, content: content.trim() },
    include: { user: { select: { id: true, name: true, photoUrl: true } } },
  });

  return NextResponse.json({ comment }, { status: 201 });
}

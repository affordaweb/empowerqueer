import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;
  const comment = await prisma.submissionComment.findUnique({ where: { id } });
  if (!comment) return NextResponse.json({ error: "Not found." }, { status: 404 });

  // Only the author or admin can delete
  if (comment.userId !== session.userId && session.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden." }, { status: 403 });
  }

  await prisma.submissionComment.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}

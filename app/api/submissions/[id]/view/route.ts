import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id } = await params;

  await prisma.submissionView.upsert({
    where: {
      submissionId_userId: { submissionId: id, userId: session.userId },
    },
    create: { submissionId: id, userId: session.userId },
    update: { viewedAt: new Date() },
  });

  return NextResponse.json({ ok: true });
}

import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logActivity } from "@/lib/activity";

type Params = { params: Promise<{ id: string }> };

function requireAuth(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  return null;
}

export async function GET(req: NextRequest, { params }: Params) {
  const session = await getSession();
  const deny = requireAuth(session);
  if (deny) return deny;

  const { id } = await params;
  const submission = await prisma.submission.findUnique({ where: { id } });
  if (!submission) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  // Mark as viewed
  await prisma.submissionView.upsert({
    where: { submissionId_userId: { submissionId: id, userId: session!.userId } },
    create: { submissionId: id, userId: session!.userId },
    update: { viewedAt: new Date() },
  });

  return NextResponse.json({ submission });
}

export async function PATCH(req: NextRequest, { params }: Params) {
  const session = await getSession();
  const deny = requireAuth(session);
  if (deny) return deny;

  const { id } = await params;
  const body = await req.json();
  const { status, data } = body as {
    status?: "APPROVED" | "REJECTED";
    data?: Record<string, unknown>;
  };

  const updateData: Record<string, unknown> = {};
  if (status) {
    updateData.status = status;
    if (status === "APPROVED") {
      updateData.publishedAt = new Date();
      updateData.approvedBy = session!.userId;
    }
  }
  if (data) updateData.data = data;

  const submission = await prisma.submission.update({
    where: { id },
    data: updateData,
  });

  if (status) {
    logActivity({
      userId: session!.userId,
      action: status === "APPROVED" ? "APPROVED_SUBMISSION" : "REJECTED_SUBMISSION",
      targetType: "submission",
      targetId: id,
      details: { type: submission.type },
    }).catch(console.error);
  }

  return NextResponse.json({ submission });
}

export async function DELETE(req: NextRequest, { params }: Params) {
  const session = await getSession();
  const deny = requireAuth(session);
  if (deny) return deny;

  const { id } = await params;
  const submission = await prisma.submission.findUnique({ where: { id } });
  if (!submission) {
    return NextResponse.json({ error: "Not found." }, { status: 404 });
  }

  await prisma.submission.delete({ where: { id } });

  logActivity({
    userId: session!.userId,
    action: "DELETED_SUBMISSION",
    targetType: "submission",
    targetId: id,
    details: { type: submission.type },
  }).catch(console.error);

  return NextResponse.json({ message: "Deleted." });
}

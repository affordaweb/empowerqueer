import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id: groupId } = await params;

  const group = await prisma.chatGroup.findUnique({ where: { id: groupId } });
  if (!group) return NextResponse.json({ error: "Group not found." }, { status: 404 });

  await prisma.chatGroupMember.upsert({
    where: { groupId_userId: { groupId, userId: session.userId } },
    create: { groupId, userId: session.userId },
    update: {},
  });

  return NextResponse.json({ ok: true });
}

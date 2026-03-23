import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id: groupId } = await params;

  const messages = await prisma.groupMessage.findMany({
    where: { groupId },
    orderBy: { createdAt: "asc" },
    take: 100,
    include: {
      user: { select: { id: true, name: true, photoUrl: true } },
    },
  });

  return NextResponse.json({ messages });
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const { id: groupId } = await params;
  const { message } = await req.json();

  if (!message || typeof message !== "string" || !message.trim()) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }
  if (message.length > 500) {
    return NextResponse.json({ error: "Message must be 500 characters or less." }, { status: 400 });
  }

  // Auto-join if not a member
  await prisma.chatGroupMember.upsert({
    where: { groupId_userId: { groupId, userId: session.userId } },
    create: { groupId, userId: session.userId },
    update: {},
  });

  const created = await prisma.groupMessage.create({
    data: { groupId, userId: session.userId, message: message.trim() },
    include: { user: { select: { id: true, name: true, photoUrl: true } } },
  });

  return NextResponse.json({ message: created }, { status: 201 });
}

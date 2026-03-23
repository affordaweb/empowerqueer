import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function requireAdmin(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || session.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return null;
}

// GET messages for a conversation + mark visitor messages as read
export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const { id } = await params;

  try {
    const conversation = await prisma.visitorConversation.findUnique({
      where: { id },
      include: {
        messages: { orderBy: { createdAt: "asc" } },
      },
    });

    if (!conversation) return NextResponse.json({ error: "Not found" }, { status: 404 });

    // Mark visitor messages as read
    await prisma.visitorMessage.updateMany({
      where: { conversationId: id, senderType: "VISITOR", isRead: false },
      data: { isRead: true },
    });

    return NextResponse.json({ conversation });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// POST admin reply
export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const { id } = await params;
  const { message } = await req.json();

  if (!message?.trim()) return NextResponse.json({ error: "message required" }, { status: 422 });

  try {
    const conversation = await prisma.visitorConversation.findUnique({ where: { id } });
    if (!conversation) return NextResponse.json({ error: "Not found" }, { status: 404 });

    const msg = await prisma.visitorMessage.create({
      data: {
        conversationId: id,
        senderType: "ADMIN",
        adminId: session!.userId,
        message: message.trim().slice(0, 1000),
        isRead: true,
      },
    });

    await prisma.visitorConversation.update({
      where: { id },
      data: { updatedAt: new Date() },
    });

    return NextResponse.json({ message: msg }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

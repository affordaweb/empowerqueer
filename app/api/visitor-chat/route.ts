import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Visitor sends message or starts conversation
export async function POST(req: NextRequest) {
  try {
    const { sessionId, visitorName, message } = await req.json();
    if (!sessionId || !message?.trim()) {
      return NextResponse.json({ error: "sessionId and message required" }, { status: 422 });
    }

    const conversation = await prisma.visitorConversation.upsert({
      where: { sessionId },
      create: { sessionId, visitorName: visitorName?.trim() || "Guest" },
      update: { updatedAt: new Date(), ...(visitorName?.trim() ? { visitorName: visitorName.trim() } : {}) },
    });

    const msg = await prisma.visitorMessage.create({
      data: {
        conversationId: conversation.id,
        senderType: "VISITOR",
        message: message.trim().slice(0, 1000),
      },
    });

    return NextResponse.json({ message: msg, conversationId: conversation.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// Visitor polls messages for their session
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get("sessionId");
  if (!sessionId) return NextResponse.json({ error: "sessionId required" }, { status: 422 });

  try {
    const conversation = await prisma.visitorConversation.findUnique({
      where: { sessionId },
      include: {
        messages: {
          orderBy: { createdAt: "asc" },
          take: 100,
        },
      },
    });

    if (!conversation) return NextResponse.json({ messages: [] });
    return NextResponse.json({ messages: conversation.messages, conversationId: conversation.id });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

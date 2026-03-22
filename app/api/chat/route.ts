import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

function requireAuth(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const session = await getSession();
  const deny = requireAuth(session);
  if (deny) return deny;

  const messages = await prisma.chatMessage.findMany({
    take: 50,
    orderBy: { createdAt: "asc" },
    include: {
      user: { select: { id: true, name: true, photoUrl: true } },
    },
  });

  return NextResponse.json({ messages });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  const deny = requireAuth(session);
  if (deny) return deny;

  const { message } = await req.json();
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }
  if (message.length > 500) {
    return NextResponse.json(
      { error: "Message must be 500 characters or less." },
      { status: 400 }
    );
  }

  const chatMessage = await prisma.chatMessage.create({
    data: { userId: session!.userId, message: message.trim() },
    include: { user: { select: { id: true, name: true, photoUrl: true } } },
  });

  return NextResponse.json({ message: chatMessage }, { status: 201 });
}

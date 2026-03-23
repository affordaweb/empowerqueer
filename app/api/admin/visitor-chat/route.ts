import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function requireAdmin(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || session.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return null;
}

// GET all visitor conversations
export async function GET(req: NextRequest) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  try {
    const conversations = await prisma.visitorConversation.findMany({
      orderBy: { updatedAt: "desc" },
      include: {
        messages: {
          orderBy: { createdAt: "desc" },
          take: 1,
        },
        _count: {
          select: { messages: { where: { isRead: false, senderType: "VISITOR" } } },
        },
      },
    });

    return NextResponse.json({ conversations });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

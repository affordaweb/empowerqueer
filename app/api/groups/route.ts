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

  const groups = await prisma.chatGroup.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      creator: { select: { id: true, name: true } },
      members: { select: { userId: true } },
      _count: { select: { messages: true } },
    },
  });

  return NextResponse.json({
    groups: groups.map((g) => ({
      id: g.id,
      name: g.name,
      createdBy: g.creator.name,
      createdAt: g.createdAt,
      memberCount: g.members.length,
      isMember: g.members.some((m) => m.userId === session!.userId),
      messageCount: g._count.messages,
    })),
  });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  const deny = requireAuth(session);
  if (deny) return deny;

  const { name } = await req.json();
  if (!name || typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "Group name is required." }, { status: 400 });
  }
  if (name.trim().length > 50) {
    return NextResponse.json({ error: "Group name must be 50 characters or less." }, { status: 400 });
  }

  const group = await prisma.chatGroup.create({
    data: {
      name: name.trim(),
      createdBy: session!.userId,
      members: { create: { userId: session!.userId } },
    },
    include: {
      creator: { select: { id: true, name: true } },
      members: { select: { userId: true } },
    },
  });

  return NextResponse.json({ group }, { status: 201 });
}

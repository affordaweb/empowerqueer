import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendWelcomeEmail, sendRejectionEmail } from "@/lib/email";
import { logActivity } from "@/lib/activity";

function requireAdmin(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || session.role !== "ADMIN") {
    return NextResponse.json({ error: "Admin access required." }, { status: 403 });
  }
  return null;
}

export async function GET(req: NextRequest) {
  const session = await getSession();
  const deny = requireAdmin(session);
  if (deny) return deny;

  const { searchParams } = req.nextUrl;
  const status = searchParams.get("status") as "PENDING" | "APPROVED" | "REJECTED" | null;
  const page = Math.max(1, parseInt(searchParams.get("page") || "1"));
  const limit = Math.min(50, parseInt(searchParams.get("limit") || "20"));
  const skip = (page - 1) * limit;

  const where = status ? { status } : {};

  const [users, total, pending, approved, rejected] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      select: {
        id: true, name: true, email: true, role: true,
        status: true, photoUrl: true, note: true,
        lastSeen: true, createdAt: true,
      },
    }),
    prisma.user.count({ where }),
    prisma.user.count({ where: { status: "PENDING" } }),
    prisma.user.count({ where: { status: "APPROVED", role: "USER" } }),
    prisma.user.count({ where: { status: "REJECTED" } }),
  ]);

  return NextResponse.json({
    users,
    pagination: { total, page, limit, pages: Math.ceil(total / limit) },
    counts: { pending, approved, rejected },
  });
}

export async function PATCH(req: NextRequest) {
  const session = await getSession();
  const deny = requireAdmin(session);
  if (deny) return deny;

  const { userId, action } = await req.json();
  if (!userId || !["approve", "reject"].includes(action)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const newStatus = action === "approve" ? "APPROVED" : "REJECTED";
  const user = await prisma.user.update({
    where: { id: userId },
    data: { status: newStatus },
    select: {
      id: true, name: true, email: true, role: true,
      status: true, photoUrl: true, createdAt: true,
    },
  });

  if (action === "approve") {
    sendWelcomeEmail({ name: user.name, email: user.email }).catch(console.error);
  } else {
    sendRejectionEmail({ name: user.name, email: user.email }).catch(console.error);
  }

  logActivity({
    userId: session!.userId,
    action: action === "approve" ? "APPROVED_USER" : "REJECTED_USER",
    targetType: "user",
    targetId: userId,
    details: { userName: user.name, userEmail: user.email },
  }).catch(console.error);

  return NextResponse.json({ user });
}

import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const ONLINE_THRESHOLD_MS = 5 * 60 * 1000; // 5 minutes

export async function GET() {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  // Update own lastSeen
  await prisma.user.update({
    where: { id: session.userId },
    data: { lastSeen: new Date() },
  });

  const since = new Date(Date.now() - ONLINE_THRESHOLD_MS);

  const onlineUsers = await prisma.user.findMany({
    where: {
      status: "APPROVED",
      lastSeen: { gte: since },
    },
    select: {
      id: true,
      name: true,
      photoUrl: true,
      role: true,
      note: true,
      lastSeen: true,
    },
    orderBy: { lastSeen: "desc" },
  });

  // Also include admin users who are online
  const onlineAdmins = await prisma.user.findMany({
    where: {
      role: "ADMIN",
      lastSeen: { gte: since },
    },
    select: {
      id: true,
      name: true,
      photoUrl: true,
      role: true,
      note: true,
      lastSeen: true,
    },
  });

  // Merge, deduplicate
  const seen = new Set<string>();
  const all = [...onlineUsers, ...onlineAdmins].filter((u) => {
    if (seen.has(u.id)) return false;
    seen.add(u.id);
    return true;
  });

  return NextResponse.json({ users: all, count: all.length });
}

import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const TYPES = [
  "EVENT", "TRAINING", "RESOURCE", "OPPORTUNITY",
  "DIRECTORY", "STORY", "CONTACT",
] as const;

export async function GET() {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const [
    totalSubmissions, pendingSubmissions, approvedSubmissions, rejectedSubmissions,
    totalUsers, pendingUsers, approvedUsers, rejectedUsers,
    recentSubmissions, recentActivity,
  ] = await Promise.all([
    prisma.submission.count(),
    prisma.submission.count({ where: { status: "PENDING" } }),
    prisma.submission.count({ where: { status: "APPROVED" } }),
    prisma.submission.count({ where: { status: "REJECTED" } }),
    prisma.user.count(),
    prisma.user.count({ where: { status: "PENDING" } }),
    prisma.user.count({ where: { status: "APPROVED" } }),
    prisma.user.count({ where: { status: "REJECTED" } }),
    prisma.submission.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      select: {
        id: true, type: true, status: true,
        submittedBy: true, createdAt: true,
      },
    }),
    prisma.activityLog.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
      include: { user: { select: { id: true, name: true } } },
    }),
  ]);

  const byType = await Promise.all(
    TYPES.map(async (type) => {
      const [total, pending] = await Promise.all([
        prisma.submission.count({ where: { type } }),
        prisma.submission.count({ where: { type, status: "PENDING" } }),
      ]);
      return [type, { total, pending }] as [string, { total: number; pending: number }];
    })
  );

  return NextResponse.json({
    submissions: {
      total: totalSubmissions,
      pending: pendingSubmissions,
      approved: approvedSubmissions,
      rejected: rejectedSubmissions,
      byType: Object.fromEntries(byType),
    },
    users: {
      total: totalUsers,
      pending: pendingUsers,
      approved: approvedUsers,
      rejected: rejectedUsers,
    },
    recentSubmissions,
    recentActivity,
  });
}

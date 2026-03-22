import { prisma } from "./prisma";

export async function logActivity({
  userId,
  action,
  targetType,
  targetId,
  details,
}: {
  userId: string;
  action: string;
  targetType?: string;
  targetId?: string;
  details?: Record<string, unknown>;
}) {
  try {
    await prisma.activityLog.create({
      data: { userId, action, targetType, targetId, details: details as object | undefined },
    });
  } catch {
    // Non-critical — never throw from logging
  }
}

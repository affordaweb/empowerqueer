import { NextRequest, NextResponse } from "next/server";
import { verifyApprovalToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendWelcomeEmail } from "@/lib/email";
import { logActivity } from "@/lib/activity";

const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || "https://empowerqueer.vercel.app";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/dashboard/users?error=missing_token", APP_URL)
    );
  }

  const payload = await verifyApprovalToken(token);
  if (!payload || payload.action !== "approve") {
    return NextResponse.redirect(
      new URL("/dashboard/users?error=invalid_token", APP_URL)
    );
  }

  const user = await prisma.user.findUnique({ where: { id: payload.userId } });
  if (!user) {
    return NextResponse.redirect(
      new URL("/dashboard/users?error=user_not_found", APP_URL)
    );
  }

  if (user.status === "APPROVED") {
    return NextResponse.redirect(
      new URL("/dashboard/users?info=already_approved", APP_URL)
    );
  }

  // Find an admin to attribute the log to
  const admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });

  await prisma.user.update({
    where: { id: user.id },
    data: { status: "APPROVED" },
  });

  sendWelcomeEmail({ name: user.name, email: user.email }).catch(console.error);

  if (admin) {
    logActivity({
      userId: admin.id,
      action: "APPROVED_USER",
      targetType: "user",
      targetId: user.id,
      details: { userName: user.name, userEmail: user.email },
    }).catch(console.error);
  }

  return NextResponse.redirect(
    new URL("/dashboard/users?success=approved", APP_URL)
  );
}

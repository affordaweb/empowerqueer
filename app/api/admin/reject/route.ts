import { NextRequest, NextResponse } from "next/server";
import { verifyApprovalToken } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendRejectionEmail } from "@/lib/email";
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
  if (!payload || payload.action !== "reject") {
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

  if (user.status === "REJECTED") {
    return NextResponse.redirect(
      new URL("/dashboard/users?info=already_rejected", APP_URL)
    );
  }

  const admin = await prisma.user.findFirst({ where: { role: "ADMIN" } });

  await prisma.user.update({
    where: { id: user.id },
    data: { status: "REJECTED" },
  });

  sendRejectionEmail({ name: user.name, email: user.email }).catch(
    console.error
  );

  if (admin) {
    logActivity({
      userId: admin.id,
      action: "REJECTED_USER",
      targetType: "user",
      targetId: user.id,
      details: { userName: user.name, userEmail: user.email },
    }).catch(console.error);
  }

  return NextResponse.redirect(
    new URL("/dashboard/users?success=rejected", APP_URL)
  );
}

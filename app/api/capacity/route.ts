import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const count = await prisma.user.count({
    where: { status: "APPROVED", role: "USER" },
  });
  return NextResponse.json({ count, limit: 10, isFull: count >= 10 });
}

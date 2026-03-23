import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const kopisodes = await prisma.kopisode.findMany({
    where: { published: true },
    orderBy: [{ order: "asc" }, { createdAt: "desc" }],
  });
  return NextResponse.json({ kopisodes });
}

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { SubmissionType } from "@prisma/client";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const type = searchParams.get("type")?.toUpperCase();

  if (!type) {
    return NextResponse.json({ error: "type is required" }, { status: 400 });
  }

  try {
    const submissions = await prisma.submission.findMany({
      where: { type: type as SubmissionType, status: "APPROVED" },
      orderBy: { publishedAt: "desc" },
      take: 50,
    });

    return NextResponse.json({ submissions });
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

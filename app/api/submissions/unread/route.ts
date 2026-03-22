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

  const counts = await Promise.all(
    TYPES.map(async (type) => {
      const count = await prisma.submission.count({
        where: {
          type,
          status: "PENDING",
          views: { none: { userId: session.userId } },
        },
      });
      return [type, count] as [string, number];
    })
  );

  return NextResponse.json(Object.fromEntries(counts));
}

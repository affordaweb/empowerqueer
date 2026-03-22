import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: { id: session.userId },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        photoUrl: true,
        note: true,
        lastSeen: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found." }, { status: 404 });
    }

    // Update lastSeen non-blocking
    prisma.user
      .update({ where: { id: user.id }, data: { lastSeen: new Date() } })
      .catch(console.error);

    return NextResponse.json({ user });
  } catch (err) {
    console.error("Me error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

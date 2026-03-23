import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function requireAdmin(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || session.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return null;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const { id } = await params;
  const body = await req.json();
  const { title, desc, tags, categoryIds, date, img, published, order } = body;

  const kopisode = await prisma.kopisode.update({
    where: { id },
    data: {
      ...(title !== undefined && { title: title.trim() }),
      ...(desc !== undefined && { desc: desc.trim() }),
      ...(tags !== undefined && { tags }),
      ...(categoryIds !== undefined && { categoryIds }),
      ...(date !== undefined && { date: date.trim() }),
      ...(img !== undefined && { img: img?.trim() || null }),
      ...(published !== undefined && { published }),
      ...(order !== undefined && { order }),
    },
  });

  return NextResponse.json({ kopisode });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const { id } = await params;
  await prisma.kopisode.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}

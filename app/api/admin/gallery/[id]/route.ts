import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function requireAdmin(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || session.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return null;
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const { id } = await params;
  await prisma.galleryImage.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const { id } = await params;
  const { alt, tags, order } = await req.json();

  const image = await prisma.galleryImage.update({
    where: { id },
    data: {
      ...(alt !== undefined && { alt }),
      ...(tags !== undefined && { tags }),
      ...(order !== undefined && { order }),
    },
  });

  return NextResponse.json({ image });
}

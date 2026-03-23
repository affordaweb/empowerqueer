import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

function requireAdmin(session: Awaited<ReturnType<typeof getSession>>) {
  if (!session || session.role !== "ADMIN") return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  return null;
}

export async function GET(req: NextRequest) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const images = await prisma.galleryImage.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });
  return NextResponse.json({ images });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const { src, alt, tags } = await req.json();
  if (!src?.trim()) return NextResponse.json({ error: "src required" }, { status: 422 });

  const count = await prisma.galleryImage.count();
  const image = await prisma.galleryImage.create({
    data: {
      src: src.trim(),
      alt: alt?.trim() || "EmpowerQueer Community Moment",
      tags: Array.isArray(tags) ? tags : [],
      order: count,
    },
  });

  return NextResponse.json({ image }, { status: 201 });
}

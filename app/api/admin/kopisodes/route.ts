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

  const kopisodes = await prisma.kopisode.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] });
  return NextResponse.json({ kopisodes });
}

export async function POST(req: NextRequest) {
  const session = await getSession();
  const err = requireAdmin(session);
  if (err) return err;

  const body = await req.json();
  const { title, desc, tags, categoryIds, date, img } = body;

  if (!title?.trim() || !desc?.trim()) {
    return NextResponse.json({ error: "title and desc required" }, { status: 422 });
  }

  const baseSlug = title.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
  // ensure uniqueness by appending a timestamp if needed
  const existing = await prisma.kopisode.findUnique({ where: { slug: baseSlug } });
  const slug = existing ? `${baseSlug}-${Date.now()}` : baseSlug;

  const count = await prisma.kopisode.count();
  const kopisode = await prisma.kopisode.create({
    data: {
      slug,
      title: title.trim(),
      desc: desc.trim(),
      tags: Array.isArray(tags) ? tags : [],
      categoryIds: Array.isArray(categoryIds) ? categoryIds : [],
      date: date?.trim() || new Date().getFullYear().toString(),
      img: img?.trim() || null,
      order: count,
    },
  });

  return NextResponse.json({ kopisode }, { status: 201 });
}

import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSession, signToken, setAuthCookie } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { logActivity } from "@/lib/activity";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).optional(),
  photoUrl: z.string().url().nullable().optional(),
  note: z.string().max(200).nullable().optional(),
  currentPassword: z.string().optional(),
  newPassword: z
    .string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/[a-z]/)
    .regex(/[0-9]/)
    .regex(/[^A-Za-z0-9]/)
    .optional(),
});

export async function PATCH(req: NextRequest) {
  const session = await getSession();
  if (!session || (session.status !== "APPROVED" && session.role !== "ADMIN")) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0].message },
      { status: 400 }
    );
  }

  const { name, photoUrl, note, currentPassword, newPassword } = parsed.data;

  const user = await prisma.user.findUnique({ where: { id: session.userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const updateData: Record<string, unknown> = {};
  if (name !== undefined) updateData.name = name;
  if (photoUrl !== undefined) updateData.photoUrl = photoUrl;
  if (note !== undefined) updateData.note = note;

  if (newPassword) {
    if (!currentPassword) {
      return NextResponse.json(
        { error: "Current password is required to set a new password." },
        { status: 400 }
      );
    }
    const valid = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!valid) {
      return NextResponse.json(
        { error: "Current password is incorrect." },
        { status: 400 }
      );
    }
    updateData.passwordHash = await bcrypt.hash(newPassword, 12);
  }

  const updated = await prisma.user.update({
    where: { id: session.userId },
    data: updateData,
    select: {
      id: true, name: true, email: true, role: true,
      status: true, photoUrl: true, note: true,
    },
  });

  // Re-issue JWT with updated info
  const newToken = await signToken({
    userId: updated.id,
    email: updated.email,
    role: updated.role,
    status: updated.status,
  });
  await setAuthCookie(newToken);

  logActivity({
    userId: session.userId,
    action: "UPDATED_PROFILE",
  }).catch(console.error);

  // Post to activity feed when note changes and is non-empty
  if (note && note.trim() && note.trim() !== user.note?.trim()) {
    logActivity({
      userId: session.userId,
      action: "POSTED_STATUS",
      details: {
        note: note.trim(),
        userName: updated.name,
        photoUrl: updated.photoUrl ?? null,
      },
    }).catch(console.error);
  }

  return NextResponse.json({ user: updated });
}

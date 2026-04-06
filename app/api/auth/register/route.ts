import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import {
  signToken,
  signApprovalToken,
  setAuthCookie,
} from "@/lib/auth";
import {
  sendApprovalRequestEmail,
} from "@/lib/email";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain an uppercase letter")
    .regex(/[a-z]/, "Must contain a lowercase letter")
    .regex(/[0-9]/, "Must contain a number")
    .regex(/[^A-Za-z0-9]/, "Must contain a special character"),
  photoUrl: z.string().url().optional().nullable(),
  captchaToken: z.string().optional(),
  turnstileToken: z.string().optional(),
});

async function verifyCaptcha(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // skip in dev
  const res = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    }
  );
  const data = await res.json();
  return data.success === true;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, password, photoUrl, captchaToken, turnstileToken } = parsed.data;

    // Verify Turnstile — required for all public registrations
    const tokenToVerify = turnstileToken || captchaToken;
    if (!tokenToVerify) {
      return NextResponse.json(
        { error: "Missing verification token." },
        { status: 400 }
      );
    }
    const valid = await verifyCaptcha(tokenToVerify);
    if (!valid) {
      return NextResponse.json(
        { error: "CAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Check duplicate email
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "aivan.c.alvarez@gmail.com";
    const isAdmin = email.toLowerCase() === ADMIN_EMAIL.toLowerCase();

    // Check user capacity (10 approved non-admin users max)
    if (!isAdmin) {
      const approvedCount = await prisma.user.count({
        where: { status: "APPROVED", role: "USER" },
      });
      if (approvedCount >= 10) {
        return NextResponse.json(
          {
            error:
              "User capacity has been reached. Please check back later.",
            capacityFull: true,
          },
          { status: 403 }
        );
      }
    }

    const passwordHash = await bcrypt.hash(password, 12);

    if (isAdmin) {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          passwordHash,
          photoUrl,
          role: "ADMIN",
          status: "APPROVED",
        },
      });

      const token = await signToken({
        userId: user.id,
        email: user.email,
        role: "ADMIN",
        status: "APPROVED",
      });
      await setAuthCookie(token);

      return NextResponse.json(
        {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            status: user.status,
          },
          isAdmin: true,
        },
        { status: 201 }
      );
    }

    // Regular user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
        photoUrl,
        role: "USER",
        status: "PENDING",
      },
    });

    const approveToken = await signApprovalToken({
      userId: user.id,
      action: "approve",
    });
    const rejectToken = await signApprovalToken({
      userId: user.id,
      action: "reject",
    });

    // Send email to admin (non-blocking)
    sendApprovalRequestEmail({
      userId: user.id,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      approveToken,
      rejectToken,
    }).catch(console.error);

    return NextResponse.json(
      {
        message:
          "Registration received. Awaiting admin approval. You'll receive an email once your account is approved.",
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Register error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

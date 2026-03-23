import { NextRequest, NextResponse } from "next/server";
import { getSessionFromRequest } from "./lib/auth";

const DASHBOARD_PATHS = ["/dashboard"];
const AUTH_PATHS = ["/login", "/register"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isDashboard = DASHBOARD_PATHS.some((p) => pathname.startsWith(p));
  const isAuth = AUTH_PATHS.some((p) => pathname.startsWith(p));

  const session = await getSessionFromRequest(req);

  if (isDashboard) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
    if (session.status !== "APPROVED" && session.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login?pending=1", req.url));
    }
  }

  if (isAuth && (session?.status === "APPROVED" || session?.role === "ADMIN")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};

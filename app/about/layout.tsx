import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — Empower Queer Hub",
  description:
    "Learn about Wagayway Equality Inc. and Empower Queer Hub — our mission, team, and commitment to LGBTQIA+ advocacy in Batangas, Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement — Empower Queer Hub",
  description:
    "Empower Queer Hub is committed to digital accessibility for all users. Read our accessibility statement and learn how to request accommodations.",
  alternates: { canonical: "https://www.empowerqueerhub.com/accessibility" },
};

export default function AccessibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

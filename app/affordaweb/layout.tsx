import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affordable Website Design Services | AffordaWeb Solutions",
  description:
    "Looking for affordable website design services for your small business? AffordaWeb Solutions builds professional websites starting at $69/mo — no setup fees, no contracts.",
  keywords: [
    "affordable website design services",
    "small business website design",
    "affordable web design",
    "professional website design",
    "website design Philippines",
  ],
  alternates: {
    canonical: "https://www.empowerqueerhub.com/affordaweb",
  },
  openGraph: {
    title: "Affordable Website Design Services | AffordaWeb Solutions",
    description:
      "Professional website design for small businesses starting at $69/mo. No setup fees. No contracts. Just a website that works.",
    url: "https://www.empowerqueerhub.com/affordaweb",
  },
};

export default function AffordaWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Batangas City Equality Desk | Empower Queer Hub",
  description: "A safe, affirming, and community-linked access point for support, protection, information, and referrals in Batangas City.",
  alternates: { canonical: "https://www.empowerqueerhub.com/equality-desk" },
};

export default function EqualityDeskLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

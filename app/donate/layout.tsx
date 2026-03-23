import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Donate — Support LGBTQIA+ Advocacy in the Philippines",
  description: "Support Wagayway Equality Inc. and Empower Queer Hub's advocacy for LGBTQIA+ rights, health, and community development in Batangas, Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/donate" },
};
export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

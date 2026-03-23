import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "LGBTQIA+ Directory — Organizations & Services in the Philippines",
  description: "Find LGBTQIA+-affirming organizations, clinics, legal aid providers, and community services across Batangas and the Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/directory" },
};
export default function DirectoryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

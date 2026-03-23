import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Opportunities — Jobs, Grants & Programs for LGBTQIA+",
  description: "Find livelihood opportunities, scholarships, grants, and employment programs that support LGBTQIA+ individuals and organizations in the Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/opportunities" },
};
export default function OpportunitiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

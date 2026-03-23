import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "LGBTQIA+ Resources — Mental Health, Legal Aid & Support",
  description: "Access curated LGBTQIA+ resources including mental health services, legal aid, HIV support, safe spaces, and livelihood programs in the Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/resources" },
};
export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

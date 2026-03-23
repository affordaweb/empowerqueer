import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQs — Frequently Asked Questions | Empower Queer Hub",
  description: "Find answers to frequently asked questions about Empower Queer Hub, LGBTQIA+ resources, community submissions, and our advocacy programs.",
  alternates: { canonical: "https://www.empowerqueerhub.com/faqs" },
};
export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

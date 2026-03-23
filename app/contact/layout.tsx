import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us — Empower Queer Hub",
  description: "Get in touch with Empower Queer Hub and Wagayway Equality Inc. for inquiries, partnerships, or support.",
  alternates: { canonical: "https://www.empowerqueerhub.com/contact" },
};
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

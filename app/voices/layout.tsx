import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Community Voices & Stories — LGBTQIA+ Lived Experiences",
  description: "Read personal stories, reflections, and community voices from LGBTQIA+ individuals across the Philippines — raw, real, and unapologetic.",
  alternates: { canonical: "https://www.empowerqueerhub.com/voices" },
};
export default function VoicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

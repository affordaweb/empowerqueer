import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Kopisodes — LGBTQIA+ Podcast & Video Advocacy by Wagayway Equality",
  description: "Watch and listen to Kopisodes — the flagship podcast and video advocacy platform of Wagayway Equality Inc., amplifying LGBTQIA+ voices, stories, and rights-based conversations.",
  alternates: { canonical: "https://www.empowerqueerhub.com/kopisodes" },
};
export default function KopsodesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Community Events — LGBTQIA+ Events in Batangas & Philippines",
  description: "Discover and submit LGBTQIA+ community events, pride celebrations, advocacy marches, and support group gatherings in Batangas and across the Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/events" },
};
export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Trainings & Workshops — LGBTQIA+ Skills & Rights Education",
  description: "Browse LGBTQIA+ trainings, workshops, and capacity-building programs on human rights, SOGIESC, HIV education, and advocacy in the Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/trainings" },
};
export default function TrainingsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

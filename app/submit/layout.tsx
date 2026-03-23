import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Submit — Share Events, Resources & Stories | Empower Queer Hub",
  description: "Submit your LGBTQIA+ events, resources, trainings, job opportunities, directory listings, or personal stories to Empower Queer Hub for community review.",
  alternates: { canonical: "https://www.empowerqueerhub.com/submit" },
};
export default function SubmitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

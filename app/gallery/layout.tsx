import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Photo Gallery — Our LGBTQIA+ Community in Photos",
  description: "Browse photos from Empower Queer Hub events, pride celebrations, advocacy marches, and community gatherings in Batangas, Philippines.",
  alternates: { canonical: "https://www.empowerqueerhub.com/gallery" },
};
export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

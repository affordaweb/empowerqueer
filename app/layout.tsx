import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empower Queer Hub — You Are Seen. You Are Valid. You Are Home.",
  description:
    "Empower Queer Hub helps LGBTQIA+ individuals in the Philippines access mental health services, legal aid, safe spaces, livelihood support, and community events through one inclusive digital hub.",
  keywords: [
    "LGBTQIA+",
    "Philippines",
    "mental health",
    "legal aid",
    "community",
    "Batangas",
    "queer",
    "advocacy",
  ],
  openGraph: {
    title: "Empower Queer Hub",
    description: "You Are Seen. You Are Valid. You Are Home.",
    url: "https://www.empowerqueerhub.com",
    siteName: "Empower Queer Hub",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white text-[#5C4A3A]">
        {children}
      </body>
    </html>
  );
}

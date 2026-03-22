import type { Metadata, Viewport } from "next";
import "./globals.css";
import AccessibilityWidget from "./components/AccessibilityWidget";

export const viewport: Viewport = {
  themeColor: "#7C3AED",
  width: "device-width",
  initialScale: 1,
};

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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "EmpowerQueer",
  },
  icons: {
    icon: [
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/icons/icon-192x192.png",
  },
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
      <body className="font-sans antialiased bg-white text-[#5C576E]">
        {children}
        <AccessibilityWidget />
      </body>
    </html>
  );
}

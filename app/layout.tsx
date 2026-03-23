import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import AccessibilityWidget from "./components/AccessibilityWidget";
import VisitorChat from "./components/VisitorChat";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

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
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-white text-[#5C576E]">
        {/* Google Tag (GT-PBGJWC99) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GT-PBGJWC99"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-gt"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("set","linker",{"domains":["www.empowerqueerhub.com"]});
              gtag("js", new Date());
              gtag("set", "developer_id.dZTNiMT", true);
              gtag("config", "GT-PBGJWC99");
            `,
          }}
        />
        {/* Google Analytics 4 (G-8LK6D5R0RX) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8LK6D5R0RX"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "G-8LK6D5R0RX", { "anonymize_ip": true });
            `,
          }}
        />
        {children}
        <AccessibilityWidget />
        <VisitorChat />
        <Script
          id="sw-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `if ('serviceWorker' in navigator) { navigator.serviceWorker.register('/sw.js'); }`,
          }}
        />
      </body>
    </html>
  );
}

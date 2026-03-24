import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import VisitorChat from "./components/VisitorChat";
import IOSInstallBanner from "./components/IOSInstallBanner";

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
  title: {
    default: "Empower Queer Hub — You Are Seen. You Are Valid. You Are Home.",
    template: "%s — Empower Queer Hub",
  },
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
  metadataBase: new URL("https://www.empowerqueerhub.com"),
  alternates: { canonical: "https://www.empowerqueerhub.com" },
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
    images: [
      {
        url: "/empower-queer-logo.png",
        width: 512,
        height: 512,
        alt: "Empower Queer Hub Logo",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Empower Queer Hub",
    description: "You Are Seen. You Are Valid. You Are Home.",
    images: ["/empower-queer-logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Empower Queer Hub",
  alternateName: "Wagayway Equality Inc.",
  url: "https://www.empowerqueerhub.com",
  logo: "https://www.empowerqueerhub.com/empower-queer-logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@empowerqueerhub.com",
    contactType: "customer support",
    areaServed: "PH",
    availableLanguage: ["English", "Filipino"],
  },
  sameAs: ["https://www.facebook.com/wagaywayequality"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batangas",
    addressCountry: "PH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
        <VisitorChat />
        <IOSInstallBanner />
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LeNET0sAAAAAPEEe6JdAhHy_gbbQ-_yM_ps0PD1"
          strategy="afterInteractive"
        />
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

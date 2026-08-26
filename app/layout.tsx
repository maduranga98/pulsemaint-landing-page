import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Firmicore - Strength at the core of every machine.",
    template: "%s | Firmicore",
  },
  description:
    "Firmicore is a mobile-first maintenance platform for factory floors, with breakdown tracking, guided triage, work orders, and repair history.",
  metadataBase: new URL("https://firmicore.com"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Firmicore - Strength at the core of every machine.",
    description:
      "Real-time breakdown tracking, guided operator triage, and maintenance history for manufacturing factories.",
    url: "https://firmicore.com",
    siteName: "Firmicore",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Firmicore" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmicore - Strength at the core of every machine.",
    description:
      "Firmicore is a mobile-first maintenance platform for factory floors, with breakdown tracking, guided triage, work orders, and repair history.",
    images: ["/og-image.png"],
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Firmicore",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Mobile-first CMMS platform for factory maintenance, breakdown tracking, and guided operator triage.",
  offers: {
    "@type": "Offer",
    price: "29",
    priceCurrency: "USD",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Firmicore",
  url: "https://firmicore.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${geistMono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}

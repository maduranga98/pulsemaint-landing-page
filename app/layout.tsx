import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://firmicore.com";
const SITE_NAME = "Firmicore";

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
  metadataBase: new URL(SITE_URL),
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
    url: "https://firmicore.com/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Firmicore - mobile-first CMMS for factory maintenance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmicore - Strength at the core of every machine.",
    description:
      "Firmicore is a mobile-first maintenance platform for factory floors, with breakdown tracking, guided triage, work orders, and repair history.",
    images: ["/og-image.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: "Lumora Ventures Pvt Ltd",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
  },
  description:
    "Mobile-first CMMS for factory maintenance: breakdown tracking, guided operator triage, work orders, and repair history.",
  email: "info@lumoraventures.com",
  telephone: "+94-71-999-8500",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kurunegala Road",
    addressLocality: "Kuliyapitiya",
    postalCode: "60200",
    addressCountry: "LK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@lumoraventures.com",
    telephone: "+94-71-999-8500",
    availableLanguage: ["en"],
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Mobile-first CMMS platform for factory maintenance, breakdown tracking, and guided operator triage.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  // The page advertises four tiers from $29/mo to $249/mo plus Contact Sales.
  // A single Offer at $29 contradicts it; AggregateOffer states the real range.
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "29",
    highPrice: "249",
    offerCount: 4,
    url: `${SITE_URL}/#pricing`,
  },
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

import type { Metadata } from "next";
import { DM_Sans, Geist_Mono, Sora } from "next/font/google";
import "./globals.css";
import { CONTACT_EMAIL, CONTACT_PHONE, LEGAL_NAME, ONE_LINER, SITE_NAME, SITE_URL } from "./site-data";

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
  applicationName: SITE_NAME,
  category: "Business Software",
  keywords: [
    "CMMS",
    "maintenance management software",
    "factory maintenance software",
    "breakdown tracking",
    "work order software",
    "preventive maintenance software",
    "guided operator triage",
    "machine downtime",
    "plant maintenance",
    "MOE",
  ],
  // AI Overviews and assistant answer panes are capped by the snippet
  // directives, not by the meta description. Uncapping them is what allows a
  // full answer to be quoted instead of a truncated fragment.
  robots: {
    index: true,
    follow: true,
    // Set on the generic tag too, not only googleBot: Bing and the assistant
    // crawlers that reuse the standard directives read `name="robots"`.
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
  email: CONTACT_EMAIL,
  telephone: CONTACT_PHONE,
  // sameAs is how an entity gets reconciled against a knowledge graph. Only the
  // parent company's own domain is listed: an unverified profile URL is worse
  // than none, because a wrong reconciliation is hard to undo.
  sameAs: ["https://lumoraventures.com/"],
  parentOrganization: { "@type": "Organization", name: LEGAL_NAME, url: "https://lumoraventures.com/" },
  areaServed: ["LK", "IN", "BD", "SG", "MY", "AE"],
  knowsAbout: [
    "Computerised maintenance management systems",
    "Preventive maintenance scheduling",
    "Breakdown and downtime management",
    "Plant reliability metrics (MTTR, MTBF, OEE)",
    "Industrial safety workflows and permit to work",
  ],
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
  "@id": `${SITE_URL}/#software`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Computerised Maintenance Management System (CMMS)",
  operatingSystem: "Web browser (desktop, mobile, shared tablet)",
  description: ONE_LINER,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: ["en", "si", "ta", "bn"],
  audience: {
    "@type": "BusinessAudience",
    name: "Manufacturing and process plants running mid-to-large equipment fleets",
    audienceType: [
      "Plant managers",
      "Maintenance supervisors",
      "Maintenance technicians",
      "Store keepers",
      "Safety officers",
      "Machine operators",
    ],
  },
  // featureList is the field assistants most often quote back when asked what a
  // product does, so it mirrors the twelve core modules on the homepage exactly.
  featureList: [
    "Machine registry with QR codes and a 0-100 machine health score",
    "Breakdown management with Kanban board, severity tracking and QR-triggered reporting",
    "Work orders with multi-technician checklists and supervisor sign-off",
    "Preventive maintenance on calendar or meter schedules with a compliance dashboard",
    "Inventory and spare parts with approval workflow, purchase orders and suppliers",
    "Contractor registry with four-dimension performance rating",
    "Auto-compiled shift handover reports",
    "Training and certification with quizzes and auto-issued certificates",
    "Guided Triage: multilingual branching troubleshooting trees (EN/SI/TA/BN)",
    "Safety workspace with incident reporting and permit to work",
    "Reports and analytics with 15+ report types exporting to PDF, Excel and Google Sheets",
    "MOE dashboard: composite Machine Overall Effectiveness score per machine",
  ],
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

/**
 * WebSite ties every page to one named entity. Without it each URL is an
 * orphan document; with it, retrieval systems attribute a quoted passage to
 * Firmicore rather than to a bare domain.
 */
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "FirmiCore CMMS",
  url: `${SITE_URL}/`,
  description: ONE_LINER,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#organization` },
  about: { "@id": `${SITE_URL}/#software` },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd, softwareJsonLd]).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

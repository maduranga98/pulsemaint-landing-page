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
    default: "PulseMaint - Keep the pulse of your plant",
    template: "%s | PulseMaint",
  },
  description:
    "PulseMaint is a mobile-first maintenance platform for factory floors, with breakdown tracking, guided triage, work orders, and repair history.",
  metadataBase: new URL("https://pulsemaint.com"),
  openGraph: {
    title: "PulseMaint - Keep the pulse of your plant",
    description:
      "Real-time breakdown tracking, guided operator triage, and maintenance history for manufacturing factories.",
    url: "https://pulsemaint.com",
    siteName: "PulseMaint",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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

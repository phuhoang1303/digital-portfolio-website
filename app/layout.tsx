import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const fraunces = localFont({
  src: "../public/fonts/fraunces-latin.woff2",
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
});

const manrope = localFont({
  src: "../public/fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  display: "swap",
  weight: "200 800",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phuhoang.example"),
  title: {
    default: "Phu Hoang — Digital Performance Marketer",
    template: "%s — Phu Hoang",
  },
  description: "Digital performance marketing portfolio focused on strategy, media, measurement, and growth.",
  openGraph: {
    title: "Phu Hoang — Digital Performance Marketer",
    description: "Strategy · Media · Measurement · Growth",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable}`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

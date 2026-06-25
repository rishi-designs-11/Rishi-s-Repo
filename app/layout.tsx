import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  title: "IGL Potable Spirits | Where Smooth Meets Sophistication",
  description: "India Glycols Limited Potable Spirits Division - premium spirits crafted with industrial precision and enduring responsibility.",
  openGraph: {
    title: "IGL Potable Spirits",
    description: "Where Smooth Meets Sophistication.",
    images: ["/images/hero-glass.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body>{children}</body>
    </html>
  );
}

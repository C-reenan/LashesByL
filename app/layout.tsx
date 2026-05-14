import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HAIR BY SHANNON — Birmingham Braid Atelier",
  description:
    "Private braiding atelier in Birmingham. Knotless, boho, feed-ins & bespoke protective styles by Shannon. Booking by appointment.",
  openGraph: {
    title: "HAIR BY SHANNON — Birmingham Braid Atelier",
    description: "Private braiding atelier in Birmingham, AL.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#070406",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="grain bg-ink-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

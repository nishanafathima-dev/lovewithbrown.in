import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Love With Brown | Handmade Gifts Crafted with Love",
  description:
    "Discover unique handmade gifts at Love With Brown. Custom pencil portraits, pipe cleaner flowers, personalized frames, and surprise hampers crafted with love and emotions.",
  keywords: [
    "handmade gifts",
    "pencil portraits",
    "pipe cleaner flowers",
    "custom frames",
    "surprise hampers",
    "personalized gifts",
    "love with brown",
  ],
  openGraph: {
    title: "Love With Brown | Handmade Gifts Crafted with Love",
    description:
      "Handmade gifts crafted with love and emotions. Pencil portraits, pipe cleaner flowers, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-soft-white text-brown-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

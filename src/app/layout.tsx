import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "UNOCO Shoes — Premium Footwear for the Modern You",
    template: "%s | UNOCO Shoes",
  },
  description:
    "Discover premium footwear crafted for performance, style, and everyday luxury. From running to lifestyle — UNOCO delivers uncompromising quality.",
  keywords: [
    "UNOCO",
    "premium shoes",
    "footwear",
    "sneakers",
    "running shoes",
    "casual shoes",
    "luxury footwear",
  ],
  openGraph: {
    title: "UNOCO Shoes — Premium Footwear for the Modern You",
    description:
      "Discover premium footwear crafted for performance, style, and everyday luxury.",
    url: "https://unocoshoes.com",
    siteName: "UNOCO Shoes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "UNOCO Shoes — Premium Footwear",
    description:
      "Premium footwear crafted for performance, style, and everyday luxury.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen flex flex-col")}>
        <Header />
        <MobileMenu />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

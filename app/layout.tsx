import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JUJYS Mahogany & Paints Centre | Premium Building Materials in Nairobi",
  description: "Your trusted supplier of premium mahogany, mvule products, paints, skimming products, gypsum, MDF and particle boards in Nairobi, Kenya. Call +254 728 060501",
  keywords: ["mahogany", "paints", "building materials", "Nairobi", "Kenya", "mvule", "gypsum", "MDF", "particle boards", "skimming"],
  authors: [{ name: "JUJYS Mahogany & Paints Centre" }],
  openGraph: {
    title: "JUJYS Mahogany & Paints Centre | Premium Building Materials",
    description: "Quality mahogany, paints, and building materials in Nairobi, Kenya",
    type: "website",
    locale: "en_KE",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

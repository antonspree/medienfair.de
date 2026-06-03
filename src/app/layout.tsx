import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Medienfair – Planbar Kunden und Partner gewinnen",
  description:
    "Klare Systeme für Finanzberater – für mehr Sichtbarkeit, Vertrauen und qualifizierte Anfragen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#141414]">
        {children}
      </body>
    </html>
  );
}

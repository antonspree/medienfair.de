import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { BeispieleComingSoon } from "@/components/pages/BeispieleComingSoon";

export const metadata: Metadata = {
  title: "Beispiele – Medienfair",
  description:
    "Beispiel-Landingpages für Finanzberater: Vertriebspartner gesucht, Recruiting und mehr – gebaut mit dem Medienfair-System.",
};

export default function BeispielePage() {
  return (
    <>
      <Header />
      <main>
        <BeispieleComingSoon />
      </main>
      <Footer />
    </>
  );
}

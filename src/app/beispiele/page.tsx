import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { BeispieleComingSoon } from "@/components/pages/BeispieleComingSoon";

export const metadata: Metadata = {
  title: "Beispiele – Medienfair",
  description:
    "Ausgewählte Projekte für Finanzberater – bald verfügbar. Websites, Kampagnen und Online-Systeme von Medienfair.",
};

export default function BeispielePage() {
  return (
    <>
      <Header />
      <main>
        <BeispieleComingSoon />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

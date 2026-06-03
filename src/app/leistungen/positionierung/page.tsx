import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { PositionierungSubpage } from "@/components/pages/positionierung/PositionierungSubpage";

export const metadata: Metadata = {
  title: "Positionierung – Medienfair",
  description:
    "Klare Positionierung für Finanzberater: Zielgruppe, Expertenrolle und einheitliche Botschaft – damit du online nicht wie jeder andere wirkst.",
};

export default function PositionierungPage() {
  return (
    <>
      <Header />
      <main>
        <PositionierungSubpage />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

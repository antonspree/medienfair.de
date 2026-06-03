import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { VertriebspartnerLanding } from "@/components/examples/VertriebspartnerLanding";

export const metadata: Metadata = {
  title: "Beispiel: Vertriebspartner gesucht – Medienfair",
  description:
    "Beispiel-Landingpage für Finanzberater: Vertriebspartner gewinnen mit klarer Positionierung, Vertrauen und qualifizierten Bewerbungen.",
};

export default function VertriebspartnerBeispielPage() {
  return (
    <>
      <Header />
      <main>
        <VertriebspartnerLanding />
      </main>
      <Footer />
    </>
  );
}

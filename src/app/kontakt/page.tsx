import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { KontaktPageContent } from "@/components/pages/KontaktPageContent";

export const metadata: Metadata = {
  title: "Kontakt – Medienfair",
  description:
    "Buche dein kostenloses Erstgespräch mit Medienfair – Termin online per Calendly, unverbindlich für Unternehmen.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main>
        <KontaktPageContent />
      </main>
      <Footer />
    </>
  );
}

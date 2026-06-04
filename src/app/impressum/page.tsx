import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { impressumPage } from "@/content/rechtliches/impressum";

export const metadata: Metadata = {
  title: "Impressum – Medienfair",
  description: impressumPage.description,
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPageContent content={impressumPage} />
      </main>
      <Footer />
    </>
  );
}

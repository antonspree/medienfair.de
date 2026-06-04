import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { LegalPageContent } from "@/components/pages/LegalPageContent";
import { datenschutzPage } from "@/content/rechtliches/datenschutz";

export const metadata: Metadata = {
  title: "Datenschutz – Medienfair",
  description: datenschutzPage.description,
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main>
        <LegalPageContent content={datenschutzPage} />
      </main>
      <Footer />
    </>
  );
}

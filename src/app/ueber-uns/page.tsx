import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { ServiceSubpage } from "@/components/pages/leistungen/ServiceSubpage";
import { ueberUnsPage } from "@/content/ueber-uns";

export const metadata: Metadata = {
  title: "Über uns – Medienfair",
  description: ueberUnsPage.metaDescription,
};

export default function UeberUnsPage() {
  return (
    <>
      <Header />
      <main>
        <ServiceSubpage content={ueberUnsPage} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

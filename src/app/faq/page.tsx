import type { Metadata } from "next";
import { Header } from "@/components/sections/Header";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { FaqPageContent } from "@/components/pages/FaqPageContent";
import { faqPageMeta } from "@/content/faq";

export const metadata: Metadata = {
  title: faqPageMeta.title,
  description: faqPageMeta.description,
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FaqPageContent />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

"use client";

import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { ExampleBanner } from "@/components/examples/ExampleBanner";
import { fontInter, superellipse } from "@/lib/paper";
import { ACCENT_BG, faqItems } from "./vertriebspartner/data";
import { VertriebspartnerHero } from "./vertriebspartner/VertriebspartnerHero";
import { VertriebspartnerDashboard } from "./vertriebspartner/VertriebspartnerDashboard";
import { VertriebspartnerTrustRow } from "./vertriebspartner/VertriebspartnerTrustRow";
import { VertriebspartnerComparison } from "./vertriebspartner/VertriebspartnerComparison";
import { VertriebspartnerFeatureGrid } from "./vertriebspartner/VertriebspartnerFeatureGrid";
import { VertriebspartnerHowItWorks } from "./vertriebspartner/VertriebspartnerHowItWorks";
import { VertriebspartnerNarrative } from "./vertriebspartner/VertriebspartnerNarrative";

export function VertriebspartnerLanding() {
  return (
    <div className={fontInter}>
      <ExampleBanner />
      <VertriebspartnerHero />
      <VertriebspartnerDashboard />
      <VertriebspartnerTrustRow />
      <VertriebspartnerComparison />
      <VertriebspartnerFeatureGrid />
      <VertriebspartnerHowItWorks />
      <VertriebspartnerNarrative />

      <section className="mx-auto max-w-xl px-5 py-8">
        <Reveal className="mb-8 text-center">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-4 text-2xl font-medium text-[#181925] sm:text-3xl">
            Häufige Fragen von Interessenten
          </h2>
        </Reveal>
        <Reveal>
          <FaqAccordion items={faqItems} defaultOpenId="vp-1" />
        </Reveal>
      </section>

      <section id="bewerben" className="px-5 pb-20 pt-8">
        <Reveal className="mx-auto max-w-5xl">
          <div
            className={`flex flex-col items-center gap-5 rounded-3xl px-6 py-16 text-center sm:px-10 ${superellipse}`}
            style={{ backgroundColor: ACCENT_BG }}
          >
            <h2 className="max-w-lg text-4xl font-medium leading-[1.12] text-balance text-[#181925] sm:text-4xl">
              Bereit für dein Partnergespräch?
            </h2>
            <p className="max-w-md text-base font-medium leading-relaxed text-[#666666]">
              Unverbindlich, ehrlich und ohne Druck. Wir klären Modell, Erwartungen und nächste
              Schritte – in 30 Minuten.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/kontakt" className="!bg-[#0EA5E9] hover:!bg-[#0c94d4]">
                Termin sichern
              </Button>
              <Button variant="secondary" href="tel:+491701234567">
                Oder anrufen
              </Button>
            </div>
            <p className="text-xs font-medium text-[#999999]">
              Beispiel-CTA · Im echten Projekt z. B. Calendly oder Formular
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

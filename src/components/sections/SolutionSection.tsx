"use client";

import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { fontInter } from "@/lib/paper";
import { PaperFeatureCardWebsite } from "@/components/paper/nodes/PaperFeatureCardWebsite";
import { PaperFeatureCardVisibility } from "@/components/paper/nodes/PaperFeatureCardVisibility";
import { PaperFeatureCardPositioning } from "@/components/paper/nodes/PaperFeatureCardPositioning";
import { PaperFeatureCardLeads } from "@/components/paper/nodes/PaperFeatureCardLeads";
import { PaperLegalCard } from "@/components/paper/nodes/PaperLegalCard";
import { PaperAddonCard } from "@/components/paper/nodes/PaperAddonCard";

const featureCards = [
  { Component: PaperFeatureCardWebsite, tall: false },
  { Component: PaperFeatureCardVisibility, tall: false },
  { Component: PaperFeatureCardPositioning, tall: true },
  { Component: PaperFeatureCardLeads, tall: true },
];

export function SolutionSection() {
  return (
    <section id="leistungen" className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-5 py-16">
      <Reveal className={`flex flex-col items-center gap-[13px] text-center ${fontInter}`}>
        <SectionBadge>Die Lösung</SectionBadge>
        <h2 className="max-w-lg text-3xl font-medium leading-tight text-[#181925] sm:text-4xl sm:leading-[1.15]">
          Alles, was Finanzberater brauchen
        </h2>
        <p className="max-w-md text-lg font-medium leading-6 text-[#666666]">
          Um online Vertrauen aufzubauen und qualifizierte Anfragen und Partner zu gewinnen.
        </p>
        <Button href="#kontakt">Analyse anfragen</Button>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2 md:items-stretch">
        {featureCards.map(({ Component, tall }, i) => (
          <Reveal
            key={i}
            delay={i * 0.08}
            className={tall ? "md:min-h-[548px]" : "h-full"}
          >
            <Component />
          </Reveal>
        ))}

        <Reveal className="col-span-1 grid gap-4 md:col-span-2 md:grid-cols-2">
          <PaperLegalCard />
          <PaperAddonCard />
        </Reveal>
      </div>
    </section>
  );
}

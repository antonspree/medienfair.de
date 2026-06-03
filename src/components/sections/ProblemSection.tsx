"use client";

import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { XCircleIcon } from "@/components/icons/XCircleIcon";
import { Reveal } from "@/components/motion/Reveal";

const problems = [
  "Keine qualifizierten Anfragen",
  "Nicht unterscheidbar von Anderen",
  "Kein Vertrauen vor dem Erstgespräch",
  "Zeitverlust durch unpassende Leads",
];

export function ProblemSection() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-5 py-8 lg:flex-row lg:items-start lg:justify-center lg:gap-14">
      <Reveal className="flex max-w-lg flex-col items-start gap-[13px]">
        <SectionBadge>Das Problem</SectionBadge>
        <h2 className="text-3xl font-medium leading-tight text-balance text-[#181925] sm:text-4xl sm:leading-[1.15]">
          Viele Finanzdienstleister sind online präsent – aber nicht klar
          positioniert.
        </h2>
        <p className="max-w-md text-lg font-medium leading-6 text-[#666666]">
          Eine einfache Website reicht nicht. Was fehlt, ist ein vollständiges
          System – von der Positionierung über die Website bis zur qualifizierten
          Anfrage.
        </p>
        <Button href="#kontakt">Analyse anfragen</Button>
      </Reveal>

      <Reveal delay={0.1} className="w-full max-w-sm lg:max-w-md">
        <div className="flex flex-col gap-2">
          {problems.map((text) => (
            <div key={text} className="flex items-center gap-2">
              <XCircleIcon />
              <span className="text-sm font-medium leading-[155%] text-[#181925]">
                {text}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

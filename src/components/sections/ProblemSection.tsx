"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { fontInter } from "@/lib/paper";
import { IconXCircle } from "@/components/icons/paper/Icons";

const problems = [
  "Keine qualifizierten Anfragen",
  "Nicht unterscheidbar von Anderen",
  "Kein Vertrauen vor dem Erstgespräch",
  "Zeitverlust durch unpassende Leads",
];

export function ProblemSection() {
  return (
    <section className={`bg-white py-16 sm:py-20 ${fontInter}`}>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-5 lg:flex-row lg:items-center lg:justify-center lg:gap-[35px]">
        <Reveal className="flex max-w-lg flex-col items-start gap-[13px]">
          <span className="inline-flex h-6 items-center justify-center rounded-md bg-[#1b263b]/[0.08] px-2 text-sm font-medium text-[#1b263b]/60">
            Das Problem
          </span>
          <h2 className="max-w-lg text-3xl font-medium leading-tight text-balance text-[#1b263b] sm:text-4xl sm:leading-[1.15]">
            Viele Unternehmen sind online präsent – aber nicht klar positioniert.
          </h2>
          <p className="max-w-md text-lg font-medium leading-6 text-[#1b263b]/70">
            Eine einfache Website reicht nicht. Was fehlt, ist ein vollständiges System – von der
            Positionierung über die Website bis zur qualifizierten Anfrage.
          </p>
          <Button href="#kontakt">Analyse anfragen</Button>
        </Reveal>

        <Reveal delay={0.1} className="w-full max-w-sm lg:max-w-md">
          <div className="flex max-w-[320px] flex-col gap-1.5">
            {problems.map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <IconXCircle className="!size-5" />
                <span className="text-base font-medium leading-[155%] text-[#1b263b]">{text}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

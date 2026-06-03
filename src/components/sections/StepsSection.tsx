"use client";

import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { fontInter } from "@/lib/paper";
import { StepCsvIllustration } from "@/components/illustrations/StepCsvIllustration";
import { StepKanbanIllustration } from "@/components/illustrations/StepKanbanIllustration";
import { StepWorkflowIllustration } from "@/components/illustrations/StepWorkflowIllustration";

const steps = [
  {
    num: "01",
    text: "Wir klären Ziele und Hebel. Danach ist klar, welche Botschaft du vermittelst.",
    illustration: <StepCsvIllustration />,
  },
  {
    num: "02",
    text: "Wir entwickeln Strukturen, Texte und Design – die deine Beratung seriös verkaufen.",
    illustration: <StepKanbanIllustration />,
  },
  {
    num: "03",
    text: "Unser System sorgt dafür, dass du passende Anfragen erhältst – planungssicher.",
    illustration: <StepWorkflowIllustration />,
  },
];

export function StepsSection() {
  return (
    <section id="ablauf" className={`flex flex-col gap-12 overflow-hidden py-16 ${fontInter}`}>
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-[13px] px-5 text-center">
        <SectionBadge>Schritt für Schritt</SectionBadge>
        <h2 className="max-w-md text-3xl font-medium leading-tight text-[#181925] sm:text-4xl sm:leading-[1.15]">
          Get started
        </h2>
        <p className="max-w-sm text-base font-medium leading-5 text-[#666666]">
          Wir nehmen dir nicht nur Designarbeit ab. Wir strukturieren die gesamte digitale
          Entscheidungsreise deiner Interessenten.
        </p>
        <Button href="#kontakt">Analyse anfragen</Button>
      </Reveal>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-5 md:grid-cols-3 md:items-stretch">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.1} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-black/[0.03]">
              <div className="border-b border-solid border-black/[0.05]">
                {step.illustration}
              </div>
              <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
                <span className="flex h-9 w-10 items-center justify-center rounded-full bg-white text-lg font-medium text-[#4562D7]">
                  {step.num}
                </span>
                <p className="text-lg font-medium leading-6 text-[#181925]">{step.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { CalendlyInline } from "@/components/kontakt/CalendlyInline";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { fontInter } from "@/lib/paper";

export function KontaktPageContent() {
  return (
    <div
      className={`flex flex-col items-center gap-10 bg-white pt-12 pb-16 antialiased sm:gap-12 sm:pt-16 ${fontInter}`}
    >
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 text-center">
        <SectionBadge>Kontakt</SectionBadge>
        <h1 className="max-w-xl text-3xl font-medium tracking-[-0.63px] text-[#1b263b] sm:text-4xl sm:leading-[1.15]">
          Kostenloses Erstgespräch
        </h1>
        <p className="max-w-lg text-base font-medium leading-[150%] text-[#999999]">
          Wähle einen passenden Termin – unverbindlich, ohne Verkaufsdruck. Wir
          schauen gemeinsam auf Positionierung, Website, Sichtbarkeit und Anfragen.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto w-full max-w-3xl px-5">
        <CalendlyInline />
      </Reveal>
    </div>
  );
}

"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { partners } from "./data";
import { AccentPillLink } from "./AccentPillLink";

export function VertriebspartnerHero() {
  return (
    <section className="overflow-hidden bg-white pb-6 pt-10 sm:pb-8 sm:pt-14">
      <Reveal className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 px-5 text-center">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="flex size-14 items-center justify-center rounded-full bg-[#0EA5E914] text-lg font-semibold text-[#0EA5E9] ring-1 ring-black/[0.06] sm:size-16 sm:text-xl">
            FB
          </div>
          <span className="text-sm font-medium text-[#999999]">vs</span>
          <div className="flex size-14 items-center justify-center rounded-full bg-black/[0.04] text-[#666666] ring-1 ring-black/[0.06] sm:size-16">
            <svg width={28} height={28} viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinejoin="round"
              />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <p className="text-sm font-medium text-[#999999]">
          Beispiel · Finanzhaus Berger · Unabhängige Finanzberatung
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-balance text-[#181925] sm:text-5xl md:text-6xl md:leading-[1.06]">
          Vertriebspartner gewinnen – mit Auftritt, der überzeugt, bevor das Gespräch startet.
        </h1>

        <p className="max-w-xl text-lg font-medium leading-[150%] text-[#666666]">
          Keine generische Stellenanzeige: klares Modell, Vorqualifizierung und ein System aus
          Website, Marketing und Prozessen – damit die richtigen Menschen bei dir landen.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <AccentPillLink href="#bewerben">Partnergespräch anfragen</AccentPillLink>
          <AccentPillLink href="#vergleich" variant="secondary">
            Mit Karriereseite vergleichen
          </AccentPillLink>
        </div>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-40">
          {partners.map((logo) => (
            <div key={logo.src} className="px-2">
              <Image
                src={logo.src}
                alt=""
                width={logo.w}
                height={logo.h}
                className={`h-6 w-auto max-w-full object-contain ${logo.className ?? ""}`}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

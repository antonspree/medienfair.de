"use client";

import { Reveal } from "@/components/motion/Reveal";
import { ACCENT } from "./data";

export function VertriebspartnerNarrative() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:py-20">
      <Reveal>
        <p className="text-2xl font-medium leading-[1.35] tracking-tight text-[#181925] sm:text-3xl md:text-[2rem] md:leading-[1.3]">
          Die besten Vertriebspartner entscheiden nicht nach dem Logo – sondern danach, ob sie{" "}
          <span style={{ color: ACCENT }}>verstehen, was auf sie zukommt</span> und ob sie dem
          Auftritt vertrauen, bevor sie anrufen.
        </p>
        <p className="mx-auto mt-8 max-w-lg text-base font-medium leading-relaxed text-[#666666]">
          Genau deshalb kombiniert dieses Beispiel klare Positionierung, ein transparentes Modell
          und messbare Bewerbungen – statt einer weiteren anonymen Karriereseite.
        </p>
        <blockquote className="mt-12 border-t border-black/[0.06] pt-10 text-xl font-medium leading-[1.4] text-[#181925] sm:text-2xl">
          „Ich wusste nach 20 Minuten, ob das zu mir passt – und hatte keine Angst vor dem
          Gespräch.“
          <footer className="mt-4 text-sm font-medium text-[#999999]">
            — Beispiel-Zitat · Vertriebspartner seit 2024
          </footer>
        </blockquote>
      </Reveal>
    </section>
  );
}

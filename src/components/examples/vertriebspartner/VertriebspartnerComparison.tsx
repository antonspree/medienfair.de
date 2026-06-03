"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ACCENT, comparisonRows } from "./data";

function CellMark({ ok }: { ok: boolean }) {
  if (ok) {
    return (
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-[#0EA5E914]">
        <svg width={14} height={14} viewBox="0 0 16 16" aria-hidden>
          <path
            d="M4.785 8.699L6.914 10.838L10.461 5.541"
            fill="none"
            stroke={ACCENT}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    );
  }
  return (
    <span className="inline-flex size-7 items-center justify-center text-[#CCCCCC]">
      <svg width={14} height={14} viewBox="0 0 16 16" aria-hidden>
        <path d="M4 8h8" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" />
      </svg>
    </span>
  );
}

export function VertriebspartnerComparison() {
  return (
    <section id="vergleich" className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <Reveal className="mb-10 flex flex-col items-center gap-4 text-center">
        <SectionBadge>Vergleich</SectionBadge>
        <h2 className="max-w-xl text-3xl font-medium leading-tight text-[#181925] sm:text-4xl">
          Finanzhaus Berger vs. klassische Karriereseite
        </h2>
        <p className="max-w-md text-base font-medium leading-relaxed text-[#666666]">
          Was Partner wirklich überzeugt – und was die meisten „Wir suchen dich“-Seiten nicht liefern.
        </p>
      </Reveal>

      <Reveal delay={0.06}>
        <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-black/[0.06] bg-black/[0.02] px-4 py-3 text-xs font-medium text-[#666666] sm:px-6 sm:text-sm">
            <span>Merkmal</span>
            <span className="w-20 text-center sm:w-24">Berger</span>
            <span className="w-20 text-center sm:w-24">Klassisch</span>
          </div>
          {comparisonRows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_auto_auto] items-center gap-2 px-4 py-3.5 sm:px-6 ${
                i < comparisonRows.length - 1 ? "border-b border-black/[0.05]" : ""
              }`}
            >
              <span className="pr-2 text-sm font-medium text-[#181925] sm:text-base">
                {row.feature}
              </span>
              <div className="flex w-20 justify-center sm:w-24">
                <CellMark ok={row.berger} />
              </div>
              <div className="flex w-20 justify-center sm:w-24">
                <CellMark ok={row.classic} />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

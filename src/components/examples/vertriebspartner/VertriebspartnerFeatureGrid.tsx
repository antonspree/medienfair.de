"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { superellipse } from "@/lib/paper";
import { featureCards, type FeatureCard } from "./data";

function FeatureCardBlock({ card }: { card: FeatureCard }) {
  return (
    <div
      className={`relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl bg-black/[0.03] sm:min-h-70 ${superellipse}`}
    >
      <div className="flex flex-col gap-2 px-6 py-6 sm:px-8">
        <span
          className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
        >
          <span className="size-2.5 rounded-full" style={{ backgroundColor: card.accent }} />
        </span>
        <p className="text-2xl font-medium leading-7" style={{ color: card.accent }}>
          {card.title}
        </p>
        <p className="max-w-[288px] text-2xl font-medium leading-7 text-[#181925]">
          {card.subtitle}
        </p>
      </div>
      <div className="mt-auto flex min-h-[140px] items-end justify-center overflow-hidden border-t border-black/[0.04] px-4 pb-4 pt-2 sm:min-h-[180px]">
        <div className="w-full max-w-sm scale-90 sm:scale-100">{card.illustration}</div>
      </div>
    </div>
  );
}

export function VertriebspartnerFeatureGrid() {
  return (
    <section id="modell" className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <Reveal className="mb-10 flex flex-col items-center gap-4 text-center">
        <SectionBadge>System</SectionBadge>
        <h2 className="max-w-xl text-3xl font-medium leading-tight text-[#181925] sm:text-4xl">
          Alles, was Partner vor dem Ja brauchen
        </h2>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {featureCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.05}>
            <FeatureCardBlock card={card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

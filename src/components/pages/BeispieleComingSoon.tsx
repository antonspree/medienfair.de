"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { fontInter } from "@/lib/paper";

function ExampleCardSkeleton() {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-black/[0.03] opacity-60">
      <div className="relative aspect-[4/3] animate-pulse bg-black/[0.04]" />
      <div className="flex flex-col gap-3 p-5">
        <div className="h-4 w-2/3 animate-pulse rounded-md bg-black/[0.06]" />
        <div className="h-3 w-full animate-pulse rounded-md bg-black/[0.04]" />
      </div>
    </article>
  );
}

export function BeispieleComingSoon() {
  return (
    <div
      className={`flex flex-col items-center gap-12 bg-white pt-12 pb-16 antialiased sm:gap-16 sm:pt-16 ${fontInter}`}
    >
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 text-center">
        <SectionBadge>Beispiele</SectionBadge>
        <h1 className="max-w-xl text-3xl font-medium tracking-[-0.63px] text-[#181925] sm:text-4xl sm:leading-[1.15]">
          So können deine Landingpages aussehen
        </h1>
        <p className="max-w-lg text-base font-medium leading-[150%] text-[#999999]">
          Konkrete Beispiele für Finanzberater – von Kundengewinnung bis
          Vertriebspartner-Recruiting.
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mx-auto w-full max-w-5xl px-5">
        <p className="mb-4 text-center text-sm font-medium text-[#999999]">
          Referenzen folgen in Kürze
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ExampleCardSkeleton key={i} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

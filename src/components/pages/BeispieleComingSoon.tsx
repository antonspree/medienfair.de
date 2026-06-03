"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { fontInter } from "@/lib/paper";

function SkeletonLine({
  className,
  delayMs = 0,
}: {
  className?: string;
  delayMs?: number;
}) {
  return (
    <div
      className={`rounded-md bg-black/[0.05] motion-safe:animate-pulse ${className ?? ""}`}
      style={{ animationDelay: `${delayMs}ms` }}
      aria-hidden
    />
  );
}

function ExampleCardSkeleton({ index }: { index: number }) {
  const delay = index * 140;

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-black/[0.03]">
      <div className="border-b border-black/[0.05]">
        <div
          className="relative aspect-[4/3] overflow-hidden bg-black/[0.02] motion-safe:animate-pulse"
          style={{ animationDelay: `${delay}ms` }}
          aria-hidden
        >
          <div className="absolute inset-0 flex flex-col gap-3 p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-black/[0.06]" />
              <div className="h-2 flex-1 max-w-[40%] rounded-full bg-black/[0.06]" />
            </div>
            <div className="min-h-0 flex-1 rounded-xl bg-black/[0.04]" />
            <div className="flex gap-2">
              <div className="h-2 flex-1 rounded-full bg-black/[0.04]" />
              <div className="h-2 w-1/4 rounded-full bg-black/[0.04]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 p-5 sm:p-6">
        <SkeletonLine className="h-3.5 w-[58%]" delayMs={delay + 80} />
        <SkeletonLine className="h-2.5 w-full" delayMs={delay + 120} />
        <SkeletonLine className="h-2.5 w-[72%]" delayMs={delay + 160} />
        <div className="mt-0.5 flex flex-wrap gap-2">
          <span
            className="h-7 w-[4.5rem] rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04)] motion-safe:animate-pulse"
            style={{ animationDelay: `${delay + 200}ms` }}
            aria-hidden
          />
          <span
            className="h-7 w-[5.5rem] rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.04)] motion-safe:animate-pulse"
            style={{ animationDelay: `${delay + 240}ms` }}
            aria-hidden
          />
        </div>
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
          Coming Soon
        </h1>
        <p className="max-w-lg text-base font-medium leading-[150%] text-[#999999]">
          Hier zeigen wir bald ausgewählte Projekte von Finanzberatern – Websites,
          Kampagnen und Systeme aus einem Guss.
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mx-auto w-full max-w-5xl px-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <ExampleCardSkeleton key={i} index={i} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-medium text-[#999999]">
          Referenzen werden gerade vorbereitet.
        </p>
      </Reveal>
    </div>
  );
}

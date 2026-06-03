"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Button } from "@/components/ui/Button";
import { fontInter, superellipse } from "@/lib/paper";

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
        <Link
          href="/beispiele/vertriebspartner-gesucht"
          className={`group block overflow-hidden rounded-2xl bg-black/[0.03] transition-shadow hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] ${superellipse}`}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src="/images/ueber-uns/hero.webp"
              alt=""
              fill
              className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 1024px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-left sm:p-8">
              <span className="inline-flex rounded-md bg-[#0EA5E9] px-2 py-0.5 text-xs font-medium text-white">
                Live-Beispiel
              </span>
              <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                Vertriebspartner gesucht
              </h2>
              <p className="mt-2 max-w-lg text-sm font-medium text-white/80">
                Recruiting-Landingpage für Finanzberater – Hero, Benefits, Prozess,
                FAQ und CTA aus unserem System.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6">
            <p className="text-sm font-medium text-[#666666]">
              Fiktives Beispiel „Finanzhaus Berger“
            </p>
            <Button
              href="/beispiele/vertriebspartner-gesucht"
              className="!bg-[#0EA5E9] hover:!bg-[#0c94d4]"
            >
              Beispiel ansehen
            </Button>
          </div>
        </Link>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto w-full max-w-5xl px-5">
        <p className="mb-4 text-center text-sm font-medium text-[#999999]">
          Weitere Referenzen folgen
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

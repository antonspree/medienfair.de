"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { fontInter } from "@/lib/paper";
import { IconChevronRight, IconXCircle } from "@/components/icons/paper/Icons";

const partners = [
  { src: "/images/logo-partner-1.png", w: 51, h: 24, className: "w-[51px]" },
  { src: "/images/logo-partner-2.png", w: 40, h: 24 },
  { src: "/images/logo-partner-3.png", w: 41, h: 27, className: "w-[41px]" },
  { src: "/images/logo-partner-4.png", w: 68, h: 24, className: "w-[68px]" },
  { src: "/images/logo-partner-5.png", w: 25, h: 24 },
  { src: "/images/logo-partner-6.png", w: 92, h: 27, className: "w-[92px]" },
];

const problems = [
  "Keine qualifizierten Anfragen",
  "Nicht unterscheidbar von Anderen",
  "Kein Vertrauen vor dem Erstgespräch",
  "Zeitverlust durch unpassende Leads",
];

export function HeroSection() {
  return (
    <section className={`flex flex-col items-center gap-16 overflow-hidden bg-white pb-16 pt-10 ${fontInter}`}>
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-[17px] px-5">
        <a
          href="#kontakt"
          className="flex items-center gap-2 rounded-lg bg-[#2C78FC14] py-1.5 pl-1.5 pr-2.5 transition-colors hover:bg-[#2C78FC1F]"
        >
          <span
            className="flex h-5 items-center justify-center rounded-md px-1.5 text-xs font-medium capitalize text-white"
            style={{
              backgroundImage:
                "linear-gradient(180deg, oklab(60.3% -0.034 -0.208) 0%, oklab(69.2% 0.035 -0.147) 100%)",
            }}
          >
            Neu
          </span>
          <span className="text-sm font-medium text-[#2C78FC]">Kostenlose Analyse anfragen</span>
          <IconChevronRight stroke="#2C78FC" className="-ml-1" />
        </a>

        <h1 className="text-center text-4xl font-semibold leading-[1.15] text-balance text-[#141414] sm:text-5xl md:text-6xl md:leading-[1.12]">
          Planbar Kunden und Partner gewinnen.
        </h1>
        <p className="max-w-md text-center text-lg font-medium leading-6 text-[#666666]">
          Klare Systeme für Finanzberater – für mehr Sichtbarkeit, Vertrauen und qualifizierte Anfragen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button href="#kontakt">Analyse anfragen</Button>
          <Button variant="secondary" href="#ablauf">
            Mehr erfahren
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto max-w-3xl px-5">
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 opacity-40">
          {partners.map((logo) => (
            <div key={logo.src} className="px-4">
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

      <Reveal delay={0.15} className="w-full">
        <div
          className="bg-cover bg-center bg-no-repeat pt-28 pb-20"
          style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
        >
          <div className="mx-auto max-w-5xl px-5">
            <div className="relative aspect-[8/5] w-full overflow-hidden rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)]">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard Vorschau"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Problem – Paper 32N-0 (im Hero-Frame) */}
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-5 lg:flex-row lg:items-center lg:justify-center lg:gap-[35px]">
        <Reveal className="flex max-w-lg flex-col items-start gap-[13px]">
          <SectionBadge>Das Problem</SectionBadge>
          <h2 className="max-w-lg text-3xl font-medium leading-tight text-balance text-[#181925] sm:text-4xl sm:leading-[1.15]">
            Viele Finanzdienstleister sind online präsent – aber nicht klar positioniert.
          </h2>
          <p className="max-w-md text-lg font-medium leading-6 text-[#666666]">
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
                <span className="text-base font-medium leading-[155%] text-[#181925]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

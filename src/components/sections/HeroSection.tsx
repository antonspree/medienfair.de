"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { PaperPlayButton } from "@/components/paper/nodes/PaperPlayButton";
import { YoutubeVideoModal } from "@/components/ui/YoutubeVideoModal";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { fontInter, paper } from "@/lib/paper";
import { IconChevronRight } from "@/components/icons/paper/Icons";

const partnerLogoClass =
  "h-6 w-auto max-w-full object-contain opacity-80 [filter:brightness(0)_saturate(100%)_invert(12%)_sepia(15%)_saturate(2000%)_hue-rotate(182deg)_brightness(95%)_contrast(90%)]";

const partners = [
  { src: "/images/logo-partner-1.png", w: 51, h: 24, className: "w-[51px]" },
  { src: "/images/logo-partner-2.png", w: 40, h: 24 },
  { src: "/images/logo-partner-3.png", w: 41, h: 27, className: "w-[41px]" },
  { src: "/images/logo-partner-4.png", w: 68, h: 24, className: "w-[68px]" },
  { src: "/images/logo-partner-5.png", w: 25, h: 24 },
  { src: "/images/logo-partner-6.png", w: 92, h: 27, className: "w-[92px]" },
];

export function HeroSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section className={`flex flex-col items-center gap-16 overflow-hidden bg-white pt-10 pb-0 ${fontInter}`}>
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-[17px] px-5">
        <a
          href="#kontakt"
          className="flex items-center gap-2 rounded-lg bg-[#FCA31114] py-1.5 pl-1.5 pr-2.5 transition-colors hover:bg-[#FCA3111F]"
        >
          <span
            className="flex h-5 items-center justify-center rounded-md px-1.5 text-xs font-medium capitalize text-white"
            style={{
              backgroundImage: `linear-gradient(180deg, ${paper.primary} 0%, #e8940f 100%)`,
            }}
          >
            Neu
          </span>
          <span className="text-sm font-medium text-[#fca311]">Kostenlose Analyse anfragen</span>
          <IconChevronRight stroke="#fca311" className="-ml-1" />
        </a>

        <h1 className="text-center text-4xl font-semibold leading-[1.15] text-balance text-[#1b263b] sm:text-5xl md:text-6xl md:leading-[1.12]">
          Planbar Kunden und Partner gewinnen.
        </h1>
        <p className="max-w-md text-center text-lg font-medium leading-6 text-[#1b263b]/70">
          Klare Systeme für Unternehmen – für mehr Sichtbarkeit, Vertrauen und qualifizierte Anfragen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <Button href="#kontakt">Analyse anfragen</Button>
          <Button
            variant="secondary"
            href="#ablauf"
            className="!bg-[#1b263b]/10 !text-[#1b263b] hover:!bg-[#1b263b]/15"
          >
            Mehr erfahren
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto max-w-3xl px-5">
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {partners.map((logo) => (
            <div key={logo.src} className="px-4">
              <Image
                src={logo.src}
                alt=""
                width={logo.w}
                height={logo.h}
                className={`${partnerLogoClass} ${logo.className ?? ""}`}
              />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.15} className="w-full">
        <div className="relative pt-28 pb-20">
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
            style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
          />
          <div className="relative mx-auto max-w-5xl px-5">
            <div className="group relative aspect-[8/5] w-full overflow-hidden rounded-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <LogoIcon variant="dark" className="w-[min(28%,140px)]" />
              </div>
              <PaperPlayButton light onClick={() => setVideoOpen(true)} />
            </div>
          </div>
        </div>
      </Reveal>

      <YoutubeVideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}

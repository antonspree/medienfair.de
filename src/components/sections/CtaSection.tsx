"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function CtaSection() {
  return (
    <section id="kontakt" className="flex flex-col gap-16 overflow-hidden pt-16 pb-8">
      <Reveal className="mx-auto w-full max-w-5xl px-5">
        <div className="flex flex-col items-center gap-5 rounded-3xl bg-[#FAFAFA] px-6 py-16 sm:px-8">
          <h2 className="max-w-md text-center text-4xl font-medium leading-[1.12] tracking-tight text-balance text-[#1b263b] sm:text-4xl sm:leading-[1.15]">
            Bereit für einen planbaren Vertriebskanal?
          </h2>
          <p className="max-w-sm text-center text-base font-medium leading-normal text-[#1b263b]/70">
            Im kostenlosen Erstgespräch schauen wir uns gemeinsam an, wo du
            stehst – und ob ein Online-System für dich sinnvoll ist. Unverbindlich
            und ohne Verkaufsdruck.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/kontakt">Kostenloses Erstgespräch</Button>
            <Button variant="secondary" href="#ablauf">
              See demo
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

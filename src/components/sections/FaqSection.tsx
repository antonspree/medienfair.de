"use client";

import Link from "next/link";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { homepageFaqItems } from "@/content/faq";
import { fontInter } from "@/lib/paper";

export function FaqSection() {
  return (
    <section id="faq" className={`flex flex-col gap-12 bg-white py-16 ${fontInter}`}>
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 text-center">
        <SectionBadge>FAQ</SectionBadge>
        <h2 className="max-w-xl text-3xl font-medium tracking-[-0.63px] text-[#1b263b] sm:text-4xl sm:leading-[1.15]">
          Häufige Fragen – ehrliche Antworten
        </h2>
      </Reveal>

      <Reveal className="mx-auto w-full max-w-xl px-5">
        <FaqAccordion
          items={homepageFaqItems}
          defaultOpenId="home-1"
          surface="grey"
        />
        <p className="mt-6 text-center">
          <Link
            href="/faq"
            className="text-sm font-medium text-[#1b263b]/70 hover:text-[#1b263b] hover:underline"
          >
            Alle Fragen nach Kategorie ansehen
          </Link>
        </p>
      </Reveal>
    </section>
  );
}

"use client";

import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { faqCategories } from "@/content/faq";
import { fontInter } from "@/lib/paper";

export function FaqPageContent() {
  return (
    <div
      className={`flex flex-col items-center gap-16 bg-white pt-12 pb-16 antialiased sm:pt-16 ${fontInter}`}
    >
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 text-center">
        <SectionBadge>FAQ</SectionBadge>
        <h1 className="max-w-xl text-3xl font-medium tracking-[-0.63px] text-[#1b263b] sm:text-4xl sm:leading-[1.15]">
          Häufige Fragen – nach Themen sortiert
        </h1>
        <p className="max-w-lg text-base font-medium leading-[150%] text-[#999999]">
          Alles Wichtige zu Medienfair, unserem System für Unternehmen und zur
          Zusammenarbeit – von Positionierung bis Kosten.
        </p>
      </Reveal>

      <div className="mx-auto flex w-full max-w-2xl flex-col gap-14 px-5">
        {faqCategories.map((category, categoryIndex) => (
          <Reveal key={category.id} delay={categoryIndex * 0.05}>
            <section id={category.id} className="scroll-mt-28">
              <h2 className="text-xl font-medium leading-[140%] text-[#1b263b]">
                {category.title}
              </h2>
              {category.description ? (
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#999999]">
                  {category.description}
                </p>
              ) : null}
              <div className="mt-4">
                <FaqAccordion
                  items={category.items}
                  defaultOpenId={categoryIndex === 0 ? category.items[0]?.id : null}
                />
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

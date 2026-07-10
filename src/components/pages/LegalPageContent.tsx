"use client";

import { Reveal } from "@/components/motion/Reveal";
import type { LegalPageContent as LegalPageData } from "@/content/rechtliches/types";
import { fontInter } from "@/lib/paper";

type LegalPageContentProps = {
  content: LegalPageData;
};

/** Layout 1:1 aus Paper-Frame „rechtliches“ (822-0) */
export function LegalPageContent({ content }: LegalPageContentProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-[4.5rem] bg-white pt-12 pb-16 antialiased sm:pt-16 ${fontInter}`}
    >
      <Reveal className="flex w-full max-w-[384px] flex-col items-center gap-4 px-5">
        <h1 className="text-center text-[36px] font-medium leading-[111.111%] text-[#1b263b]">
          {content.title}
        </h1>
        <p className="max-w-[384px] text-center text-[14px] leading-[142.857%] text-[#1b263b]/70">
          {content.description}
        </p>
        <div className="flex h-7 shrink-0 items-center justify-center rounded-lg bg-[#FAFAFA] px-2.5">
          <span className="text-[14px] leading-[142.857%] text-[#999999]">
            Stand: {content.lastUpdated}
          </span>
        </div>
      </Reveal>

      <div className="flex w-full max-w-xl flex-col gap-8 px-5">
        {content.sections.map((section, index) => (
          <Reveal key={section.heading ?? `intro-${index}`} delay={index * 0.03}>
            <section className="flex flex-col gap-3">
              {section.heading ? (
                <h2 className="text-[20px] font-medium leading-[140%] tracking-[-0.35px] text-[#1b263b]">
                  {section.heading}
                </h2>
              ) : null}
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p
                  key={paragraphIndex}
                  className="whitespace-pre-line text-[16px] leading-[150%] text-[#1b263b]/70"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

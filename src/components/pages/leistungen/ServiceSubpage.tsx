"use client";

import Image from "next/image";
import type { ServicePageContent } from "@/content/leistungen/types";
import { TeamGrid } from "@/components/pages/leistungen/TeamGrid";
import type { BenefitIconType } from "@/content/leistungen/types";
import { Reveal } from "@/components/motion/Reveal";

function BenefitIcon({ type, stroke }: { type: BenefitIconType; stroke: string }) {
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "clock") {
    return (
      <path
        d="M8 4.5V3.722M8 11.5V12.278M9.684 5.667C9.348 5.202 8.72 4.889 8 4.889H7.784C6.829 4.889 6.056 5.508 6.056 6.272V6.331C6.056 6.877 6.441 7.377 7.052 7.621L8.948 8.379C9.559 8.623 9.944 9.123 9.944 9.669C9.944 10.466 9.137 11.111 8.142 11.111H8C7.28 11.111 6.652 10.798 6.316 10.333M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z"
        {...common}
      />
    );
  }
  if (type === "wallet") {
    return (
      <>
        <path
          d="M1 3.333V12.454C1 13.86 2.14 15 3.545 15H12.454C13.86 15 15 13.86 15 12.454V7.788C15 6.382 13.86 5.242 12.454 5.242H11.606M1 3.333C1 4.388 1.855 5.242 2.909 5.242H11.606M1 3.333C1 2.045 2.045 1 3.333 1H9.838C10.815 1 11.606 1.791 11.606 2.768V5.242"
          fill="none"
          stroke={stroke}
          strokeWidth={1.5}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <path
          d="M11 11C11.552 11 12 10.552 12 10C12 9.448 11.552 9 11 9C10.448 9 10 9.448 10 10C10 10.552 10.448 11 11 11Z"
          fill={stroke}
        />
      </>
    );
  }
  return (
    <path
      d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189"
      fill="none"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="square"
    />
  );
}

type ServiceSubpageProps = {
  content: ServicePageContent;
};

/** Paper artboard „Unterseite“ (node 6IH-0) */
export function ServiceSubpage({ content }: ServiceSubpageProps) {
  const iconStroke = content.accent === "#3F8E03" ? "#33C758" : content.accent;

  return (
    <div className="flex flex-col items-center gap-16.5 bg-white pt-12 pb-8 antialiased [font-synthesis:none] sm:pt-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-start gap-17.75">
        <div className="flex flex-col items-center gap-1.5 self-stretch">
          <Reveal className="mx-auto flex w-full max-w-xl flex-col items-center gap-4 px-5">
            <div
              className="flex h-6 w-fit shrink-0 items-center justify-center gap-1 rounded-md border border-solid px-2"
              style={{
                backgroundColor: content.badgeBg,
                borderColor: content.badgeBorder,
              }}
            >
              <span
                className="text-center text-sm font-medium leading-[142.857%]"
                style={{ color: content.badgeText }}
              >
                {content.badge}
              </span>
            </div>
            <h1 className="flex w-full max-w-[23.0625rem] flex-wrap justify-center text-center text-[36px] font-medium leading-[111.111%] text-[#1b263b]">
              {content.headline}
            </h1>
            <p className="flex flex-wrap justify-center text-balance text-center text-base font-medium leading-[150%] text-[#999999]">
              {content.subline}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mx-auto mt-6 w-full max-w-5xl px-5">
            <div className="w-full overflow-clip rounded-xl border border-solid border-black/[0.06]">
              <div className="relative aspect-video w-full overflow-clip bg-[#FAFAFA]">
                <Image
                  src={content.heroImage}
                  alt={content.heroAlt}
                  fill
                  className={`object-cover ${content.slug === "ueber-uns" ? "object-center" : "object-top"}`}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto grid w-full max-w-5xl shrink-0 grid-cols-1 justify-start gap-8 self-stretch bg-white px-5 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12">
          {content.benefits.map((benefit, i) => (
            <Reveal
              key={benefit.text}
              delay={i * 0.1}
              className="flex flex-col items-center justify-start gap-3"
            >
              <div
                className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full [corner-bottom-left-shape:superellipse(1.125)] [corner-bottom-right-shape:superellipse(1.125)] [corner-top-left-shape:superellipse(1.125)] [corner-top-right-shape:superellipse(1.125)]"
                style={{ backgroundColor: content.benefitIconBg }}
              >
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 16 16"
                  className="shrink-0 overflow-clip"
                  aria-hidden
                >
                  <BenefitIcon type={benefit.icon} stroke={iconStroke} />
                </svg>
              </div>
              <p className="flex flex-wrap justify-center text-center text-base/5 font-medium text-[#1b263b]">
                {benefit.text}
              </p>
            </Reveal>
          ))}
        </div>

        {content.team ? (
          <Reveal delay={0.15} className="w-full self-stretch px-5">
            <TeamGrid
              heading={content.team.heading}
              intro={content.team.intro}
              members={content.team.members}
              variant="section"
            />
          </Reveal>
        ) : null}
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6.75">
        <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5">
          <h2 className="flex max-w-lg flex-wrap justify-center text-balance text-center text-[36px] font-medium leading-[111%] text-[#1b263b]">
            {content.article.title}
          </h2>
        </Reveal>

        <div className="mx-auto w-full max-w-xl px-5">
          <Reveal>
            {content.article.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-base font-medium leading-[137.5%] text-[#1b263b]/70 first:mt-0"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>

          {content.article.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 0.08}>
              <h3 className="mb-4 mt-10 text-lg font-medium leading-[140%] text-[#1b263b]">
                {section.heading}
              </h3>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base font-medium leading-[137.5%] text-[#1b263b]/70"
                >
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

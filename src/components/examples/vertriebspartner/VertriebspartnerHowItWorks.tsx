"use client";

import { Reveal } from "@/components/motion/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ACCENT, steps } from "./data";

export function VertriebspartnerHowItWorks() {
  return (
    <section className="bg-black/[0.02] py-16 sm:py-20">
      <Reveal className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 px-5 text-center">
        <SectionBadge>So geht&apos;s</SectionBadge>
        <h2 className="text-3xl font-medium text-[#181925] sm:text-4xl">
          In drei Schritten zum Partnergespräch
        </h2>
      </Reveal>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.08} className="h-full">
            <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)]">
              <div className="border-b border-black/[0.05] bg-black/[0.02]">
                {step.illustration}
              </div>
              <div className="flex flex-1 flex-col items-center gap-3 p-6 text-center">
                <span
                  className="flex h-9 w-10 items-center justify-center rounded-full bg-black/[0.03] text-lg font-medium"
                  style={{ color: ACCENT }}
                >
                  {step.num}
                </span>
                <p className="text-lg font-medium leading-6 text-[#181925]">{step.text}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

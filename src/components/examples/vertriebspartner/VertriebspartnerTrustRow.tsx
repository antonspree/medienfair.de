"use client";

import { Reveal } from "@/components/motion/Reveal";
import { ACCENT, ACCENT_BG, trustPills } from "./data";

function TrustIcon() {
  return (
    <span
      className="flex size-10 shrink-0 items-center justify-center rounded-full"
      style={{ backgroundColor: ACCENT_BG }}
    >
      <svg width={18} height={18} viewBox="0 0 16 16" aria-hidden>
        <path
          d="M4.785 8.699L6.914 10.838L10.461 5.541"
          fill="none"
          stroke={ACCENT}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function VertriebspartnerTrustRow() {
  return (
    <section className="border-b border-black/[0.05] bg-white py-14 sm:py-16">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 md:grid-cols-3 md:gap-8">
        {trustPills.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06} className="flex flex-col items-center gap-3 text-center">
            <TrustIcon />
            <h3 className="text-lg font-medium leading-6 text-[#181925]">{item.title}</h3>
            <p className="max-w-xs text-sm font-medium leading-relaxed text-[#666666]">
              {item.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { fontInter } from "@/lib/paper";
import { PROCESS_BENEFITS, processIcons } from "@/components/icons/paper/Icons";
import { DashboardPanelIllustration } from "@/components/illustrations/DashboardPanelIllustration";
import { PaperProcessTabToggle } from "@/components/paper/nodes/PaperProcessTabToggle";

export function ProcessSection() {
  const [tab, setTab] = useState<"kunden" | "partner">("kunden");

  return (
    <section className={`flex flex-col gap-12 overflow-hidden py-16 ${fontInter}`}>
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-[13px] px-5 text-center">
        <SectionBadge>System ansehen</SectionBadge>
        <h2 className="max-w-md text-3xl font-medium leading-tight text-[#1b263b] sm:text-4xl">
          Digitaler Vertriebsprozess
        </h2>
        <p className="max-w-sm text-base font-medium leading-5 text-[#1b263b]/70">
          Vom ersten Eindruck bis zur qualifizierten Anfrage – alles aus einem Guss, ohne
          verwirrende Pakete.
        </p>
      </Reveal>

      <Reveal className="mx-auto w-full max-w-5xl px-5">
        <div className="grid overflow-hidden rounded-2xl bg-[#FAFAFA] lg:grid-cols-2">
          <div className="flex flex-col gap-10 border-black/[0.05] p-6 sm:p-8 lg:border-r">
            <div className="flex items-start justify-between gap-2">
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="font-['Inter',system-ui,sans-serif] text-base font-medium leading-[150%] text-[#1b263b]">
                  Das System
                </h3>
                <p className="max-w-64 font-['Inter',system-ui,sans-serif] text-sm leading-[142.857%] text-[#999999]">
                  Vom ersten Eindruck bis zur qualifizierten Anfrage – alles aus einem Guss.
                </p>
              </div>
              <PaperProcessTabToggle value={tab} onChange={setTab} />
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#kontakt">Analyse anfragen</Button>
              <p className="max-w-[160px] text-xs text-balance text-[#999999]">
                Kostenlose Vorschau bekommen.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {PROCESS_BENEFITS.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  {processIcons[b.icon]}
                  <span className="text-sm font-medium text-[#1b263b]">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[280px] flex-col items-center overflow-hidden px-6 pt-8 pb-6 lg:px-8">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex w-full flex-col items-center gap-4"
            >
              <p className="text-center text-base font-medium text-[#999999]">
                Qualifizierte Anfragen
              </p>
              <p className="text-5xl font-semibold leading-none text-[#1b263b]">274</p>
            </motion.div>
            <DashboardPanelIllustration />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";

const benefits = [
  { label: "Klare Positionierung", icon: "compass" },
  { label: "Online-Sichtbarkeit", icon: "globe" },
  { label: "DSGVO & Pflichtseiten", icon: "shield" },
  { label: "Performante Website", icon: "spark" },
  { label: "Nachhaltiges SEO", icon: "clock" },
  { label: "Planbare Anfragen", icon: "euro" },
  { label: "Personal Brand", icon: "smile" },
  { label: "Paid Marketing", icon: "rocket" },
  { label: "Qualifizierte Anfragen", icon: "funnel" },
  { label: "Persönliche Beratung", icon: "heart" },
];

function BenefitIcon({ type }: { type: string }) {
  const stroke = "#4562D7";
  if (type === "globe") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <path
          d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
        />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
      <circle cx="8" cy="8" r="7" fill="none" stroke={stroke} strokeWidth="1.5" />
      <path
        d="M10.01 5.526L6.904 6.373C6.645 6.443 6.443 6.645 6.373 6.904L5.525 10.01C5.448 10.292 5.708 10.552 5.99 10.475L9.096 9.627C9.355 9.557 9.557 9.355 9.627 9.096L10.474 5.99C10.551 5.708 10.292 5.449 10.01 5.526Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
}

function DashboardPanel() {
  return (
    <div className="min-w-0 pt-5">
      <div className="overflow-hidden rounded-t-2xl bg-[#FAFAFABF] pt-4 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
        <div className="mb-3 flex items-center gap-2.5 px-3">
          <Image
            src="/images/chart-logo.png"
            alt=""
            width={81}
            height={14}
            className="h-3.5 w-auto object-contain"
          />
        </div>
        <div className="rounded-t-xl bg-white px-5 pt-5 shadow-sm">
          <div className="mb-4">
            <div className="mb-2 flex justify-between text-xs text-[#52525C]">
              <span>Prozess</span>
              <span className="font-medium text-[#09090B]">68%</span>
            </div>
            <div className="relative h-2 overflow-hidden rounded-full bg-[#09090B0D]">
              <div className="absolute inset-y-0 left-0 w-[68%] rounded-full bg-[#4562D7]" />
            </div>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg border border-[#09090B13] bg-[#09090B06] p-3">
              <p className="text-xs text-[#52525C]">Accuracy</p>
              <p className="text-lg font-semibold text-[#09090B]">94.2%</p>
            </div>
            <div className="rounded-lg border border-[#09090B13] bg-[#09090B06] p-3">
              <p className="text-xs text-[#52525C]">Loss</p>
              <p className="text-lg font-semibold text-[#09090B]">
                0.142 <span className="text-xs text-green-600">↓12%</span>
              </p>
            </div>
          </div>
          <div>
            <div className="mb-1.5 flex justify-between text-xs text-[#52525C]">
              <span>Epoch 34/50</span>
              <span>~12 min left</span>
            </div>
            <div className="flex h-16 items-end gap-0.5 rounded-lg border border-[#09090B13] bg-[#09090B06] p-3">
              {[40, 60, 80, 100, 80, 100, 40, 20].map((h, i) => (
                <div
                  key={i}
                  className="w-full rounded-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      i === 5
                        ? "oklch(58.5% 0.233 277.1)"
                        : i < 5
                          ? `oklab(58.5% 0.029 -0.231 / ${30 + i * 10}%)`
                          : "#09090B13",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessSection() {
  const [tab, setTab] = useState<"kunden" | "partner">("kunden");

  return (
    <section className="flex flex-col gap-12 overflow-hidden py-16">
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-[13px] px-5 text-center">
        <SectionBadge>System ansehen</SectionBadge>
        <h2 className="max-w-md text-3xl font-medium leading-tight text-[#181925] sm:text-4xl">
          Digitaler Vertriebsprozess
        </h2>
        <p className="max-w-sm text-base font-medium leading-5 text-[#666666]">
          Vom ersten Eindruck bis zur qualifizierten Anfrage – alles aus einem
          Guss, ohne verwirrende Pakete.
        </p>
      </Reveal>

      <Reveal className="mx-auto w-full max-w-5xl px-5">
        <div className="grid overflow-hidden rounded-2xl bg-black/[0.03] lg:grid-cols-2">
          <div className="flex flex-col gap-10 border-black/[0.05] p-6 sm:p-8 lg:border-r">
            <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
              <div>
                <h3 className="text-base font-medium text-[#181925]">Das System</h3>
                <p className="mt-1 max-w-xs text-sm text-[#999999]">
                  Vom ersten Eindruck bis zur qualifizierten Anfrage – alles aus
                  einem Guss.
                </p>
              </div>
              <div className="flex rounded-full border border-[#E8E8E8] bg-white p-1">
                <button
                  type="button"
                  onClick={() => setTab("kunden")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    tab === "kunden"
                      ? "bg-black/[0.05] text-[#181925]"
                      : "text-[#181925]"
                  }`}
                >
                  Kunden
                </button>
                <button
                  type="button"
                  onClick={() => setTab("partner")}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    tab === "partner"
                      ? "bg-black/[0.05] text-[#181925]"
                      : "text-[#181925]"
                  }`}
                >
                  Partner
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#kontakt">Analyse anfragen</Button>
              <p className="max-w-[160px] text-xs text-balance text-[#999999]">
                Kostenlose Vorschau bekommen.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {benefits.map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <BenefitIcon type={b.icon} />
                  <span className="text-sm font-medium text-[#181925]">
                    {b.label}
                  </span>
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
              <p className="text-5xl font-semibold leading-none text-[#181925]">
                274
              </p>
            </motion.div>
            <DashboardPanel />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

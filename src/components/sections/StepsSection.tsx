"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";

function StepOneIllustration() {
  return (
    <div className="relative">
      <div className="w-16 rounded-l-md rounded-tr-[15%] rounded-br-md bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.07)]">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="mb-0.5 flex gap-0.5 last:mb-0">
            {[0, 1, 2].map((j) => (
              <div
                key={j}
                className={`h-2 grow rounded-sm ${i === 0 ? "bg-[#09090B26]" : "bg-[#09090B0D]"}`}
              />
            ))}
          </div>
        ))}
      </div>
      <span className="absolute -right-3 bottom-2 rounded-sm bg-[oklch(70.4%_0.140_182.5)] px-1.5 py-0.5 text-[10px] font-semibold text-white shadow-lg">
        CSV
      </span>
    </div>
  );
}

function StepTwoIllustration() {
  const cards = [
    {
      title: "Ist-Zustand Analyse",
      sub: "Entwicklung Struktur",
      flag: "oklch(63.7% 0.237 25.3)",
      avatars: ["/images/avatar-1.webp", "/images/avatar-2.webp"],
      comments: 4,
      attachments: 2,
    },
    {
      title: "Prototyp Website",
      sub: "Run usability tests with beta users",
      flag: "oklch(76.9% 0.188 70.1)",
      avatars: ["/images/avatar-2.webp"],
      comments: 2,
    },
    {
      title: "Documentation",
      sub: "Write API reference docs",
      flag: "oklch(44.2% 0.017 285.8)",
      avatars: ["/images/avatar-1.webp"],
      attachments: 1,
    },
  ];
  return (
    <div className="min-w-[280px] max-w-full rounded-2xl bg-white/50 p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_20px_25px_-5px_rgba(0,0,0,0.07)]">
      <div className="mb-2 flex items-center justify-between px-2 pt-1">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-[oklch(76.9%_0.188_70.1)]" />
          <span className="text-sm font-semibold text-[#09090B]">In Arbeit</span>
        </div>
      </div>
      {cards.map((card) => (
        <div
          key={card.title}
          className="mb-2 rounded-lg border border-transparent bg-white p-3 shadow-sm last:mb-0"
        >
          <p className="text-sm font-medium text-[#09090B]">{card.title}</p>
          <p className="mb-3 text-xs text-[#52525C]">{card.sub}</p>
          <div className="flex items-center justify-between">
            <div className="flex">
              {card.avatars.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={20}
                  height={20}
                  className={`size-5 rounded-full object-cover ring-2 ring-white ${i > 0 ? "-ml-1.5" : ""}`}
                />
              ))}
            </div>
            <div className="flex gap-2 text-[10px] text-[#52525C]">
              {card.comments != null && <span>💬 {card.comments}</span>}
              {card.attachments != null && <span>📎 {card.attachments}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StepThreeIllustration() {
  const steps = [
    { title: "Veröffentlichung", sub: "Deployment Homepage", done: true },
    { title: "Testing", sub: "Searching vector database", active: true },
    { title: "Response Generation", sub: "Run inference with context", pending: true },
    { title: "Output Delivery", sub: "Stream response to client", pending: true },
  ];
  return (
    <div className="relative min-w-[280px] max-w-[320px]">
      <div className="absolute inset-x-6 top-2 bottom-4 rounded-2xl bg-white/75 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
      <div className="relative rounded-t-2xl bg-white p-6 shadow-lg">
        <p className="text-base font-medium text-[#09090B]">Workflow</p>
        <div className="mt-4 space-y-0">
          {steps.map((step, i) => (
            <div key={step.title}>
              <div
                className={`flex items-center gap-3 ${step.pending ? "opacity-50" : ""}`}
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-[#09090B13] bg-white shadow-sm">
                  <span className="text-xs text-[#09090B]">•</span>
                </div>
                <div className="grow">
                  <p className="text-sm font-medium text-[#09090B]">{step.title}</p>
                  <p className="text-xs text-[#52525C]">{step.sub}</p>
                </div>
                {step.done && (
                  <span className="flex size-6 items-center justify-center rounded-full bg-[oklab(69.6%_-0.162_0.051/10%)]">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
                      <path
                        d="M20 6 9 17l-5-5"
                        fill="none"
                        stroke="oklch(59.6% 0.145 163.2)"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                )}
                {step.pending && (
                  <span className="rounded-full bg-[#09090B0D] px-2 py-0.5 text-xs text-[#52525C]">
                    Pending
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="ml-5 border-l border-dashed border-[#09090B13] py-3" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    num: "01",
    text: "Wir klären Ziele und Hebel. Danach ist klar, welche Botschaft du vermittelst.",
    illustration: <StepOneIllustration />,
  },
  {
    num: "02",
    text: "Wir entwickeln Strukturen, Texte und Design – die deine Beratung seriös verkaufen.",
    illustration: <StepTwoIllustration />,
  },
  {
    num: "03",
    text: "Unser System sorgt dafür, dass du passende Anfragen erhältst – planungssicher.",
    illustration: <StepThreeIllustration />,
  },
];

export function StepsSection() {
  return (
    <section id="ablauf" className="flex flex-col gap-12 overflow-hidden py-16">
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-[13px] px-5 text-center">
        <SectionBadge>Schritt für Schritt</SectionBadge>
        <h2 className="max-w-md text-3xl font-medium leading-tight text-[#181925] sm:text-4xl sm:leading-[1.15]">
          Get started
        </h2>
        <p className="max-w-sm text-base font-medium leading-5 text-[#666666]">
          Wir nehmen dir nicht nur Designarbeit ab. Wir strukturieren die gesamte
          digitale Entscheidungsreise deiner Interessenten.
        </p>
        <Button href="#kontakt">Analyse anfragen</Button>
      </Reveal>

      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-4 px-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.num} delay={i * 0.1}>
            <article className="overflow-hidden rounded-2xl bg-black/[0.03]">
              <div className="flex h-[200px] items-center justify-center overflow-hidden border-b border-black/[0.05] p-6">
                {step.illustration}
              </div>
              <div className="flex flex-col items-center gap-3 p-6 text-center">
                <span className="flex h-9 w-10 items-center justify-center rounded-full bg-white text-lg font-medium text-[#4562D7]">
                  {step.num}
                </span>
                <p className="text-lg font-medium leading-6 text-[#181925]">
                  {step.text}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

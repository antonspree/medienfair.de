"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";

const faqs = [
  {
    q: "Für wen ist Medienfair gedacht?",
    a: "Für Finanzberater und Finanzdienstleister, die online planbar qualifizierte Kunden- und Partneranfragen gewinnen möchten.",
  },
  {
    q: "Brauche ich schon eine Website?",
    a: "Nein. Wir können bestehende Präsenzen optimieren oder ein neues System von Grund auf aufbauen.",
  },
  {
    q: "Wie läuft die kostenlose Analyse ab?",
    a: "Im Erstgespräch schauen wir uns Ziele, Zielgruppe und Ist-Zustand an – unverbindlich und ohne Verkaufsdruck.",
  },
  {
    q: "Was kostet das System?",
    a: "Die Investition hängt vom Umfang ab. Nach der Analyse erhältst du eine transparente Empfehlung.",
  },
  {
    q: "Wie schnell sehe ich Ergebnisse?",
    a: "Erste strukturelle Verbesserungen sind oft innerhalb weniger Wochen sichtbar; nachhaltige Anfragen brauchen konsequente Umsetzung.",
  },
  {
    q: "Sind Datenschutz und Impressum enthalten?",
    a: "Ja. DSGVO, Consent und Pflichtseiten werden von Anfang an mitgedacht.",
  },
  {
    q: "Übernehmt ihr auch SEO und Meta Ads?",
    a: "Ja – Website, SEO und Meta Ads sind auf Finanzberater abgestimmt und greifen ineinander.",
  },
  {
    q: "Kann ich Partner und Kunden getrennt ansprechen?",
    a: "Ja. Das System unterstützt getrennte Vertriebswege für Kunden und Partner.",
  },
  {
    q: "Wie unterscheidet ihr euch von einer Agentur?",
    a: "Wir liefern kein isoliertes Design, sondern einen vollständigen digitalen Vertriebskanal.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="flex flex-col gap-12 py-16">
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 text-center">
        <SectionBadge>FAQ</SectionBadge>
        <h2 className="max-w-xl text-3xl font-medium tracking-tight text-[#181925] sm:text-4xl sm:leading-[1.15]">
          Häufige Fragen – ehrliche Antworten
        </h2>
      </Reveal>

      <Reveal className="mx-auto w-full max-w-xl px-5">
        <div className="flex flex-col gap-0.5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-xl bg-[#FAFAFA]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-2.5 pr-3 pl-4 text-left"
                >
                  <span className="text-base font-medium text-[#181925]">
                    {item.q}
                  </span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="mt-0.5 shrink-0"
                    aria-hidden
                  >
                    <path
                      d="M4 6L8 10L12 6"
                      fill="none"
                      stroke="#918DF6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 pb-3 text-sm leading-relaxed text-[#666666]">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

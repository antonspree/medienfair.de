"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { superellipse, fontInter } from "@/lib/paper";
import { IconChevronFaq } from "@/components/icons/paper/Icons";

/** FAQ-Inhalte für Finanzberater (ersetzt Paper-Platzhalter „Visitors“) */
const faqs = [
  {
    question: "Für wen ist das Angebot von Medienfair gedacht?",
    answer:
      "Für Finanzberater und Finanzdienstleister, die online klar positioniert sein und planbar qualifizierte Anfragen oder Partner gewinnen wollen – nicht nur eine statische Visitenkarten-Website.",
  },
  {
    question: "Ist die Umsetzung DSGVO-konform?",
    answer:
      "Ja. Datenschutz, Impressum, Cookie-Einwilligung und saubere Kontakt- sowie Anfrageprozesse werden von Anfang an mitgedacht – besonders wichtig im Finanzbereich.",
  },
  {
    question: "Brauche ich bereits eine Website?",
    answer:
      "Nein. Wir starten mit Zielen und Positionierung. Eine bestehende Website können wir übernehmen oder neu aufsetzen – je nachdem, was für dein System sinnvoller ist.",
  },
  {
    question: "Was passiert im kostenlosen Erstgespräch?",
    answer:
      "Wir schauen uns deine aktuelle Situation an: Positionierung, Website, Sichtbarkeit und Anfragen. Du erhältst eine ehrliche Einschätzung, ob und wie ein Online-System für dich passt – unverbindlich und ohne Verkaufsdruck.",
  },
  {
    question: "Wie lange dauert es, bis alles live ist?",
    answer:
      "Nach dem Erstgespräch entwickeln wir Struktur, Texte und Design. Der Weg bis zum Launch hängt vom Umfang und deinem Feedback ab – einen realistischen Zeitrahmen nennen wir dir im Gespräch.",
  },
  {
    question: "Gibt es versteckte Pakete oder Abo-Fallen?",
    answer:
      "Nein. Du bekommst ein klares System aus einem Guss – von der Positionierung über die Website bis zur Anfrage. Umfang und laufende Leistungen wie SEO oder Ads besprechen wir transparent vorab.",
  },
  {
    question: "Was ist alles im System enthalten?",
    answer:
      "Je nach Setup: klare Positionierung, verkaufsstarke Website, SEO-Grundlagen, DSGVO-relevante Seiten, Anfrage- und Terminlogik sowie optional Meta Ads – abgestimmt auf Finanzberater.",
  },
  {
    question: "Kann ich damit auch Partner gewinnen?",
    answer:
      "Ja. Das System ist für Kunden- und Partnergewinnung ausgelegt. Im Erstgespräch klären wir, welcher Kanal für dich gerade Priorität hat.",
  },
  {
    question: "Bekomme ich Transparenz über Anfragen und Ergebnisse?",
    answer:
      "Ja. Du siehst, wie Interessenten dich finden und anfragen – mit klarer Struktur statt Bauchgefühl. So kannst du deinen Vertrieb planbarer steuern.",
  },
] as const;

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className={`flex flex-col gap-12 py-16 ${fontInter}`}>
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 text-center">
        <SectionBadge>FAQ</SectionBadge>
        <h2 className="max-w-xl text-3xl font-medium tracking-[-0.63px] text-[#181925] sm:text-4xl sm:leading-[1.15]">
          Häufige Fragen – ehrliche Antworten
        </h2>
      </Reveal>

      <Reveal className="mx-auto w-full max-w-xl px-5">
        <div className="flex flex-col gap-0.5">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question} className={`rounded-xl bg-[#FAFAFA] ${superellipse}`}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-2.5 pr-3 pl-4 text-left"
                >
                  <span className="text-base font-medium text-[#181925]">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    className="mt-0.5 shrink-0"
                  >
                    <IconChevronFaq />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden px-4 pb-3"
                    >
                      <p className="text-sm leading-relaxed text-[#666666]">{faq.answer}</p>
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

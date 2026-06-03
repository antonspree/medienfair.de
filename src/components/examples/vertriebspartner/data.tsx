"use client";

import type { FaqItem } from "@/content/faq";
import type { ReactNode } from "react";
import { DashboardPanelIllustration } from "@/components/illustrations/DashboardPanelIllustration";
import { NotificationIllustration } from "@/components/illustrations/NotificationIllustration";
import { CalendarIllustration } from "@/components/illustrations/CalendarIllustration";
import { PhoneChartIllustration } from "@/components/illustrations/PhoneChartIllustration";
import { StepCsvIllustration } from "@/components/illustrations/StepCsvIllustration";
import { StepKanbanIllustration } from "@/components/illustrations/StepKanbanIllustration";
import { StepWorkflowIllustration } from "@/components/illustrations/StepWorkflowIllustration";

export const ACCENT = "#0EA5E9";
export const ACCENT_BG = "#0EA5E914";

export const partners = [
  { src: "/images/logo-partner-1.png", w: 51, h: 24, className: "w-[51px]" },
  { src: "/images/logo-partner-2.png", w: 40, h: 24 },
  { src: "/images/logo-partner-3.png", w: 41, h: 27, className: "w-[41px]" },
  { src: "/images/logo-partner-4.png", w: 68, h: 24, className: "w-[68px]" },
  { src: "/images/logo-partner-5.png", w: 25, h: 24 },
  { src: "/images/logo-partner-6.png", w: 92, h: 27, className: "w-[92px]" },
];

export const trustPills = [
  {
    title: "Transparentes Modell",
    text: "Provisionsstufen und Erwartungen sind vor dem Gespräch klar – keine Überraschungen.",
  },
  {
    title: "Qualifizierte Bewerbungen",
    text: "Landingpage und Vorqualifizierung filtern unpassende Anfragen vor dem ersten Call.",
  },
  {
    title: "Regionales Wachstum",
    text: "Baue dein Team dort auf, wo du stark bist – mit Marke und System im Rücken.",
  },
];

export const comparisonRows: { feature: string; berger: boolean; classic: boolean }[] = [
  { feature: "Klarer Partnerauftritt & Vertrauen", berger: true, classic: false },
  { feature: "Transparentes Provisionsmodell", berger: true, classic: false },
  { feature: "Vorqualifizierte Bewerbungen", berger: true, classic: false },
  { feature: "Marketing & Website aus einer Hand", berger: true, classic: false },
  { feature: "Strukturiertes Onboarding", berger: true, classic: false },
  { feature: "Messbare Pipeline statt Hoffnung", berger: true, classic: false },
];

export type FeatureCard = {
  accent: string;
  title: string;
  subtitle: string;
  illustration: ReactNode;
};

export const featureCards: FeatureCard[] = [
  {
    accent: "#33C758",
    title: "Provisionsmodell",
    subtitle: "Stufen, Szenarien und Teamaufbau – verständlich erklärt.",
    illustration: <PhoneChartIllustration />,
  },
  {
    accent: "#2C78FC",
    title: "Bewerbungen live",
    subtitle: "Sieh, welche Kanäle passende Partner bringen.",
    illustration: <NotificationIllustration />,
  },
  {
    accent: "#FFA600",
    title: "Vorqualifizierung",
    subtitle: "Nur Gespräche mit Menschen, die wirklich passen.",
    illustration: <CalendarIllustration />,
  },
  {
    accent: ACCENT,
    title: "Team-Pipeline",
    subtitle: "Überblick über Interessenten, Termine und nächste Schritte.",
    illustration: <DashboardPanelIllustration />,
  },
];

export const steps = [
  {
    num: "01",
    text: "Kurzes Kennenlernen – wir prüfen, ob das Modell zu dir passt.",
    illustration: <StepCsvIllustration />,
  },
  {
    num: "02",
    text: "Einblick ins System, Team und realistische Einkommensperspektiven.",
    illustration: <StepKanbanIllustration />,
  },
  {
    num: "03",
    text: "Gemeinsamer Startplan – wenn beide Seiten überzeugt sind.",
    illustration: <StepWorkflowIllustration />,
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "vp-1",
    question: "Brauche ich Vorerfahrung im Finanzvertrieb?",
    answer:
      "Erfahrung hilft, ist aber nicht immer Pflicht. Entscheidend sind Motivation, Seriosität und die Bereitschaft, Kunden langfristig zu begleiten. Im Erstgespräch klären wir ehrlich, ob der Einstieg für dich Sinn macht.",
  },
  {
    id: "vp-2",
    question: "Wie funktioniert die Vergütung?",
    answer:
      "Du erhältst ein klares Provisionsmodell mit Stufen – abhängig von deiner Entwicklung im Team. Keine undurchsichtigen Boni; du weißt vor dem Start, worauf du dich einlässt.",
  },
  {
    id: "vp-3",
    question: "Kann ich nebenberuflich starten?",
    answer:
      "Ja, viele starten nebenberuflich und wechseln später in Vollzeit, wenn die Pipeline steht. Wir besprechen im Gespräch, welcher Einstieg zu deiner Situation passt.",
  },
  {
    id: "vp-4",
    question: "Was unterscheidet euch von anderen Teams?",
    answer:
      "Klarer Partnerauftritt, strukturierte Anfragen statt Kaltakquise-Druck und ein System aus Marketing, Website und Prozessen – nicht nur ein Logo und ein Satz „Werde Partner“.",
  },
  {
    id: "vp-5",
    question: "Wie schnell kann ich starten?",
    answer:
      "Nach dem Erstgespräch und der Passungsprüfung geht es in der Regel innerhalb weniger Wochen los – abhängig von deiner Vorbereitung und unseren Onboarding-Terminen.",
  },
];

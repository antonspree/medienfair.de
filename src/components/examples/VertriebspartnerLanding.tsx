"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/motion/Reveal";
import { FaqAccordion } from "@/components/faq/FaqAccordion";
import { ExampleBanner } from "@/components/examples/ExampleBanner";
import { StepCsvIllustration } from "@/components/illustrations/StepCsvIllustration";
import { StepKanbanIllustration } from "@/components/illustrations/StepKanbanIllustration";
import { StepWorkflowIllustration } from "@/components/illustrations/StepWorkflowIllustration";
import { fontInter, superellipse } from "@/lib/paper";
import { IconXCircle } from "@/components/icons/paper/Icons";
import type { FaqItem } from "@/content/faq";

const ACCENT = "#0EA5E9";
const ACCENT_BG = "#0EA5E914";

const pains = [
  "Zu wenig passende Bewerbungen",
  "Unklar, was Partner bei dir verdienen",
  "Generische Karriereseite wie jeder andere",
  "Zeitverlust mit unpassenden Gesprächen",
];

const benefits = [
  {
    title: "Attraktives Provisionsmodell",
    text: "Transparente Struktur, klare Stufen – ohne Kleingedrucktes auf Seite 7.",
  },
  {
    title: "Echter Backoffice-Support",
    text: "Du berätst, wir kümmern uns um Technik, Marketing und Prozesse im Hintergrund.",
  },
  {
    title: "Regionale Freiheit",
    text: "Baue dein Team in deiner Region auf – mit Marke und System hinter dir.",
  },
  {
    title: "Einarbeitung, die trägt",
    text: "Strukturiertes Onboarding statt „Viel Erfolg, meld dich bei Fragen“.",
  },
  {
    title: "Moderner Auftritt",
    text: "Seriöse Marke, die Vertrauen schafft – bevor das erste Gespräch stattfindet.",
  },
  {
    title: "Planbare Bewerbungen",
    text: "Landingpage, Ads und Vorqualifizierung – du siehst, was funktioniert.",
  },
];

const steps = [
  {
    num: "01",
    text: "Kurzes Kennenlernen – wir prüfen, ob das Modell zu dir passt.",
    illustration: <StepCsvIllustration />,
  },
  {
    num: "02",
    text: "Einblick ins System, Team und deine realistischen Einkommensperspektiven.",
    illustration: <StepKanbanIllustration />,
  },
  {
    num: "03",
    text: "Gemeinsamer Startplan – wenn beide Seiten überzeugt sind.",
    illustration: <StepWorkflowIllustration />,
  },
];

const faqItems: FaqItem[] = [
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

function CheckIcon() {
  return (
    <span
      className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.06)]"
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

export function VertriebspartnerLanding() {
  return (
    <div className={fontInter}>
      <ExampleBanner />

      {/* Hero */}
      <section className="overflow-hidden bg-white pb-12 pt-10 sm:pb-16 sm:pt-14">
        <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5 text-center">
          <SectionBadge>Vertriebspartner gesucht</SectionBadge>
          <p className="text-sm font-medium text-[#999999]">
            Beispiel: Finanzhaus Berger · Unabhängige Finanzberatung
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight text-balance text-[#181925] sm:text-5xl md:text-[3.25rem]">
            Baue dein Team auf.{" "}
            <span style={{ color: ACCENT }}>Mit System statt Zufall.</span>
          </h1>
          <p className="max-w-lg text-lg font-medium leading-[150%] text-[#666666]">
            Wir suchen motivierte Vertriebspartner in der Region – mit klarem Modell,
            starkem Rückenwind und einem Auftritt, der Vertrauen schafft, bevor das
            erste Gespräch stattfindet.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button href="#bewerben" className="!bg-[#0EA5E9] hover:!bg-[#0c94d4]">
              Partnergespräch anfragen
            </Button>
            <Button variant="secondary" href="#modell">
              Provisionsmodell ansehen
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-12 w-full max-w-5xl px-5">
          <div
            className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] sm:aspect-[2/1]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, oklab(55% -0.05 -0.12) 0%, oklab(72% 0.02 -0.08) 50%, oklab(95% 0 0) 100%)",
            }}
          >
            <Image
              src="/images/ueber-uns/hero.webp"
              alt=""
              fill
              className="object-cover object-center opacity-90 mix-blend-multiply"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 flex flex-wrap items-end justify-between gap-4 p-6 sm:p-8">
              <div className="text-left text-white">
                <p className="text-sm font-medium text-white/80">Aktuell im Team</p>
                <p className="text-2xl font-semibold sm:text-3xl">12 Berater · 3 Regionen</p>
              </div>
              <div className="flex -space-x-2">
                {["/images/about/team-1.webp", "/images/about/team-2.webp", "/images/about/team-3.webp"].map(
                  (src) => (
                    <div
                      key={src}
                      className="relative size-10 overflow-hidden rounded-full ring-2 ring-white sm:size-12"
                    >
                      <Image src={src} alt="" fill className="object-cover" sizes="48px" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="border-y border-black/[0.05] bg-[#FAFAFA] py-10">
        <Reveal className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 sm:grid-cols-3 sm:gap-4">
          {[
            { value: "72 %", label: "Qualifizierungsquote der Bewerbungen" },
            { value: "14 Tage", label: "Ø Zeit bis zum ersten Partnergespräch" },
            { value: "3×", label: "mehr passende Anfragen nach Relaunch" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-semibold tracking-tight" style={{ color: ACCENT }}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium leading-snug text-[#666666]">
                {stat.label}
              </p>
            </div>
          ))}
        </Reveal>
        <p className="mx-auto mt-6 max-w-lg px-5 text-center text-xs font-medium text-[#999999]">
          Beispielwerte zur Illustration – in deinem Projekt messen wir real.
        </p>
      </section>

      {/* Problem */}
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-5 py-16 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
        <Reveal className="flex max-w-lg flex-col items-start gap-4">
          <SectionBadge>Das Problem</SectionBadge>
          <h2 className="text-3xl font-medium leading-tight text-balance text-[#181925] sm:text-4xl sm:leading-[1.15]">
            Die meisten „Partner gesucht“-Seiten überzeugen niemanden.
          </h2>
          <p className="text-lg font-medium leading-6 text-[#666666]">
            Wer nur eine Stellenausschreibung online stellt, zieht unpassende
            Bewerbungen an – oder gar keine. Ohne klares Modell und Vertrauen bleibt
            die Pipeline leer.
          </p>
        </Reveal>
        <Reveal delay={0.08} className="w-full max-w-sm">
          <div className="flex max-w-[320px] flex-col gap-1.5">
            {pains.map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <IconXCircle className="!size-5" />
                <span className="text-base font-medium leading-[155%] text-[#181925]">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Benefits bento */}
      <section id="modell" className="mx-auto max-w-5xl px-5 py-16">
        <Reveal className="mb-10 flex flex-col items-center gap-4 text-center">
          <SectionBadge>Dein Vorteil</SectionBadge>
          <h2 className="max-w-xl text-3xl font-medium leading-tight text-[#181925] sm:text-4xl">
            Warum Partner bei Finanzhaus Berger starten
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div
                className={`flex h-full flex-col gap-3 rounded-2xl bg-black/[0.03] p-6 ${superellipse}`}
              >
                <CheckIcon />
                <h3 className="text-lg font-medium text-[#181925]">{item.title}</h3>
                <p className="text-sm font-medium leading-relaxed text-[#666666]">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlight card */}
      <section className="px-5 pb-16">
        <Reveal className="mx-auto max-w-5xl">
          <div
            className={`overflow-hidden rounded-2xl bg-[#181925] px-6 py-12 text-center sm:px-12 sm:py-16 ${superellipse}`}
          >
            <p className="text-sm font-medium text-white/60">Provisionsmodell</p>
            <p className="mx-auto mt-4 max-w-2xl text-3xl font-medium leading-tight text-white sm:text-4xl">
              Verdiene mit jedem Kunden, den du begleitest –{" "}
              <span className="text-[#5ec8f7]">transparent und planbar.</span>
            </p>
            <p className="mx-auto mt-4 max-w-lg text-base font-medium leading-relaxed text-white/70">
              Einstieg, Aufstieg und Teamaufbau sind klar definiert. Im Partnergespräch
              rechnen wir dein Szenario konkret durch – ohne Marketingversprechen.
            </p>
            <Button
              href="#bewerben"
              className="mt-8 !bg-[#0EA5E9] hover:!bg-[#0c94d4]"
            >
              Gespräch vereinbaren
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Steps */}
      <section className="bg-black/[0.02] py-16">
        <Reveal className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 px-5 text-center">
          <SectionBadge>So geht&apos;s</SectionBadge>
          <h2 className="text-3xl font-medium text-[#181925] sm:text-4xl">
            In drei Schritten zum Partnergespräch
          </h2>
        </Reveal>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 px-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.num} delay={i * 0.1} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-black/[0.03]">
                <div className="border-b border-black/[0.05]">{step.illustration}</div>
                <div className="flex flex-1 flex-col items-center justify-center gap-3 p-6 text-center">
                  <span
                    className="flex h-9 w-10 items-center justify-center rounded-full bg-white text-lg font-medium"
                    style={{ color: ACCENT }}
                  >
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

      {/* Testimonial */}
      <section className="mx-auto max-w-3xl px-5 py-16 text-center">
        <Reveal>
          <blockquote className="text-2xl font-medium leading-[1.35] tracking-tight text-[#181925] sm:text-3xl">
            „Ich wusste nach 20 Minuten, ob das zu mir passt – und hatte keine
            Angst vor dem Gespräch.“
          </blockquote>
          <p className="mt-6 text-sm font-medium text-[#999999]">
            — Beispiel-Zitat · Vertriebspartner seit 2024
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-xl px-5 py-8">
        <Reveal className="mb-8 text-center">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="mt-4 text-2xl font-medium text-[#181925] sm:text-3xl">
            Häufige Fragen von Interessenten
          </h2>
        </Reveal>
        <Reveal>
          <FaqAccordion items={faqItems} defaultOpenId="vp-1" />
        </Reveal>
      </section>

      {/* CTA */}
      <section id="bewerben" className="px-5 pb-20 pt-8">
        <Reveal className="mx-auto max-w-5xl">
          <div
            className={`flex flex-col items-center gap-5 rounded-3xl px-6 py-16 text-center sm:px-10 ${superellipse}`}
            style={{ backgroundColor: ACCENT_BG }}
          >
            <h2 className="max-w-lg text-4xl font-medium leading-[1.12] text-balance text-[#181925] sm:text-4xl">
              Bereit für dein Partnergespräch?
            </h2>
            <p className="max-w-md text-base font-medium leading-relaxed text-[#666666]">
              Unverbindlich, ehrlich und ohne Druck. Wir klären Modell, Erwartungen
              und nächste Schritte – in 30 Minuten.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button href="/kontakt" className="!bg-[#0EA5E9] hover:!bg-[#0c94d4]">
                Termin sichern
              </Button>
              <Button variant="secondary" href="tel:+491701234567">
                Oder anrufen
              </Button>
            </div>
            <p className="text-xs font-medium text-[#999999]">
              Beispiel-CTA · Im echten Projekt z. B. Calendly oder Formular
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

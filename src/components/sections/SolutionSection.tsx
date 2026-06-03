"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { ChevronRight } from "@/components/icons/ChevronRight";
import { Reveal } from "@/components/motion/Reveal";

function FeaturePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-8 items-center gap-1 rounded-full bg-white px-2.5 pl-2.5 pr-1.5 text-sm font-medium text-[#181925] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]">
      {children}
      <ChevronRight stroke="#181925" />
    </span>
  );
}

function CheckRow({
  stroke,
  children,
}: {
  stroke: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <svg width="16" height="16" viewBox="0 0 16 16" className="shrink-0" aria-hidden>
        <path
          d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
        />
        <path
          d="M4.785 8.699L6.914 10.838L10.461 5.541"
          fill="none"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-sm font-medium text-[#181925]">{children}</span>
    </div>
  );
}

function CalendarMockup() {
  return (
    <div className="min-w-[288px] rounded-2xl bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_10px_15px_-3px_rgba(0,0,0,0.07),0_4px_6px_-4px_rgba(0,0,0,0.07)]">
      <div className="mb-3 flex items-start justify-between px-1">
        <div>
          <p className="mb-0.5 text-base font-semibold text-[#09090B]">Dienstag</p>
          <p className="text-xs text-[#52525C]">29. Januar 2026</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-[#09090B0D] py-1 pr-2.5 pl-1.5 text-xs font-medium text-[#09090B]">
          Tag
        </span>
      </div>
      {[
        { time: "09:00", event: null },
        {
          time: "10:00",
          event: {
            label: "All-In-Klusive Familie Schmidt",
            color: "bg-[oklab(58.5%_0.029_-0.231/10%)] text-[#432DD7]",
            h: "h-[72px]",
          },
        },
        { time: "11:00", event: null },
        {
          time: "12:00",
          event: {
            label: "Erstgespräch - Max Mustermann",
            color: "bg-[oklab(69.6%_-0.162_0.051/10%)] text-[oklch(50.8%_0.118_165.6)]",
            h: "h-8",
          },
        },
        { time: "13:00", event: null },
        {
          time: "14:00",
          event: {
            label: "Closing - Anna",
            color: "bg-[oklab(62.7%_0.148_-0.220/10%)] text-[oklch(49.6%_0.265_301.9)]",
            h: "h-8",
          },
        },
      ].map((row) => (
        <div key={row.time} className="flex gap-3">
          <div className="w-10 shrink-0 py-2 text-right text-xs text-[#52525C]">
            {row.time}
          </div>
          <div className="relative grow border-t border-[#09090B0A] py-2">
            {row.event && (
              <div
                className={`absolute inset-x-0 top-1 rounded-lg p-2 text-xs font-medium ${row.event.color} ${row.event.h}`}
              >
                {row.event.label}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function PhoneChartMockup() {
  const bars = [
    { h: "h-10", label: "So" },
    { h: "h-16", label: "Mo" },
    { h: "h-20", label: "Di" },
    { h: "h-28", label: "Mi" },
    { h: "h-16", label: "Do" },
    { h: "h-12", label: "Fr" },
    { h: "h-24", label: "Sa", gradient: true },
  ];
  return (
    <div className="min-w-[280px] overflow-hidden rounded-t-[40px] bg-[#FAFAFABF] px-2 pt-2 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
      <div className="rounded-t-4xl bg-white px-6 pt-2 pb-16 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-between py-2 pl-4">
          <span className="text-xs font-semibold text-[#09090B]">9:41</span>
        </div>
        <div className="mt-6 flex items-center gap-2">
          <span className="text-xs text-[#52525C]">Running</span>
          <span className="flex items-center gap-1">
            <span className="flex size-3 items-center justify-center rounded-xs bg-[oklch(59.6%_0.145_163.2)]">
              <svg viewBox="0 0 24 24" className="h-2 w-2" aria-hidden>
                <polyline
                  points="22 7 13.5 15.5 8.5 10.5 2 17"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                />
              </svg>
            </span>
            <span className="text-[11px] font-medium text-[oklch(59.6%_0.145_163.2)]">
              65%
            </span>
          </span>
        </div>
        <div className="mt-0.5 flex gap-2 text-base text-[#09090B]">
          <span>11hr</span>
          <span>59min</span>
        </div>
        <div className="mt-12 grid h-32 shrink-0 grid-cols-7">
          {bars.map((bar) => (
            <div
              key={bar.label}
              className="flex h-full flex-col items-center justify-end gap-2"
            >
              <div
                className={`w-1/2 shrink-0 rounded-sm ${bar.gradient ? "" : "bg-[#09090B1A]"} ${bar.h}`}
                style={
                  bar.gradient
                    ? {
                        backgroundImage:
                          "linear-gradient(180deg, oklab(87.1% -0.135 0.065) 0%, oklab(72.3% -0.189 0.111) 100%)",
                      }
                    : undefined
                }
              />
              <span className="text-xs text-[#52525C]">{bar.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="w-fit">
      <div className="flex items-center gap-2">
        <Image
          src="/images/avatar.webp"
          alt=""
          width={16}
          height={16}
          className="size-4 rounded-full object-cover"
        />
        <span className="text-sm text-[#09090B]">Max Mustermann</span>
      </div>
      <div className="mt-2 max-w-[322px] rounded-tl-sm rounded-r-2xl rounded-bl-2xl border border-transparent bg-white p-3 text-sm text-[#09090B] shadow-[0_0_0_1px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.1)]">
        Hey @berater, ich habe lange nach genau nach dir gesucht. Endlich habe ich
        jemanden, der mir helfen kann.
      </div>
    </div>
  );
}

function NotificationMockup() {
  return (
    <div className="relative mx-auto my-6 min-w-[288px]">
      <div className="absolute inset-x-2 top-2 bottom-[-8px] h-[108px] rounded-2xl bg-white opacity-75 shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" />
      <div className="relative flex gap-3 overflow-hidden rounded-2xl bg-white py-4 pl-4 pr-8 shadow-[inset_0_0_0_1px_#FAFAFA,0_0_0_1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.07)] backdrop-blur-sm">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#09090B1A] bg-white">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path
              d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284M3 21h18"
              fill="none"
              stroke="oklch(59.6% 0.145 163.2)"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div>
          <p className="text-sm font-medium text-[#09090B]">Neuer Abschluss</p>
          <p className="mb-3 max-w-[194px] text-xs text-[#52525C]">
            Glückwunsch! Soeben wurde ein neuer Abschluss gemacht.
          </p>
          <span className="inline-flex h-7 items-center rounded-md border border-transparent bg-white px-3 text-xs font-medium shadow-[0_0_0_1px_rgba(9,9,11,0.1)]">
            Ansehen
          </span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    accent: "#33C758",
    title: "Website, die verkauft",
    subtitle: "Sie wird zur digitalen Vertrauensbasis für neue Kunden.",
    checks: ["Klare Positionierung", "Marktpsychologie", "Mehr Vertrauen"],
    cta: "Analyse anfragen",
    mockup: <CalendarMockup />,
    tall: false,
  },
  {
    accent: "#2C78FC",
    title: "Sichtbarkeit",
    subtitle: "Damit passende Interessenten dich finden, vor allen anderen.",
    checks: [
      "Regional auffindbar",
      "Relevante Suchbegriffe",
      "Direkte Vertrauensbasis",
    ],
    cta: "Erstgespräch vereinbaren",
    mockup: <PhoneChartMockup />,
    tall: false,
  },
  {
    accent: "#D6409F",
    title: "Positionierung",
    subtitle: "Damit jeder weiß, wieso er gerade Dir vertrauen sollte.",
    checks: ["Zielgruppe schärfen", "Expertenrolle zeigen", "Klare Botschaft"],
    cta: "Prüfen lassen",
    mockup: <ChatMockup />,
    tall: true,
  },
  {
    accent: "#FFA600",
    title: "Qualifizierte Anfragen",
    subtitle:
      "Damit du planbar passende Anfragen erhältst – ohne Zeit mit unpassenden Leads zu verlieren.",
    checks: ["Automationen", "Klare Terminlogik", "Sauberes Nachfassen"],
    cta: "Durchsicht bekommen",
    mockup: <NotificationMockup />,
    tall: true,
  },
];

export function SolutionSection() {
  return (
    <section id="leistungen" className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-5 py-16">
      <Reveal className="flex flex-col items-center gap-[13px] text-center">
        <SectionBadge>Die Lösung</SectionBadge>
        <h2 className="max-w-lg text-3xl font-medium leading-tight text-[#181925] sm:text-4xl sm:leading-[1.15]">
          Alles, was Finanzberater brauchen
        </h2>
        <p className="max-w-md text-lg font-medium leading-6 text-[#666666]">
          Um online Vertrauen aufzubauen und qualifizierte Anfragen und Partner
          zu gewinnen.
        </p>
        <Button href="#kontakt">Analyse anfragen</Button>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {features.map((feature, i) => (
          <Reveal
            key={feature.title}
            delay={i * 0.08}
            className={`flex min-h-[280px] flex-col overflow-hidden rounded-2xl bg-black/[0.03] ${feature.tall ? "md:min-h-[548px]" : ""}`}
          >
            <div className="flex flex-col gap-3 px-6 py-6 sm:px-8">
              <span className="flex h-9 w-10 items-center justify-center rounded-full bg-white">
                <span
                  className="h-5 w-5 rounded-full"
                  style={{ backgroundColor: feature.accent, opacity: 0.2 }}
                />
              </span>
              <div className="max-w-[288px]">
                <p
                  className="text-2xl font-medium leading-7"
                  style={{ color: feature.accent }}
                >
                  {feature.title}
                </p>
                <p className="text-2xl font-medium leading-7 text-[#181925]">
                  {feature.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-1">
                {feature.checks.map((c) => (
                  <CheckRow key={c} stroke={feature.accent}>
                    {c}
                  </CheckRow>
                ))}
              </div>
              <FeaturePill>{feature.cta}</FeaturePill>
            </div>
            <div className="flex min-h-[200px] flex-1 items-center justify-center overflow-hidden px-6 pb-6 sm:px-8">
              {feature.mockup}
            </div>
          </Reveal>
        ))}

        <Reveal className="col-span-1 grid gap-4 md:col-span-2 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-4 rounded-2xl bg-black/[0.03] p-6 sm:flex-row sm:items-center sm:px-8 sm:py-6">
            <div className="max-w-[288px]">
              <h3 className="text-lg font-medium text-[#181925]">
                Seriös & rechtlich sauber
              </h3>
              <p className="mt-1 text-base leading-normal text-[#666666]">
                Datenschutz, Impressum, Consent und Anfrageprozesse werden von
                Anfang an sauber mitgedacht.
              </p>
            </div>
            <svg
              width="72"
              height="72"
              viewBox="0 0 16 16"
              className="shrink-0"
              aria-hidden
            >
              <path
                d="M6.62 11.134C7.013 10.877 7.489 10.727 8 10.727C8.511 10.727 8.987 10.877 9.38 11.134M6.62 11.134C6.38 10.07 5.395 9.273 4.216 9.273C2.858 9.273 1.757 10.331 1.757 11.636C1.757 12.942 2.858 14 4.216 14C5.575 14 6.676 12.942 6.676 11.636C6.676 11.464 6.656 11.296 6.62 11.134ZM9.38 11.134C9.344 11.296 9.324 11.464 9.324 11.636C9.324 12.942 10.425 14 11.784 14C13.142 14 14.243 12.942 14.243 11.636C14.243 10.331 13.142 9.273 11.784 9.273C10.605 9.273 9.62 10.07 9.38 11.134ZM1 7.455H2.514M2.514 7.455L3.095 3.262C3.195 2.54 3.837 2 4.595 2H11.405C12.163 2 12.805 2.54 12.905 3.262L13.486 7.455M2.514 7.455H13.486M13.486 7.455H15"
                fill="none"
                stroke="#E0E0E0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col justify-between gap-4 rounded-2xl bg-black/[0.03] p-6 sm:flex-row sm:items-center sm:px-8 sm:py-6">
            <div className="max-w-[288px]">
              <h3 className="text-lg font-medium text-[#181925]">Zusatz</h3>
              <p className="mt-1 text-base leading-normal text-[#666666]">
                Website, SEO und Meta Ads aus einer Hand – abgestimmt auf
                Finanzberater.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <svg width="64" height="64" viewBox="0 0 400 400" aria-hidden>
                <circle cx="200" cy="200" r="200" fill="#635BFF" />
                <path
                  d="M184.401 155.5C184.401 146.1 192.101 142.4 204.901 142.4C223.301 142.4 246.501 148 264.901 157.9V101.1C244.801 93.1 225.001 90 205.001 90C155.901 90 123.301 115.6 123.301 158.4C123.301 225.1 215.201 214.5 215.201 243.3C215.201 254.4 205.501 258 192.001 258C171.901 258 146.301 249.8 126.001 238.7V296.2C148.501 305.9 171.201 310 192.001 310C242.301 310 276.901 285.1 276.901 241.8C276.501 169.8 184.401 182.6 184.401 155.5Z"
                  fill="#FFFFFF"
                />
              </svg>
              <svg
                width="40"
                height="40"
                viewBox="0 0 126 126"
                className="-ml-3"
                aria-hidden
              >
                <path
                  d="M62.689 0C28.069 0 0 28.059 0 62.669C0 97.279 28.068 125.338 62.69 125.338C97.31 125.338 125.378 97.279 125.378 62.668C125.378 28.058 97.31 0 62.689 0Z"
                  fill="#C6FE1E"
                />
                <path
                  d="M55.208 46.274H55.166C52.576 45.531 49.834 47.018 48.956 49.474C47.986 52.115 49.524 55.14 52.241 55.976C58.894 57.864 61.753 48.33 55.208 46.274Z"
                  fill="#0D0D0D"
                />
              </svg>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

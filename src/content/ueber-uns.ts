import type { ServicePageContent } from "@/content/leistungen/types";
import { medienfairTeam } from "@/content/team";

export const ueberUnsPage: ServicePageContent = {
  slug: "ueber-uns",
  badge: "Über uns",
  metaDescription:
    "Medienfair: Team aus sieben Experten für Online-Systeme von Unternehmen – Positionierung, Website, SEO und Ads aus einer Hand.",
  accent: "#4562D7",
  badgeBg: "#4562D70F",
  badgeBorder: "#4562D700",
  badgeText: "#4562D799",
  benefitIconBg: "#4562D714",
  headline: "Ein Team. Ein System. Für Unternehmen.",
  subline:
    "Wir bauen keine isolierten Websites, sondern durchgängige Online-Vertriebssysteme – damit du planbar Vertrauen aufbaust und passende Anfragen gewinnst.",
  heroImage: "/images/ueber-uns/hero.webp",
  heroAlt: "Medienfair – Produktion im Boxring",
  benefits: [
    {
      text: "7 Köpfe, ein Ansprechpartner. Strategie, Design, Technik und Marketing unter einem Dach – ohne Agentur-Chaos.",
      icon: "wallet",
    },
    {
      text: "Jahrzehnte Erfahrung. Aus Hobby wurde Handwerk – heute mit klarem Fokus auf Unternehmen und KMUs.",
      icon: "clock",
    },
    {
      text: "Langfristig gedacht. Wir setzen auf Systeme, die mitwachsen – nicht auf einmalige Projekte ohne Wirkung.",
      icon: "globe",
    },
  ],
  article: {
    title: "Warum es Medienfair gibt.",
    intro: [
      "Vor über zehn Jahren startete alles klein – mit Neugier, Ausdauer und dem Wunsch, Unternehmen online sichtbar zu machen. Aus Kontakten wurden Projekte, aus Projekten Vertrauen.",
      "Heute ist Medienfair ein Team von sieben Menschen mit unterschiedlichen Stärken: Strategie, Text, Design, Entwicklung, SEO, Ads und Prozesse. Was uns verbindet: Wir denken in Systemen, nicht in Einzellösungen.",
    ],
    sections: [
      {
        heading: "Unser Fokus",
        paragraphs: [
          "Wir arbeiten vor allem mit Unternehmen und KMUs, die online professionell auftreten und planbar Kunden oder Partner gewinnen wollen.",
          "Das bedeutet: klare Positionierung, verkaufsstarke Website, Sichtbarkeit, qualifizierte Anfragen – abgestimmt und aus einem Guss.",
        ],
      },
      {
        heading: "Wie wir arbeiten",
        paragraphs: [
          "Ehrlich und unkompliziert. Im Erstgespräch schauen wir, ob und wie wir helfen können – ohne Verkaufsdruck.",
          "Du sprichst mit Menschen, die Umsetzung verstehen, nicht nur Folien liefern. Wir erklären verständlich, entscheiden transparent und liefern, was wir zusagen.",
          "DSGVO, Seriosität und Vertrauen sind für uns selbstverständlich – besonders im Geschäftsalltag.",
        ],
      },
      {
        heading: "Was du von uns erwarten kannst",
        paragraphs: [
          "Ein Partner, der dein Online-Wachstum mitdenkt – von der ersten Idee bis zur laufenden Optimierung.",
          "Klare Kommunikation, feste Ansprechpartner und Lösungen, die zu deinem Alltag passen.",
          "Wenn du neugierig bist, wie wir arbeiten: Melde dich für ein unverbindliches Erstgespräch.",
        ],
      },
    ],
  },
  team: {
    heading: "Team",
    members: medienfairTeam,
  },
};

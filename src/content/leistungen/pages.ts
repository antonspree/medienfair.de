import type { ServicePageContent } from "@/content/leistungen/types";
import { kundengewinnungPage } from "@/content/leistungen/kundengewinnung";

const sharedSections = {
  howWeWork: (paragraphs: string[]) => ({
    heading: "So arbeiten wir",
    paragraphs,
  }),
  whatYouGet: (paragraphs: string[]) => ({
    heading: "Was du konkret bekommst",
    paragraphs,
  }),
  fit: (paragraphs: string[]) => ({
    heading: "Passt das zu dir?",
    paragraphs,
  }),
};

export const leistungenPages: ServicePageContent[] = [
  kundengewinnungPage,
  {
    slug: "positionierung",
    badge: "Positionierung",
    metaDescription:
      "Klare Positionierung für Finanzberater: Zielgruppe, Expertenrolle und einheitliche Botschaft – damit du online nicht wie jeder andere wirkst.",
    accent: "#3F8E03",
    badgeBg: "#3F8E030F",
    badgeBorder: "#3F8E0300",
    badgeText: "#3F8E0366",
    benefitIconBg: "#33C75814",
    headline: "Damit du nicht wie jeder andere wirkst.",
    subline:
      "Menschen entscheiden sich nicht für irgendeinen Finanzberater. Sie entscheiden sich für jemanden, der ihr Problem versteht, eine klare Lösung anbietet und online genau das transportiert.",
    heroImage: "/images/pos.webp",
    heroAlt: "Beispiel einer klar positionierten Berater-Website",
    benefits: [
      {
        text: "Zielgruppe mit Klarheit. Du sprichst die Menschen an, die wirklich zu dir passen – nicht „alle Finanzthemen“.",
        icon: "clock",
      },
      {
        text: "Erkennbare Expertenrolle. Besucher verstehen sofort, warum sie dir vertrauen sollten – nicht nur deinen Namen.",
        icon: "wallet",
      },
      {
        text: "Einheitliche Botschaft. Website, Ansprache und Angebot erzählen dieselbe Geschichte – online und im Gespräch.",
        icon: "globe",
      },
    ],
    article: {
      title: "Positionierung, die online Vertrauen schafft.",
      intro: [
        "Viele Finanzberater klingen online gleich: „unabhängig“, „ganzheitlich“, „individuell“. Das sind keine Positionen – das sind Floskeln.",
        "Gute Positionierung macht den Unterschied: Wer du anziehst, wie du wahrgenommen wirst und ob Interessenten dich als die richtige Wahl empfinden – noch bevor das erste Gespräch stattfindet.",
      ],
      sections: [
        sharedSections.howWeWork([
          "Wir klären Zielgruppe, Anliegen und deine Rolle als Berater. Darauf bauen wir eine klare Botschaft, die sich durch Website, Texte und Angebote zieht – ohne Marketing-Buzzwords.",
          "Du bekommst keine theoretische Markenstrategie, sondern Formulierungen und Leitlinien, die du sofort einsetzen kannst.",
          "Website, SEO und Ads hängen wir erst danach auf – damit jedes Touchpoint dieselbe Position transportiert.",
        ]),
        sharedSections.whatYouGet([
          "Schärfe in Zielgruppe und Ansprache – wen du anziehst und wen du bewusst nicht ansprechen willst.",
          "Klare Differenzierung zu Mitbewerbern in deiner Region und deinem Spezialgebiet.",
          "Storyline für Website, Erstkontakt und Erstgespräch – damit Gespräche schneller „passen“.",
        ]),
        sharedSections.fit([
          "Wenn viele Gespräche gut starten, aber zu wenige passende Anfragen kommen, fehlt oft nicht die Website – sondern die Positionierung dahinter.",
          "Wenn Besucher deine Leistungen nicht einordnen können, ist das der richtige erste Baustein – vor Website, SEO oder Meta Ads.",
        ]),
      ],
    },
  },
  {
    slug: "seo",
    badge: "SEO",
    metaDescription:
      "Nachhaltiges SEO für Finanzberater: regional gefunden werden, relevante Suchbegriffe besetzen und qualifizierte Anfragen über Google gewinnen.",
    accent: "#2C78FC",
    badgeBg: "#2C78FC0F",
    badgeBorder: "#2C78FC00",
    badgeText: "#2C78FC99",
    benefitIconBg: "#2C78FC14",
    headline: "Damit dich die richtigen Menschen finden – nicht umgekehrt.",
    subline:
      "Wer heute nach einem Finanzberater sucht, startet bei Google. SEO sorgt dafür, dass du bei den Anliegen sichtbar bist, die wirklich zu deinem Angebot passen – regional und thematisch.",
    heroImage: "/images/seo.webp",
    heroAlt: "SEO-Auswertung und Sichtbarkeit im Dashboard",
    benefits: [
      {
        text: "Regional auffindbar. Du wirst dort gesehen, wo Interessenten nach Beratern in deiner Region suchen.",
        icon: "globe",
      },
      {
        text: "Relevante Suchbegriffe. Inhalte und Struktur zielen auf Anliegen ab, die zu deiner Zielgruppe passen – nicht auf leere Klicks.",
        icon: "clock",
      },
      {
        text: "Nachhaltige Sichtbarkeit. Organische Rankings bauen Vertrauen auf – langfristiger als einmalige Werbekampagnen.",
        icon: "wallet",
      },
    ],
    article: {
      title: "SEO, das Anfragen bringt – nicht nur Traffic.",
      intro: [
        "Viele Websites werden gebaut und dann vergessen. Ohne SEO bleibt selbst die beste Seite für die meisten potenziellen Kunden unsichtbar.",
        "Wir denken SEO von Anfang an mit: technische Basis, klare Struktur, Inhalte mit Suchintention und lokaler Relevanz – abgestimmt auf Finanzberater.",
      ],
      sections: [
        sharedSections.howWeWork([
          "Wir analysieren, wonach deine Zielgruppe sucht und wo du heute stehst. Darauf bauen wir eine SEO-Strategie, die zu Positionierung und Website passt.",
          "Technik, Seitenstruktur, Texte und lokale Signale greifen ineinander – ohne Keyword-Stuffing oder leere Blogartikel.",
          "Du siehst, woran wir arbeiten und was sich verbessert – verständlich statt nur als Excel-Report.",
        ]),
        sharedSections.whatYouGet([
          "Saubere technische Grundlage und suchmaschinenfreundliche Struktur.",
          "Inhalte und Landingpages für relevante Suchanliegen deiner Zielgruppe.",
          "Lokale Sichtbarkeit für deine Region und dein Spezialgebiet.",
          "Laufende Optimierung statt einmaligem Setup.",
        ]),
        sharedSections.fit([
          "Wenn du viel Werbung schalten musst, nur um überhaupt gefunden zu werden, fehlt oft organische Sichtbarkeit.",
          "Wenn deine Website steht, aber kaum passende Anfragen über Google kommen, ist SEO der nächste Hebel.",
        ]),
      ],
    },
  },
  {
    slug: "meta-ads",
    badge: "Meta Ads",
    metaDescription:
      "Meta Ads für Finanzberater: zielgerichtete Kampagnen auf Facebook und Instagram für qualifizierte Anfragen und planbare Reichweite.",
    accent: "#4562D7",
    badgeBg: "#4562D70F",
    badgeBorder: "#4562D700",
    badgeText: "#4562D799",
    benefitIconBg: "#4562D714",
    headline: "Reichweite mit System – nicht mit Bauchgefühl.",
    subline:
      "Meta Ads können qualifizierte Anfragen bringen, wenn Botschaft, Zielgruppe und Funnel zusammenpassen. Wir bauen Kampagnen, die zu deiner Positionierung und Website greifen.",
    heroImage: "/images/met.webp",
    heroAlt: "Kampagnen- und Anfragenübersicht",
    benefits: [
      {
        text: "Zielgruppe statt Streuverlust. Anzeigen erreichen Menschen mit passendem Anliegen – nicht „alle ab 30“.",
        icon: "clock",
      },
      {
        text: "Klare Anzeigenbotschaft. Was Interessenten in der Ad sehen, setzt nahtlos auf Website und Erstgespräch an.",
        icon: "wallet",
      },
      {
        text: "Planbare Steuerung. Budget, Creatives und Ergebnisse werden nachvollziehbar – mit Fokus auf Anfragen, nicht Likes.",
        icon: "globe",
      },
    ],
    article: {
      title: "Meta Ads, die zu deinem Vertriebssystem passen.",
      intro: [
        "Werbung auf Facebook und Instagram wirkt schnell – aber ohne klare Strategie verbrennt sie Budget, ohne passende Anfragen zu liefern.",
        "Wir schalten Ads nur dort, wo Positionierung und Landingpage tragen: damit Klicks zu Gesprächen werden, die sich lohnen.",
      ],
      sections: [
        sharedSections.howWeWork([
          "Wir definieren Zielgruppe, Angebot und Ziel der Kampagne – Anfrage, Termin oder Erstkontakt.",
          "Creatives, Texte und Zielseiten entwickeln wir im Einklang mit deiner Website – ein Auftritt, keine Insellösung.",
          "Laufend optimieren wir auf Kosten pro Anfrage und Qualität der Kontakte – transparent für dich.",
        ]),
        sharedSections.whatYouGet([
          "Kampagnen-Setup für Facebook und Instagram inkl. Tracking.",
          "Anzeigen und Zielseiten, die zu Finanzberatern passen – seriös, verständlich, ohne reißerische Versprechen.",
          "Auswertung mit Fokus auf Anfragen und Gesprächsqualität.",
          "Abstimmung mit SEO und Website für einen gemeinsamen Funnel.",
        ]),
        sharedSections.fit([
          "Wenn du schneller Reichweite aufbauen willst, während SEO noch wächst.",
          "Wenn du bereits Ads schaltest, aber zu viele unpassende oder teure Anfragen bekommst.",
        ]),
      ],
    },
  },
  {
    slug: "content",
    badge: "Content",
    metaDescription:
      "Content-Erstellung für Finanzberater: professionelle Foto- und Videoproduktion für Website, Ads und Social Media – authentisch und vertrauenswürdig.",
    accent: "#7C3AED",
    badgeBg: "#7C3AED0F",
    badgeBorder: "#7C3AED00",
    badgeText: "#7C3AED99",
    benefitIconBg: "#7C3AED14",
    headline: "Gesehen werden – mit dem Gesicht, das zu dir passt.",
    subline:
      "Texte allein reichen selten. Professionelle Fotos und Videos machen dich greifbar, schaffen Vertrauen und heben dich von generischen Stock-Bildern ab.",
    heroImage: "/images/video.png",
    heroAlt: "Professioneller Content für Finanzberater",
    benefits: [
      {
        text: "Authentische Aufnahmen. Du wirkst wie du – nicht wie ein anonymes Stock-Foto.",
        icon: "wallet",
      },
      {
        text: "Einheitlicher Look. Bilder und Clips passen zu Website, Ads und Social Media.",
        icon: "globe",
      },
      {
        text: "Vertrauen vor dem ersten Gespräch. Menschen sehen, wer hinter dem Angebot steht.",
        icon: "clock",
      },
    ],
    article: {
      title: "Content, der Vertrauen sichtbar macht.",
      intro: [
        "Im Finanzbereich zählt Seriosität. Schlechte oder beliebige Bilder untergraben selbst eine starke Positionierung.",
        "Wir produzieren Foto und Video für deinen Online-Auftritt – vom Porträt bis zum Erklärvideo, abgestimmt auf deine Zielgruppe und Kanäle.",
      ],
      sections: [
        sharedSections.howWeWork([
          "Wir planen Motive und Formate nach Einsatzzweck: Website, Meta Ads, LinkedIn oder Erstgespräch.",
          "Shooting und Schnitt erfolgen strukturiert – du weißt vorher, was entsteht und wo es eingesetzt wird.",
          "Auf Wunsch liefern wir Formate in den richtigen Größen und Längen für jeden Kanal.",
        ]),
        sharedSections.whatYouGet([
          "Professionelle Portraits und Situationsfotos für deinen Auftritt.",
          "Kurzvideos und Clips für Website, Ads und Social Media.",
          "Abgestimmte Bildsprache zu deiner Positionierung und Website.",
          "Nutzungsrechte und Dateien, die du direkt einsetzen kannst.",
        ]),
        sharedSections.fit([
          "Wenn deine Website noch mit Platzhalterbildern oder alten Fotos arbeitet.",
          "Wenn du Ads oder Videos starten willst, aber kein passendes Material hast.",
        ]),
      ],
    },
  },
  {
    slug: "crm",
    badge: "CRM",
    metaDescription:
      "CRM für Finanzberater: Anfragen, Kontakte und Follow-ups strukturiert – nichts geht verloren, der Vertrieb wird planbar.",
    accent: "#6366F1",
    badgeBg: "#6366F10F",
    badgeBorder: "#6366F100",
    badgeText: "#6366F199",
    benefitIconBg: "#6366F114",
    headline: "Kein Lead geht mehr unter.",
    subline:
      "Viele Anfragen scheitern nicht am Interesse, sondern am Chaos danach. Ein passendes CRM bringt Struktur in Kontakte, Termine und Nachfassen – ohne Overhead.",
    heroImage: "/images/dashboard.png",
    heroAlt: "CRM-Übersicht mit Kontakten und Pipeline",
    benefits: [
      {
        text: "Alle Kontakte an einem Ort. Anfragen von Website, Ads und Empfehlungen laufen zusammen.",
        icon: "wallet",
      },
      {
        text: "Klare nächste Schritte. Du siehst, wer wartet, wer Termin braucht und wer nachgefasst werden muss.",
        icon: "clock",
      },
      {
        text: "Planbarer Vertrieb. Weniger Zettelwirtschaft, mehr Überblick über deine Pipeline.",
        icon: "globe",
      },
    ],
    article: {
      title: "CRM, das zu deinem Alltag als Berater passt.",
      intro: [
        "Excel-Listen und Post-it-Notizen skalieren nicht. Wer wächst, braucht ein System, das Anfragen festhält und Follow-ups erleichtert.",
        "Wir richten CRM so ein, dass es zu deinen Prozessen passt – schlank, verständlich und ohne unnötige Komplexität.",
      ],
      sections: [
        sharedSections.howWeWork([
          "Wir kartieren deinen Weg von der Anfrage bis zum Kunden – und wo heute Reibung entsteht.",
          "Tool-Auswahl und Einrichtung orientieren sich an deinem Team und deinen Kanälen, nicht an Software-Features um der Features willen.",
          "Website, Formulare und Ads können direkt angebunden werden – damit Leads automatisch ankommen.",
        ]),
        sharedSections.whatYouGet([
          "Eingerichtetes CRM mit Pipeline, die zu Finanzberatern passt.",
          "Anbindung von Anfrageformularen und relevanten Quellen.",
          "Vorlagen für Follow-ups und Status, die jeder im Team versteht.",
          "Kurze Einweisung, damit du das System wirklich nutzt.",
        ]),
        sharedSections.fit([
          "Wenn Anfragen reinkommen, aber du den Überblick verlierst oder zu spät nachfasst.",
          "Wenn du mitwächst und professioneller werden willst, ohne Enterprise-Software.",
        ]),
      ],
    },
  },
  {
    slug: "qualifizierung",
    badge: "Qualifizierung",
    metaDescription:
      "Anfragen-Qualifizierung für Finanzberater: vor dem Gespräch filtern, passende Interessenten priorisieren und Termine effizienter nutzen.",
    accent: "#FFA600",
    badgeBg: "#FFA6000F",
    badgeBorder: "#FFA60000",
    badgeText: "#FFA60099",
    benefitIconBg: "#FFA60014",
    headline: "Weniger Gespräche – mehr passende.",
    subline:
      "Nicht jede Anfrage ist ein Kunde. Qualifizierung sorgt dafür, dass du Zeit in Menschen investierst, die wirklich zu deinem Angebot und deiner Zielgruppe passen.",
    heroImage: "/images/qual.webp",
    heroAlt: "Qualifizierte Anfragen und Terminlogik",
    benefits: [
      {
        text: "Vorfilter vor dem Erstgespräch. Interessenten beantworten die richtigen Fragen – bevor du einbuchst.",
        icon: "clock",
      },
      {
        text: "Klare Terminlogik. Nur passende Anfragen landen in deinem Kalender.",
        icon: "wallet",
      },
      {
        text: "Höhere Abschlussquote. Weniger Streuverluste, mehr Fokus auf echte Chancen.",
        icon: "globe",
      },
    ],
    article: {
      title: "Qualifizierung, die deinen Kalender entlastet.",
      intro: [
        "Voller Terminkalender klingt gut – ist es aber nicht, wenn die Hälfte der Gespräche von vornherein nicht passt.",
        "Wir bauen Anfrage- und Terminprozesse, die unpassende Kontakte früh erkennen und gute Leads schneller zu dir bringen.",
      ],
      sections: [
        sharedSections.howWeWork([
          "Wir definieren mit dir, was eine „passende“ Anfrage ist – Anliegen, Region, Budget, Produkt.",
          "Formulare, Fragen und Automationen sortieren vor – ohne abschreckende Bürokratie.",
          "Alles greift in Website, CRM und optional Ads – ein durchgängiger Funnel.",
        ]),
        sharedSections.whatYouGet([
          "Strukturierte Anfrageformulare mit sinnvoller Vorqualifizierung.",
          "Terminbuchung nur für qualifizierte Interessenten.",
          "Automationen für Bestätigung, Erinnerung und Nachfassen.",
          "Weniger No-Shows und produktivere Erstgespräche.",
        ]),
        sharedSections.fit([
          "Wenn du viele Erstgespräche führst, aber zu wenige daraus Kunden werden.",
          "Wenn dein Kalender voll ist, der Umsatz aber nicht mitwächst.",
        ]),
      ],
    },
  },
  {
    slug: "recruiting",
    badge: "Recruiting",
    metaDescription:
      "Recruiting für Finanzberater und Teams: planbar Vertriebspartner und Mitarbeiter gewinnen – mit klarem Auftritt und passenden Kanälen.",
    accent: "#0EA5E9",
    badgeBg: "#0EA5E90F",
    badgeBorder: "#0EA5E900",
    badgeText: "#0EA5E999",
    benefitIconBg: "#0EA5E914",
    headline: "Das richtige Team – nicht irgendeiner Bewerber.",
    subline:
      "Wer wachsen will, braucht passende Vertriebspartner. Recruiting bringt dein Angebot als Arbeitgeber und Partnergeber online auf den Punkt – damit die richtigen Menschen sich melden.",
    heroImage: "/images/hero-bg.webp",
    heroAlt: "Recruiting-Auftritt für Finanzberater-Teams",
    benefits: [
      {
        text: "Klarer Partnerauftritt. Kandidaten verstehen, womit sie bei dir rechnen können.",
        icon: "globe",
      },
      {
        text: "Gezielte Ansprache. Recruiting-Kanäle erreichen Menschen mit passendem Profil und Motivation.",
        icon: "clock",
      },
      {
        text: "Planbare Pipeline. Du siehst, wie viele Bewerbungen reinkommen und wo sie herkommen.",
        icon: "wallet",
      },
    ],
    article: {
      title: "Recruiting, das zu deinem Wachstum passt.",
      intro: [
        "Empfehlungen allein reichen oft nicht, wenn du systematisch aufbauen willst. Ohne klaren Recruiting-Auftritt wirkt jedes Team wie jedes andere.",
        "Wir positionieren dich als attraktiven Partnergeber und bespielen die Kanäle, über die passende Kandidaten kommen – abgestimmt auf Finanzvertrieb.",
      ],
      sections: [
        sharedSections.howWeWork([
          "Wir schärfen dein Recruiting-Versprechen: Kultur, Modell, Einstieg und Erwartungen.",
          "Landingpages, Ads und Inhalte sprechen gezielt potenzielle Partner an – ehrlich und ohne HR-Floskeln.",
          "Anfragen laufen strukturiert in CRM oder deinen Prozessen – nachvollziehbar für dich.",
        ]),
        sharedSections.whatYouGet([
          "Recruiting-Seite und Botschaft für Vertriebspartner.",
          "Kampagnen auf Meta und ggf. weiteren Kanälen für Kandidaten.",
          "Qualifizierung von Bewerbungen vor dem Erstgespräch.",
          "Auswertung, welche Ansprache funktioniert.",
        ]),
        sharedSections.fit([
          "Wenn du dein Team vergrößern willst, aber zu wenige passende Bewerbungen bekommst.",
          "Wenn du bereits suchst, aber unpassende oder uninspirierte Kandidaten anziehst.",
        ]),
      ],
    },
  },
];

export function getLeistungPage(slug: string): ServicePageContent | undefined {
  return leistungenPages.find((p) => p.slug === slug);
}

export const leistungSlugs = leistungenPages.map((p) => p.slug);

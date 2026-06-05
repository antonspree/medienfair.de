import type { WissenSection } from "@/content/wissen/types";

export const wissenWelcome = {
  title: "Willkommen",
  metaDescription:
    "Medienfair Wissen: Begriffe und Konzepte für Finanzberater – von Positionierung über Website und Marketing bis Recht und Prozesse.",
  intro:
    "Diese Wissensdatenbank erklärt die zentralen Begriffe rund um Online-Marketing, Website und Vertrieb für Finanzberater. Du findest hier keine Produktwerbung, sondern klare Einordnungen – damit du Entscheidungen für deinen Auftritt besser verstehst und mit uns gezielter sprechen kannst.",
  callout:
    "Medienfair baut daraus konkrete Systeme: Positionierung, Website, Sichtbarkeit und qualifizierte Anfragen – aus einem Guss, nicht als Einzelmaßnahmen.",
  sections: [
    {
      id: "was-ist-das",
      heading: "Was ist /wissen?",
      paragraphs: [
        "Unter /wissen bündeln wir Fachbegriffe und Konzepte, die im Alltag von Finanzberatern immer wieder auftauchen – wenn es um Website, Google, Meta Ads, Anfragen oder rechtliche Basics geht. Jeder Eintrag erklärt ein Thema verständlich: Was bedeutet es, warum ist es relevant, und worauf solltest du achten?",
        "Die Seite ist bewusst wie ein Nachschlagewerk aufgebaut: links die Themen nach Bereichen sortiert, in der Mitte der Artikel, auf großen Bildschirmen rechts ein Inhaltsverzeichnis zum schnellen Springen. Du kannst einzelne Begriffe lesen oder dich thematisch durchklicken – je nachdem, wo du gerade stehst.",
        "Neue Einträge und Vertiefungen kommen laufend dazu. Wenn du einen Begriff vermisst oder etwas unklar ist, melde dich gerne – wir ergänzen die Datenbank, wo es für Berater wirklich hilft.",
      ],
    },
    {
      id: "fuer-wen",
      heading: "Für wen ist die Wissensdatenbank?",
      paragraphs: [
        "Primär für Finanzberater, Vermögensberater und Finanzdienstleister, die online professionell auftreten und planbar qualifizierte Anfragen oder Partner gewinnen wollen. Du musst kein Marketing-Profi sein – die Texte setzen kein Vorwissen voraus.",
        "Auch wenn du schon eine Website hast, lohnt sich ein Blick: Viele Begriffe hängen zusammen (Positionierung → Landingpage → Conversion → CRM). Wer die Zusammenhänge kennt, erkennt schneller, wo der eigene Auftritt hakt – und was als Nächstes Sinn macht.",
        "Teammitglieder und Assistenzen können die Einträge nutzen, um Gespräche und Projekte mit derselben Sprache zu führen wie Marketing und Vertrieb.",
      ],
    },
    {
      id: "bereiche",
      heading: "Die vier Bereiche im Überblick",
      paragraphs: [
        "Grundlagen & Strategie: Positionierung, Zielgruppe, Nutzenversprechen, Customer Journey und das Online-Vertriebssystem als Ganzes. Hier startest du, wenn die Botschaft noch unscharf ist.",
        "Website & Conversion: Landingpages, CTAs, Conversion Rate, Lead-Qualifizierung und Erstgespräch – alles, was Besucher zu Interessenten macht.",
        "Sichtbarkeit & Marketing: SEO, Local SEO, Meta Ads, Retargeting und Content Marketing für langfristige und bezahlte Reichweite.",
        "Recht & Prozesse: DSGVO, Impressum, CRM, Tracking und Google Business Profile – damit Technik und Marketing rechtlich und operativ sauber laufen.",
      ],
    },
    {
      id: "nutzen",
      heading: "So nutzt du /wissen am besten",
      paragraphs: [
        "Starte mit dem Thema, das gerade brennt: Unklare Anfragen? Lies Zielgruppe und Lead-Qualifizierung. Wenig Traffic? SEO und Local SEO. Website bringt nichts? Landingpage und Conversion Rate.",
        "Nutze das Inhaltsverzeichnis auf der Seite, um in längeren Artikeln schnell zum passenden Abschnitt zu springen. Auf dem Handy findest du es als horizontale Pills über dem Text.",
        "Wenn du tiefer einsteigen willst, als es ein Glossar-Eintrag leisten kann: Im Erstgespräch klären wir deine Situation und ob ein Online-System für dich passt – unverbindlich und ohne Verkaufsdruck.",
      ],
    },
  ] as WissenSection[],
};

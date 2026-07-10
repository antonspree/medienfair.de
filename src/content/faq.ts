export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

/** Vorschau auf der Startseite (#faq) */
export const homepageFaqItems: FaqItem[] = [
  {
    id: "home-1",
    question: "Für wen ist das Angebot von Medienfair gedacht?",
    answer:
      "Für Unternehmen und KMUs, die online klar positioniert sein und planbar qualifizierte Anfragen oder Partner gewinnen wollen – nicht nur eine statische Visitenkarten-Website.",
  },
  {
    id: "home-2",
    question: "Ist die Umsetzung DSGVO-konform?",
    answer:
      "Ja. Datenschutz, Impressum, Cookie-Einwilligung und saubere Kontakt- sowie Anfrageprozesse werden von Anfang an mitgedacht – besonders wichtig im Geschäftsalltag.",
  },
  {
    id: "home-3",
    question: "Brauche ich bereits eine Website?",
    answer:
      "Nein. Wir starten mit Zielen und Positionierung. Eine bestehende Website können wir übernehmen oder neu aufsetzen – je nachdem, was für dein System sinnvoller ist.",
  },
  {
    id: "home-4",
    question: "Was passiert im kostenlosen Erstgespräch?",
    answer:
      "Wir schauen uns deine aktuelle Situation an: Positionierung, Website, Sichtbarkeit und Anfragen. Du erhältst eine ehrliche Einschätzung, ob und wie ein Online-System für dich passt – unverbindlich und ohne Verkaufsdruck.",
  },
  {
    id: "home-5",
    question: "Wie lange dauert es, bis alles live ist?",
    answer:
      "Nach dem Erstgespräch entwickeln wir Struktur, Texte und Design. Der Weg bis zum Launch hängt vom Umfang und deinem Feedback ab – einen realistischen Zeitrahmen nennen wir dir im Gespräch.",
  },
  {
    id: "home-6",
    question: "Gibt es versteckte Pakete oder Abo-Fallen?",
    answer:
      "Nein. Du bekommst ein klares System aus einem Guss – von der Positionierung über die Website bis zur Anfrage. Umfang und laufende Leistungen wie SEO oder Ads besprechen wir transparent vorab.",
  },
  {
    id: "home-7",
    question: "Was ist alles im System enthalten?",
    answer:
      "Je nach Setup: klare Positionierung, verkaufsstarke Website, SEO-Grundlagen, DSGVO-relevante Seiten, Anfrage- und Terminlogik sowie optional Meta Ads – abgestimmt auf Unternehmen und KMUs.",
  },
  {
    id: "home-8",
    question: "Kann ich damit auch Partner gewinnen?",
    answer:
      "Ja. Das System ist für Kunden- und Partnergewinnung ausgelegt. Im Erstgespräch klären wir, welcher Kanal für dich gerade Priorität hat.",
  },
  {
    id: "home-9",
    question: "Bekomme ich Transparenz über Anfragen und Ergebnisse?",
    answer:
      "Ja. Du siehst, wie Interessenten dich finden und anfragen – mit klarer Struktur statt Bauchgefühl. So kannst du deinen Vertrieb planbarer steuern.",
  },
];

export const faqCategories: FaqCategory[] = [
  {
    id: "allgemein",
    title: "Allgemein & Einstieg",
    description: "Für wen wir arbeiten, wie du startest und was du erwarten kannst.",
    items: [
      {
        id: "allg-1",
        question: "Für wen ist Medienfair das Richtige?",
        answer:
          "Für Unternehmen und KMUs, die online professionell auftreten und planbar qualifizierte Anfragen oder Partner und Mitarbeiter gewinnen wollen – mit einem System statt Einzelmaßnahmen.",
      },
      {
        id: "allg-2",
        question: "Was unterscheidet euch von einer klassischen Webagentur?",
        answer:
          "Wir denken in Vertriebssystemen: Positionierung, Website, Sichtbarkeit, Anfragen und optional Ads greifen ineinander. Du hast ein Team mit festen Rollen – nicht nur Design oder nur Technik.",
      },
      {
        id: "allg-3",
        question: "Arbeitet ihr nur in bestimmten Regionen?",
        answer:
          "Nein. Strategie, Konzept und Umsetzung laufen remote; Abstimmungen per Video oder Telefon. Wenn du vor Ort bist, können wir das im Erstgespräch klären.",
      },
      {
        id: "allg-4",
        question: "Was passiert im kostenlosen Erstgespräch?",
        answer:
          "Wir analysieren deine aktuelle Situation: Zielgruppe, Positionierung, Website, Sichtbarkeit und Anfragen. Du erhältst eine ehrliche Einschätzung – ohne Verkaufsdruck und ohne versteckte Upsells.",
      },
      {
        id: "allg-5",
        question: "Muss ich schon wissen, was ich brauche?",
        answer:
          "Nein. Viele starten mit einem vagen Ziel („mehr Anfragen“, „professioneller auftreten“). Wir helfen, Prioritäten zu setzen und einen sinnvollen ersten Schritt zu definieren.",
      },
      {
        id: "allg-6",
        question: "Kann ich auch Partner statt Endkunden gewinnen?",
        answer:
          "Ja. Viele Unternehmen wollen Partner oder Kooperationen. Im System legen wir fest, welche Zielgruppe, Botschaft und Kanäle dafür passen.",
      },
    ],
  },
  {
    id: "positionierung",
    title: "Positionierung & Website",
    description: "Klarer Auftritt, verkaufsstarke Seiten und professioneller Eindruck.",
    items: [
      {
        id: "pos-1",
        question: "Warum ist Positionierung vor der Website wichtig?",
        answer:
          "Ohne klare Zielgruppe und Botschaft wirkt jede Website generisch. Erst wenn klar ist, für wen du da bist und welches Problem du löst, können Texte, Struktur und Design überzeugen.",
      },
      {
        id: "pos-2",
        question: "Schreibt ihr die Texte mit?",
        answer:
          "Ja. Wir entwickeln Inhalte, die zu deiner Positionierung und Zielgruppe passen – verständlich, seriös und ohne Marketing-Floskeln, die im Geschäftsalltag vertrauen kosten.",
      },
      {
        id: "pos-3",
        question: "Könnt ihr meine bestehende Website überarbeiten?",
        answer:
          "Ja, wenn die Basis tragfähig ist. Manchmal ist ein Neustart sinnvoller – das klären wir ehrlich im Erstgespräch, abhängig von Technik, Struktur und Positionierung.",
      },
      {
        id: "pos-4",
        question: "Wie sieht eine „verkaufsstarke“ Website für Unternehmen aus?",
        answer:
          "Klare Hierarchie, Vertrauenssignale, konkrete Leistungen, eindeutige nächste Schritte (Anfrage, Termin) und Inhalte, die deine Zielgruppe wiedererkennt – nicht nur schöne Bilder.",
      },
      {
        id: "pos-5",
        question: "Kann ich Inhalte später selbst pflegen?",
        answer:
          "Je nach Setup ja. Wir besprechen, welche Bereiche du selbst ändern willst und richten die Technik entsprechend ein – ohne unnötige Komplexität.",
      },
      {
        id: "pos-6",
        question: "Wie lange dauert ein Website-Relaunch typischerweise?",
        answer:
          "Das hängt von Umfang, Feedbackgeschwindigkeit und ob Positionierung neu entwickelt wird. Einen realistischen Zeitrahmen nennen wir dir nach dem Erstgespräch – ohne vage Versprechen.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO & Sichtbarkeit",
    description: "Gefunden werden, wenn Interessenten nach Lösungen suchen.",
    items: [
      {
        id: "seo-1",
        question: "Lohnt sich SEO für Unternehmen?",
        answer:
          "Ja, wenn du lokal oder thematisch gefunden werden willst. SEO baut langfristig Sichtbarkeit auf – besonders sinnvoll, wenn du nicht dauerhaft nur auf Ads angewiesen sein willst.",
      },
      {
        id: "seo-2",
        question: "Wie schnell sehe ich SEO-Ergebnisse?",
        answer:
          "SEO braucht Zeit – oft mehrere Monate, bis Rankings stabil wirken. Wir setzen auf solide Grundlagen und transparente Erwartungen statt auf „Platz 1 in vier Wochen“.",
      },
      {
        id: "seo-3",
        question: "Optimiert ihr auch Google Business Profile?",
        answer:
          "Ja, wenn lokale Sichtbarkeit relevant ist. Profil, Kategorien, Bewertungen und lokale Signale können einen großen Unterschied machen.",
      },
      {
        id: "seo-4",
        question: "Schreibt ihr Blogartikel oder Ratgeber?",
        answer:
          "Auf Wunsch ja – wenn sie zur Strategie passen und echte Suchintentionen bedienen. Qualität und Relevanz gehen vor Masse.",
      },
      {
        id: "seo-5",
        question: "Was ist der Unterschied zwischen SEO und Meta Ads?",
        answer:
          "SEO ist langfristig und organisch; Ads liefern schneller Reichweite, kosten laufend Budget und brauchen klare Angebote. Oft ergänzen sich beide – Priorität klären wir gemeinsam.",
      },
    ],
  },
  {
    id: "ads",
    title: "Meta Ads & Anfragen",
    description: "Gezielt Reichweite aufbauen und Interessenten qualifizieren.",
    items: [
      {
        id: "ads-1",
        question: "Für wen eignen sich Meta Ads?",
        answer:
          "Wenn du schneller Sichtbarkeit brauchst, ein klares Angebot hast und Anfragen strukturiert aufnehmen kannst. Ohne Positionierung verbrennen Ads oft Budget.",
      },
      {
        id: "ads-2",
        question: "Wie hoch sollte mein Werbebudget sein?",
        answer:
          "Das hängt von Region, Ziel und Wettbewerb ab. Wir empfehlen ein realistisches Testbudget und skalieren, wenn Anfragen und Qualität stimmen – nicht blind nach Klicks.",
      },
      {
        id: "ads-3",
        question: "Wer betreut die Kampagnen – ihr oder ich?",
        answer:
          "Wir konzipieren, setzen auf und optimieren im vereinbarten Rahmen. Du behältst Transparenz über Ausgaben und Ergebnisse; Freigaben laufen pragmatisch ab.",
      },
      {
        id: "ads-4",
        question: "Wie qualifiziert ihr Anfragen?",
        answer:
          "Über klare Landingpages, Formulare mit den richtigen Fragen, optional Vorqualifizierung und Terminlogik – damit du nicht jede Anfrage manuell sortieren musst.",
      },
      {
        id: "ads-5",
        question: "Kann ich Ads ohne neue Website starten?",
        answer:
          "Möglich, aber nicht immer sinnvoll. Wenn die Seite nicht überzeugt, sinkt die Conversion. Wir sagen dir ehrlich, ob zuerst Website oder parallel sinnvoller ist.",
      },
    ],
  },
  {
    id: "prozess",
    title: "Prozess & Zusammenarbeit",
    description: "Ablauf, Kommunikation und was wir von dir erwarten.",
    items: [
      {
        id: "proc-1",
        question: "Wie läuft ein typisches Projekt ab?",
        answer:
          "Erstgespräch → Strategie und Konzept → Umsetzung in Etappen → Review → Launch → optional laufende Optimierung (SEO, Ads, Inhalte). Du hast feste Ansprechpartner.",
      },
      {
        id: "proc-2",
        question: "Wie viel Zeit muss ich selbst einbringen?",
        answer:
          "Für Feedback, Freigaben und fachliche Inhalte – aber wir strukturieren das, damit du nicht wöchentlich stundenlang in Details hängst.",
      },
      {
        id: "proc-3",
        question: "Arbeite ich mit einem Ansprechpartner?",
        answer:
          "Ja. Projektmanagement koordiniert; Spezialisten für Design, Technik, SEO oder Ads kommen bei Bedarf dazu – du musst nicht fünf Leute parallel jonglieren.",
      },
      {
        id: "proc-4",
        question: "Was passiert nach dem Launch?",
        answer:
          "Die Website läuft; optional begleiten wir SEO, Ads oder Anpassungen. Viele Kunden bleiben für Optimierung und Wachstum – ohne Zwang zu einem Abo.",
      },
      {
        id: "proc-5",
        question: "Kann ich einzelne Leistungen buchen?",
        answer:
          "Grundsätzlich ja, aber ein zusammenhängendes System bringt meist mehr Wirkung. Im Erstgespräch klären wir, was für deine Phase Priorität hat.",
      },
      {
        id: "proc-6",
        question: "Was, wenn ich mit dem Ergebnis unzufrieden bin?",
        answer:
          "Wir arbeiten iterativ mit Zwischenständen und Feedbackschleifen. Ziel ist ein Ergebnis, das zu deiner Positionierung passt – nicht „fertig, ohne Rücksprache“.",
      },
    ],
  },
  {
    id: "technik",
    title: "Technik, DSGVO & Rechtliches",
    description: "Sichere Umsetzung und Vertrauen im Geschäftsalltag.",
    items: [
      {
        id: "tech-1",
        question: "Ist die Umsetzung DSGVO-konform?",
        answer:
          "Ja. Datenschutzerklärung, Impressum, Cookie-Einwilligung und saubere Formularprozesse gehören dazu. Im Geschäftsalltag ist das Pflicht – wir behandeln es nicht als Nachgedanke.",
      },
      {
        id: "tech-2",
        question: "Welche Technik nutzt ihr für Websites?",
        answer:
          "Moderne, wartbare Stacks – abhängig vom Projekt. Wichtig sind Performance, Sicherheit und Erweiterbarkeit, nicht das neueste Buzzword.",
      },
      {
        id: "tech-3",
        question: "Wo wird die Website gehostet?",
        answer:
          "Auf zuverlässiger Infrastruktur mit SSL und Backups. Details und Verantwortlichkeiten klären wir im Angebot – transparent, ohne versteckte Hosting-Fallen.",
      },
      {
        id: "tech-4",
        question: "Was passiert mit meinen Daten und Zugängen?",
        answer:
          "Zugänge und Inhalte gehören dir. Wir dokumentieren Übergaben; nach Projektende bleibst du nicht von uns abhängig, sofern nichts anderes vereinbart ist.",
      },
      {
        id: "tech-5",
        question: "Brauche ich spezielle Hinweise für Produkte und Dienstleistungen?",
        answer:
          "Ja, Seriosität und rechtliche Vorgaben sind zentral. Wir achten auf klare Formulierungen und vermeiden irreführende Versprechen – Details besprechen wir mit dir.",
      },
      {
        id: "tech-6",
        question: "Könnt ihr CRM oder Terminbuchung anbinden?",
        answer:
          "Ja, wenn es zu deinem Prozess passt – z. B. Anfragen in CRM, Kalenderbuchung oder E-Mail-Flows. Nicht jedes Tool ist sinnvoll; wir empfehlen pragmatisch.",
      },
    ],
  },
  {
    id: "kosten",
    title: "Kosten & Vertrag",
    description: "Transparente Preise, keine Überraschungen.",
    items: [
      {
        id: "cost-1",
        question: "Was kostet ein Online-System bei Medienfair?",
        answer:
          "Das hängt vom Umfang ab: nur Positionierung, Website, SEO, Ads oder das Gesamtpaket. Nach dem Erstgespräch erhältst du ein klares Angebot – ohne versteckte Posten.",
      },
      {
        id: "cost-2",
        question: "Gibt es versteckte Pakete oder Abo-Fallen?",
        answer:
          "Nein. Laufende Leistungen (z. B. SEO oder Ads) werden vorab besprochen. Du entscheidest, ob und wie lange du sie nutzen willst.",
      },
      {
        id: "cost-3",
        question: "Muss ich alles auf einmal buchen?",
        answer:
          "Nein. Sinnvolle Etappen sind oft besser – z. B. erst Positionierung und Website, dann SEO oder Ads. Wir empfehlen, was für dein Ziel gerade wirkt.",
      },
      {
        id: "cost-4",
        question: "Wie werden laufende Ads oder SEO abgerechnet?",
        answer:
          "Getrennt vom Werbebudget: Media-Ausgaben gehen an die Plattform, unsere Betreuung als vereinbarter monatlicher oder projektbezogener Rahmen – transparent ausgewiesen.",
      },
      {
        id: "cost-5",
        question: "Gibt es eine Mindestlaufzeit?",
        answer:
          "Das hängt von der Leistung ab. Einmalige Projekte haben klare Meilensteine; laufende Betreuung wird im Vertrag definiert – ohne Kleingedrucktes, das du nicht verstehst.",
      },
      {
        id: "cost-6",
        question: "Kann ich mit einem kleinen Budget starten?",
        answer:
          "Ja, wenn die Prioritäten klar sind. Lieber ein starkes Fundament als alles halb. Im Erstgespräch finden wir einen Einstieg, der zu deiner Situation passt.",
      },
    ],
  },
];

export const faqPageMeta = {
  title: "FAQ – Medienfair",
  description:
    "Antworten zu Positionierung, Website, SEO, Meta Ads, Prozess, DSGVO und Kosten – für Unternehmen, die online planbar wachsen wollen.",
};

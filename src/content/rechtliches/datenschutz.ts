import { company, companyAddressLine } from "@/content/rechtliches/company";
import type { LegalPageContent } from "@/content/rechtliches/types";

export const datenschutzPage: LegalPageContent = {
  title: "Datenschutz",
  description:
    "Informationen zur Verarbeitung personenbezogener Daten auf medienfair.de – transparent, verständlich und DSGVO-konform.",
  lastUpdated: "4. Juni 2026",
  sections: [
    {
      paragraphs: [
        "Der Schutz deiner personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir dich darüber, welche Daten wir auf dieser Website verarbeiten, zu welchem Zweck und auf welcher Rechtsgrundlage – sowie welche Rechte du hast.",
      ],
    },
    {
      heading: "Verantwortlicher",
      paragraphs: [
        `${company.legalName}\n${companyAddressLine()}\nE-Mail: ${company.email}`,
      ],
    },
    {
      heading: "Allgemeine Hinweise",
      paragraphs: [
        "Personenbezogene Daten sind alle Informationen, mit denen du persönlich identifiziert werden kannst. Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung einer funktionsfähigen Website, zur Beantwortung von Anfragen oder zur Durchführung vereinbarter Leistungen erforderlich ist.",
        "Die Verarbeitung erfolgt auf Grundlage der Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).",
      ],
    },
    {
      heading: "Hosting und Server-Logfiles",
      paragraphs: [
        "Beim Aufruf unserer Website werden automatisch technische Informationen durch den Hosting-Anbieter erfasst und in sogenannten Server-Logfiles gespeichert. Dazu können gehören: IP-Adresse, Datum und Uhrzeit der Anfrage, aufgerufene Seite/URL, Referrer-URL, Browsertyp und -version, Betriebssystem sowie der Name des Internet-Service-Providers.",
        "Die Verarbeitung dient der technischen Bereitstellung, Stabilität und Sicherheit der Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren Betrieb). Die Logdaten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr erforderlich sind.",
      ],
    },
    {
      heading: "Kontakt und Terminbuchung",
      paragraphs: [
        `Wenn du uns per E-Mail kontaktierst (${company.email}), verarbeiten wir die von dir mitgeteilten Daten (z. B. Name, E-Mail-Adresse, Nachrichteninhalt) zur Bearbeitung deiner Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).`,
        "Für die Online-Terminbuchung nutzen wir Calendly (Calendly LLC, USA). Dabei werden die von dir eingegebenen Termindaten an Calendly übermittelt. Beim Aufruf der Buchungsseite können Cookies und Tracking-Technologien des Anbieters gesetzt werden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Terminvereinbarung) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), soweit erforderlich.",
        "Weitere Informationen findest du in der Datenschutzerklärung von Calendly: https://calendly.com/privacy",
      ],
    },
    {
      heading: "Cookies",
      paragraphs: [
        "Unsere Website kann Cookies verwenden. Cookies sind kleine Textdateien, die auf deinem Endgerät gespeichert werden. Technisch notwendige Cookies dienen der Grundfunktion der Website und können ohne Einwilligung gesetzt werden (Art. 6 Abs. 1 lit. f DSGVO).",
        "Sofern wir nicht technisch notwendige Cookies oder vergleichbare Technologien einsetzen (z. B. für Analyse oder Marketing), holen wir vorab deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO). Du kannst deine Einwilligung jederzeit widerrufen.",
      ],
    },
    {
      heading: "SSL- bzw. TLS-Verschlüsselung",
      paragraphs: [
        "Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in der Browserzeile.",
      ],
    },
    {
      heading: "Deine Rechte",
      paragraphs: [
        "Du hast gegenüber uns folgende Rechte hinsichtlich der dich betreffenden personenbezogenen Daten:",
        "• Auskunft (Art. 15 DSGVO)\n• Berichtigung (Art. 16 DSGVO)\n• Löschung (Art. 17 DSGVO)\n• Einschränkung der Verarbeitung (Art. 18 DSGVO)\n• Datenübertragbarkeit (Art. 20 DSGVO)\n• Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
        "Sofern die Verarbeitung auf einer Einwilligung beruht, kannst du diese jederzeit mit Wirkung für die Zukunft widerrufen (Art. 7 Abs. 3 DSGVO).",
        `Zur Ausübung deiner Rechte genügt eine Nachricht an ${company.email}.`,
      ],
    },
    {
      heading: "Beschwerderecht",
      paragraphs: [
        "Du hast das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren.",
      ],
    },
    {
      heading: "Änderungen dieser Datenschutzerklärung",
      paragraphs: [
        "Wir passen diese Datenschutzerklärung an, wenn sich unsere Website, eingesetzte Dienste oder die Rechtslage ändern. Die jeweils aktuelle Fassung findest du stets auf dieser Seite.",
        `Bei Fragen zum Datenschutz erreichst du uns unter ${company.email}.`,
      ],
    },
  ],
};

/** Ausgewählte Leistungen fürs Header-Mega-Menü – nicht die komplette Liste. */
export const leistungenMegaMenuItems = [
  {
    title: "Website",
    subtitle: "Vertrauensbasis, die Anfragen bringt",
    href: "/#leistungen",
    cardBg: "#1B2E1F",
    iconBg: "#33C758",
    iconType: "clock" as const,
  },
  {
    title: "Sichtbarkeit",
    subtitle: "Gefunden werden, vor allen anderen",
    href: "/#leistungen",
    cardBg: "#151F2E",
    iconBg: "#2C78FC",
    iconType: "globe" as const,
  },
  {
    title: "Positionierung",
    subtitle: "Klar erkennbar, nicht austauschbar",
    href: "/leistungen/positionierung",
    cardBg: "#2A1A24",
    iconBg: "#D6409F",
    iconType: "face" as const,
  },
  {
    title: "Anfragen",
    subtitle: "Nur passende Interessenten",
    href: "/#leistungen",
    cardBg: "#2A2210",
    iconBg: "#FFA600",
    iconType: "gauge" as const,
  },
] as const;

export type LeistungenMegaIcon = (typeof leistungenMegaMenuItems)[number]["iconType"];

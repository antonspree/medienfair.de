import { leistungHref } from "@/lib/service-links";

/** Ausgewählte Leistungen fürs Header-Mega-Menü – nicht die komplette Liste. */
export const leistungenMegaMenuItems = [
  {
    title: "SEO",
    subtitle: "Gefunden werden, vor allen anderen",
    href: leistungHref("seo"),
    cardBg: "#1B2E1F",
    iconBg: "#33C758",
    iconType: "globe" as const,
  },
  {
    title: "Meta Ads",
    subtitle: "Reichweite mit klarem Funnel",
    href: leistungHref("meta-ads"),
    cardBg: "#1A1F2E",
    iconBg: "#4562D7",
    iconType: "clock" as const,
  },
  {
    title: "Positionierung",
    subtitle: "Klar erkennbar, nicht austauschbar",
    href: leistungHref("positionierung"),
    cardBg: "#2A1A24",
    iconBg: "#D6409F",
    iconType: "face" as const,
  },
  {
    title: "Qualifizierung",
    subtitle: "Nur passende Interessenten",
    href: leistungHref("qualifizierung"),
    cardBg: "#2A2210",
    iconBg: "#FFA600",
    iconType: "gauge" as const,
  },
] as const;

export type LeistungenMegaIcon = (typeof leistungenMegaMenuItems)[number]["iconType"];

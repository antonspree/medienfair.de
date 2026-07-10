import { leistungHref } from "@/lib/service-links";

/** Ausgewählte Leistungen fürs Header-Mega-Menü – nicht die komplette Liste. */
export const leistungenMegaMenuItems = [
  {
    title: "SEO",
    subtitle: "Gefunden werden, vor allen anderen",
    href: leistungHref("seo"),
    cardBg: "#D4EDDA",
    iconBg: "#33C758",
    iconType: "globe" as const,
  },
  {
    title: "Meta Ads",
    subtitle: "Reichweite mit klarem Funnel",
    href: leistungHref("meta-ads"),
    cardBg: "#DDE4F7",
    iconBg: "#4562D7",
    iconType: "clock" as const,
  },
  {
    title: "Positionierung",
    subtitle: "Klar erkennbar, nicht austauschbar",
    href: leistungHref("positionierung"),
    cardBg: "#F5D4E8",
    iconBg: "#D6409F",
    iconType: "face" as const,
  },
  {
    title: "Qualifizierung",
    subtitle: "Nur passende Interessenten",
    href: leistungHref("qualifizierung"),
    cardBg: "#FFF0D4",
    iconBg: "#FFA600",
    iconType: "gauge" as const,
  },
] as const;

/** Kompakte Links unter dem 2×2-Grid – eigene Infoseiten, ohne große Karte */
export const leistungenMegaMenuMoreLinks = [
  { label: "Kundengewinnung", href: leistungHref("kundengewinnung") },
  { label: "Content", href: leistungHref("content") },
  { label: "CRM", href: leistungHref("crm") },
  { label: "Recruiting", href: leistungHref("recruiting") },
] as const;

export type LeistungenMegaIcon = (typeof leistungenMegaMenuItems)[number]["iconType"];

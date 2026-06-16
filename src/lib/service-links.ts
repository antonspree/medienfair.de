export const serviceLinks = [
  { label: "Kundengewinnung", href: "/leistungen/kundengewinnung" },
  { label: "Positionierung", href: "/leistungen/positionierung" },
  { label: "SEO", href: "/leistungen/seo" },
  { label: "Meta Ads", href: "/leistungen/meta-ads" },
  { label: "Content", href: "/leistungen/content" },
  { label: "CRM", href: "/leistungen/crm" },
  { label: "Qualifizierung", href: "/leistungen/qualifizierung" },
  { label: "Recruiting", href: "/leistungen/recruiting" },
] as const;

export function leistungHref(slug: string) {
  return `/leistungen/${slug}`;
}

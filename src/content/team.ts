export type TeamMember = {
  /** Dateiname ohne Endung, z. B. anton-mueller → /images/team/anton-mueller.webp */
  id: string;
  name: string;
  role: string;
};

/**
 * Namen und Bilder hier pflegen.
 * Pro Person eine WebP/JPG unter public/images/team/{id}.webp ablegen.
 */
export const medienfairTeam: TeamMember[] = [
  { id: "01", name: "Vorname Nachname", role: "Geschäftsführung & Strategie" },
  { id: "02", name: "Vorname Nachname", role: "Positionierung & Konzept" },
  { id: "03", name: "Vorname Nachname", role: "Design & UX" },
  { id: "04", name: "Vorname Nachname", role: "Webentwicklung" },
  { id: "05", name: "Vorname Nachname", role: "SEO & Sichtbarkeit" },
  { id: "06", name: "Vorname Nachname", role: "Meta Ads & Performance" },
  { id: "07", name: "Vorname Nachname", role: "Projektmanagement & Kunden" },
];

export function teamMemberImageSrc(id: string) {
  return `/images/team/${id}.webp`;
}

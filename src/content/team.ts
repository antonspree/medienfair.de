export type TeamMember = {
  /** Dateiname ohne Endung, z. B. 01 → /images/team/01.webp */
  id: string;
  name: string;
  role: string;
  /** Bildpfad; `null` = nur Platzhalter; sonst /images/team/{id}.webp */
  image?: string | null;
};

/**
 * Namen und Bilder hier pflegen.
 * Pro Person eine WebP/JPG unter public/images/team/{id}.webp ablegen.
 */
export const medienfairTeam: TeamMember[] = [
  {
    id: "01",
    name: "Anton Jonas Spreemann",
    role: "Geschäftsführung & Strategie",
    image: "/images/team/01.jpg",
  },
  { id: "02", name: "Nico Sulimma", role: "Positionierung & Konzept", image: "/images/team/02.jpg" },
  { id: "03", name: "Enna Schwake", role: "Design & UX", image: "/images/team/03.jpg" },
  { id: "04", name: "Vorname Nachname", role: "Webentwicklung" },
  { id: "05", name: "Vorname Nachname", role: "SEO & Sichtbarkeit" },
  { id: "06", name: "Vorname Nachname", role: "Meta Ads & Performance" },
  { id: "07", name: "Vorname Nachname", role: "Projektmanagement & Kunden" },
];

export function teamMemberImageSrc(
  member: Pick<TeamMember, "id" | "image">,
): string | null {
  if (member.image === null) return null;
  return member.image ?? `/images/team/${member.id}.webp`;
}

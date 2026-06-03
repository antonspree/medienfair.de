import type { WissenCategory } from "@/content/wissen/types";

export const wissenCategories: WissenCategory[] = [
  { id: "grundlagen", title: "Grundlagen & Strategie" },
  { id: "website", title: "Website & Conversion" },
  { id: "marketing", title: "Sichtbarkeit & Marketing" },
  { id: "recht-prozesse", title: "Recht & Prozesse" },
];

export function getWissenCategoryTitle(id: string): string {
  return wissenCategories.find((c) => c.id === id)?.title ?? "Wissen";
}

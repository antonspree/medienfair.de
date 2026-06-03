export type WissenSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type WissenTerm = {
  slug: string;
  title: string;
  categoryId: string;
  metaDescription: string;
  intro: string;
  callout?: string;
  sections: WissenSection[];
};

export type WissenCategory = {
  id: string;
  title: string;
};

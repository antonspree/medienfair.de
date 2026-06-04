export type LegalSection = {
  heading?: string;
  paragraphs: string[];
};

export type LegalPageContent = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

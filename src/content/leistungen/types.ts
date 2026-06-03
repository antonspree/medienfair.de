export type BenefitIconType = "clock" | "wallet" | "globe";

export type ServiceBenefit = {
  text: string;
  icon: BenefitIconType;
};

export type ServiceArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type ServicePageContent = {
  slug: string;
  badge: string;
  metaDescription: string;
  accent: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  benefitIconBg: string;
  headline: string;
  subline: string;
  heroImage: string;
  heroAlt: string;
  benefits: ServiceBenefit[];
  article: {
    title: string;
    intro: string[];
    sections: ServiceArticleSection[];
  };
};

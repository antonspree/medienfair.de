/** Design tokens & utility classes from Paper frame medienfairfinal */
export const paper = {
  primary: "#FCA311",
  primaryBlue: "#2C78FC",
  ink: "#1b263b",
  text: "#1b263b",
  muted: "#1b263b",
  mutedLight: "#999999",
  navText: "#BBBCC3",
  navBg: "#141414",
  surface: "#FAFAFA",
  accentGreen: "#33C758",
  accentGreenText: "#34C757",
  accentRed: "#EC6B5C",
  accentPink: "#D6409F",
  accentOrange: "#FFA600",
  faqChevron: "#918DF6",
} as const;

export const superellipse =
  "[corner-bottom-left-shape:superellipse(1.125)] [corner-bottom-right-shape:superellipse(1.125)] [corner-top-left-shape:superellipse(1.125)] [corner-top-right-shape:superellipse(1.125)]";

export const fontInter = "font-['Inter',system-ui,sans-serif]";

/** Feature-Karten-CTAs (Paper-Pill-Buttons) */
export const featureCardCtaClass =
  "mt-1 inline-flex h-8 w-fit shrink-0 items-center justify-center gap-1 rounded-lg bg-white py-0 pl-2.5 pr-1.5 shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]";

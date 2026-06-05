import type { Metadata } from "next";
import { WissenShell } from "@/components/wissen/WissenShell";
import { WissenWelcome } from "@/components/wissen/WissenWelcome";
import { wissenWelcome } from "@/content/wissen/welcome";

export const metadata: Metadata = {
  title: "Willkommen – Wissen | Medienfair",
  description: wissenWelcome.metaDescription,
};

export default function WissenIndexPage() {
  return (
    <WissenShell tocSections={wissenWelcome.sections}>
      <WissenWelcome />
    </WissenShell>
  );
}

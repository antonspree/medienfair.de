"use client";

import { PaperFeatureCardWebsiteHeader } from "@/components/paper/nodes/PaperFeatureCardWebsiteHeader";
import { PaperCalendar356 } from "@/components/paper/nodes/PaperCalendar356";

/** Paper node 34B-0 — komplette Feature-Karte */
export function PaperFeatureCardWebsite() {
  return (
    <div className="flex h-full min-h-70 flex-col overflow-hidden rounded-2xl bg-[#00000008] antialiased [font-synthesis:none] text-xs/4">
      <PaperFeatureCardWebsiteHeader />
      <div className="flex min-h-80 flex-1 flex-col items-center justify-center overflow-hidden">
        <PaperCalendar356 />
      </div>
    </div>
  );
}

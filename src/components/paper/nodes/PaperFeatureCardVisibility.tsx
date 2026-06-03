"use client";

import { PaperVisibilityHeader } from "@/components/paper/nodes/PaperVisibilityHeader";
import { PhoneChartIllustration } from "@/components/illustrations/PhoneChartIllustration";

/** Paper node 382-0 */
export function PaperFeatureCardVisibility() {
  return (
    <div className="flex h-full min-h-70 flex-col overflow-hidden rounded-2xl bg-[#00000008] antialiased [font-synthesis:none] text-xs/4">
      <PaperVisibilityHeader />
      <div className="flex min-h-80 flex-1 flex-col items-center justify-center overflow-hidden">
        <PhoneChartIllustration />
      </div>
    </div>
  );
}

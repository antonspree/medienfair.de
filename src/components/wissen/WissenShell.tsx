"use client";

import { WissenSidebar } from "@/components/wissen/WissenSidebar";
import { fontInter } from "@/lib/paper";

type WissenShellProps = {
  children: React.ReactNode;
  toc?: React.ReactNode;
};

export function WissenShell({ children, toc }: WissenShellProps) {
  return (
    <div
      className={`flex h-dvh min-h-dvh flex-col overflow-hidden bg-[#F5F5F5] p-1.5 antialiased [font-synthesis:none] ${fontInter}`}
    >
      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="flex min-h-0 shrink-0 flex-col border-b border-black/[0.05] bg-[#F5F5F5] lg:h-full lg:w-56 lg:border-b-0 lg:border-r">
          <WissenSidebar />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-tl-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] lg:flex-row">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="flex justify-center px-5 sm:px-8">{children}</div>
          </div>
          {toc ? (
            <div className="hidden min-h-0 shrink-0 overflow-y-auto pr-8 xl:flex">
              {toc}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

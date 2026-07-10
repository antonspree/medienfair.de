"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { WissenSidebar } from "@/components/wissen/WissenSidebar";
import { WissenTableOfContents } from "@/components/wissen/WissenTableOfContents";
import type { WissenSection } from "@/content/wissen/types";
import { fontInter } from "@/lib/paper";

type WissenShellProps = {
  children: React.ReactNode;
  tocSections?: WissenSection[];
};

export function WissenShell({ children, tocSections }: WissenShellProps) {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <div
      className={`flex min-h-dvh flex-col bg-[#FAFAFA] p-1.5 antialiased [font-synthesis:none] lg:h-dvh lg:overflow-hidden ${fontInter}`}
    >
      <div className="mb-1.5 flex items-center justify-between gap-3 rounded-xl bg-[#FAFAFA] px-3 py-2.5 lg:hidden">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Zur Startseite">
          <LogoIcon className="w-[25px]" variant="dark" />
          <span className="inline-flex h-[18px] items-center justify-center rounded-sm border border-transparent bg-white px-1 text-xs font-medium text-[#999999] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]">
            Wissen
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setNavOpen(true)}
          className="inline-flex h-9 items-center justify-center rounded-lg bg-white px-3 text-sm font-medium text-[#1b263b] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]"
        >
          Inhalte
        </button>
      </div>

      <AnimatePresence>
        {navOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Navigation schließen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 lg:hidden"
              onClick={closeNav}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.22 }}
              className="fixed inset-y-0 left-0 z-50 w-[min(100%,17.5rem)] bg-[#FAFAFA] shadow-xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-black/[0.05] px-4 py-3">
                  <span className="text-sm font-medium text-[#1b263b]">Inhaltsverzeichnis</span>
                  <button
                    type="button"
                    aria-label="Schließen"
                    onClick={closeNav}
                    className="flex size-8 items-center justify-center rounded-lg text-[#1b263b]/70 hover:bg-[#FAFAFA]"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M18 6L6 18M6 6l12 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <WissenSidebar onNavigate={closeNav} />
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>

      <div className="flex min-h-0 flex-1 flex-col lg:flex-row">
        <div className="hidden min-h-0 shrink-0 flex-col border-r border-black/[0.05] bg-[#FAFAFA] lg:flex lg:h-full lg:w-56">
          <WissenSidebar />
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col overflow-hidden rounded-tl-2xl bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] lg:flex-row">
          <div className="min-h-0 flex-1 overflow-y-auto">
            <div className="mx-auto flex w-full max-w-[37.5rem] flex-col px-5 sm:px-8">
              {tocSections && tocSections.length > 0 ? (
                <div className="border-b border-black/[0.05] py-4 xl:hidden">
                  <WissenTableOfContents sections={tocSections} variant="inline" />
                </div>
              ) : null}
              {children}
            </div>
          </div>
          {tocSections && tocSections.length > 0 ? (
            <div className="hidden min-h-0 shrink-0 overflow-y-auto pr-8 xl:block">
              <WissenTableOfContents sections={tocSections} variant="sidebar" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

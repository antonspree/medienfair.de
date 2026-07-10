"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { FaqItem } from "@/content/faq";
import { superellipse } from "@/lib/paper";
import { IconChevronFaq } from "@/components/icons/paper/Icons";

type FaqAccordionProps = {
  items: FaqItem[];
  /** Erste Frage geöffnet, wenn gesetzt */
  defaultOpenId?: string | null;
  variant?: "light" | "dark";
  /** Graues Panel für helle Sektions-Hintergründe */
  surface?: "default" | "grey";
};

export function FaqAccordion({
  items,
  defaultOpenId = null,
  variant = "light",
  surface = "default",
}: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);
  const isDark = variant === "dark";
  const isGreySurface = !isDark && surface === "grey";

  const itemBg = isDark ? "bg-[#141414]" : "bg-[#FAFAFA]";
  const questionColor = isDark
    ? "text-white"
    : isGreySurface
      ? "text-[#1b263b]"
      : "text-[#1b263b]";
  const answerColor = isDark
    ? "text-white/70"
    : isGreySurface
      ? "text-[#1b263b]"
      : "text-[#1b263b]/70";
  const chevronStroke = isDark ? "#FFFFFF" : isGreySurface ? "#1b263b" : "#1b263b";

  return (
    <div className="flex flex-col gap-0.5">
      {items.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            className={`rounded-xl ${itemBg} ${superellipse}`}
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="flex w-full items-start justify-between gap-4 py-2.5 pr-3 pl-4 text-left"
              aria-expanded={isOpen}
            >
              <span className={`text-base font-medium ${questionColor}`}>
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                className="mt-0.5 shrink-0"
              >
                <IconChevronFaq stroke={chevronStroke} />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden px-4 pb-3"
                >
                  <p className={`text-sm leading-relaxed ${answerColor}`}>
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

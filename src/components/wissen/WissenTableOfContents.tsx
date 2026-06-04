"use client";

import type { WissenSection } from "@/content/wissen/types";
import { cn } from "@/lib/cn";

type WissenTableOfContentsProps = {
  sections: WissenSection[];
  variant?: "inline" | "sidebar";
};

export function WissenTableOfContents({
  sections,
  variant = "sidebar",
}: WissenTableOfContentsProps) {
  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Auf dieser Seite"
      className={cn(
        variant === "sidebar" && "w-48 shrink-0 pt-10",
        variant === "inline" && "w-full",
      )}
    >
      <p className="mb-3 text-sm font-medium text-[#181925]">Auf dieser Seite</p>
      <ul
        className={cn(
          "flex gap-1.5",
          variant === "sidebar" ? "flex-col" : "flex-wrap",
        )}
      >
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={cn(
                "text-sm font-medium text-[#666666] hover:text-[#181925]",
                variant === "inline" &&
                  "inline-flex rounded-md bg-black/[0.05] px-2.5 py-1.5 leading-snug",
                variant === "sidebar" && "line-clamp-2",
              )}
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

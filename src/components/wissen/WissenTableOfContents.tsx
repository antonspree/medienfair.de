"use client";

import type { WissenSection } from "@/content/wissen/types";

type WissenTableOfContentsProps = {
  sections: WissenSection[];
};

export function WissenTableOfContents({ sections }: WissenTableOfContentsProps) {
  if (sections.length === 0) return null;

  return (
    <nav
      aria-label="Auf dieser Seite"
      className="hidden w-48 shrink-0 pt-10 xl:block"
    >
      <p className="mb-3 text-sm font-medium text-[#181925]">Auf dieser Seite</p>
      <ul className="flex flex-col gap-1.5">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className="line-clamp-2 text-sm font-medium text-[#666666] hover:text-[#181925]"
            >
              {section.heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

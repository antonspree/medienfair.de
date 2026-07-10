"use client";

import { featureCardCtaClass } from "@/lib/paper";

/** Paper node 34C-0 */
export function PaperFeatureCardWebsiteHeader() {
  return (
    <div className="flex shrink-0 flex-col items-start gap-3 px-8 py-6 antialiased md:min-h-[13.75rem] [font-synthesis:none]">
      <span className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full bg-white [corner-bottom-left-shape:superellipse(1.125)] [corner-bottom-right-shape:superellipse(1.125)] [corner-top-left-shape:superellipse(1.125)] [corner-top-right-shape:superellipse(1.125)]">
        <svg width={20} height={20} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
          <path
            d="M8 4.5V3.722M8 11.5V12.278M9.684 5.667C9.348 5.202 8.72 4.889 8 4.889H7.784C6.829 4.889 6.056 5.508 6.056 6.272V6.331C6.056 6.877 6.441 7.377 7.052 7.621L8.948 8.379C9.559 8.623 9.944 9.123 9.944 9.669C9.944 10.466 9.137 11.111 8.142 11.111H8C7.28 11.111 6.652 10.798 6.316 10.333M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z"
            fill="none"
            stroke="#33C758"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="flex min-h-[4.375rem] max-w-[288px] flex-col gap-0.5">
        <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#34C757]">
          Website, die verkauft
        </p>
        <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#1b263b]">
          Sie wird zur digitalen Vertrauensbasis für neue Kunden.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
            <path
              d="M10.172 6.793C7.034 9.931 7.115 13.269 6.096 15C5.076 13.269 4.138 8.771 1 8.771M13.31 4.379C12.862 4.379 12.432 4.201 12.116 3.884C11.799 3.568 11.621 3.138 11.621 2.69C11.621 2.242 11.799 1.812 12.116 1.495C12.432 1.178 12.862 1 13.31 1C13.758 1 14.188 1.178 14.505 1.495C14.822 1.812 15 2.242 15 2.69C15 3.138 14.822 3.568 14.505 3.884C14.188 4.201 13.758 4.379 13.31 4.379Z"
              fill="none"
              stroke="#33C758"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#1b263b]">
            Klare Positionierung
          </span>
        </div>
        <div className="flex items-center gap-2">
          <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
            <path d="M8 12.351V15M8 1V3.649" fill="none" stroke="#33C758" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.352 8H15" fill="none" stroke="#33C758" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.051 3.05L8 8M8 8L3.051 12.95M8 8L1 8" fill="none" stroke="#33C758" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.078 11.076L12.951 12.949" fill="none" stroke="#33C758" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11.078 4.923L12.951 3.05" fill="none" stroke="#33C758" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#1b263b]">
            Marktpsychologie
          </span>
        </div>
        <div className="flex items-center gap-2">
          <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
            <path
              d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z"
              fill="none"
              stroke="#33C758"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1"
              fill="none"
              stroke="#33C758"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse cx="5.55" cy="6.25" rx="1.05" ry="1.05" fill="#33C758" />
            <ellipse cx="10.45" cy="6.25" rx="1.05" ry="1.05" fill="#33C758" />
          </svg>
          <span className="font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#1b263b]">
            Mehr Vertrauen
          </span>
        </div>
      </div>
      <span className={featureCardCtaClass}>
        <span className="w-max shrink-0 font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#1b263b]">
          Analyse anfragen
        </span>
        <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
          <path d="M6 12L10 8L6 4" fill="none" stroke="#1b263b" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

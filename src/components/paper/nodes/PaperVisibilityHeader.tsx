"use client";

import { featureCardCtaClass } from "@/lib/paper";

/** Paper node 383-0 */
export function PaperVisibilityHeader() {
  return (
    <div className="flex shrink-0 flex-col items-start gap-3 px-8 py-6 antialiased md:min-h-[13.75rem] [font-synthesis:none]">
      <span className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full bg-white [corner-bottom-left-shape:superellipse(1.125)] [corner-bottom-right-shape:superellipse(1.125)] [corner-top-left-shape:superellipse(1.125)] [corner-top-right-shape:superellipse(1.125)]">
        <svg width={20} height={20} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
          <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189" fill="none" stroke="#2C78FC" strokeWidth={1.5} strokeLinecap="square" />
        </svg>
      </span>
      <div className="flex min-h-[4.375rem] max-w-[288px] flex-col gap-0.5">
        <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#2C78FC]">Sichtbarkeit</p>
        <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#181925]">
          Damit passende Interessenten dich finden, vor allen anderen.
        </p>
      </div>
      <div className="flex flex-col gap-1">
        {[
          {
            icon: (
              <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
                <path d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z" fill="none" stroke="#2C78FC" strokeWidth={1.5} />
                <path d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1" fill="none" stroke="#2C78FC" strokeWidth={1.5} />
                <ellipse cx="5.55" cy="6.25" rx="1.05" ry="1.05" fill="#2C78FC" />
                <ellipse cx="10.45" cy="6.25" rx="1.05" ry="1.05" fill="#2C78FC" />
              </svg>
            ),
            label: "Regional auffindbar",
          },
          {
            icon: (
              <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
                <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189" fill="none" stroke="#2C78FC" strokeWidth={1.5} strokeLinecap="square" />
              </svg>
            ),
            label: "Relevante Suchbegriffe",
          },
          {
            icon: (
              <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
                <path d="M7.18 1V2.159M11.55 2.81L10.731 3.63M3.63 10.731L2.81 11.55M2.159 7.18H1M3.63 3.63L2.81 2.81M9.603 14.752L6.717 7.216C6.598 6.904 6.904 6.598 7.216 6.717L14.752 9.603C15.051 9.718 15.089 10.127 14.815 10.294L12.088 11.96C12.036 11.992 11.992 12.036 11.96 12.088L10.294 14.815C10.127 15.089 9.718 15.051 9.603 14.752Z" fill="none" stroke="#2C78FC" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ),
            label: "Direkte Vertrauensbasis",
          },
        ].map((row) => (
          <div key={row.label} className="flex items-center gap-2">
            {row.icon}
            <span className="font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#181925]">{row.label}</span>
          </div>
        ))}
      </div>
      <span className={featureCardCtaClass}>
        <span className="w-max shrink-0 font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#181925]">Erstgespräch vereinbaren</span>
        <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
          <path d="M6 12L10 8L6 4" fill="none" stroke="#181925" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </div>
  );
}

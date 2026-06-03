"use client";

import { featureCardCtaClass } from "@/lib/paper";

/** Paper node 391-0 */
export function PaperFeatureCardPositioning() {
  return (
    <div className="flex h-137 min-h-70 flex-col overflow-hidden rounded-2xl bg-[#00000008] antialiased [font-synthesis:none] text-xs/4">
      <div className="flex flex-col items-start gap-3 px-8 py-6">
        <span className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full bg-white [corner-bottom-left-shape:superellipse(1.125)] [corner-bottom-right-shape:superellipse(1.125)] [corner-top-left-shape:superellipse(1.125)] [corner-top-right-shape:superellipse(1.125)]">
          <svg width={20} height={20} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
            <path d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z" fill="none" stroke="#D6409F" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1" fill="none" stroke="#D6409F" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
            <ellipse cx={5.55} cy={6.25} rx={1.05} ry={1.05} fill="#D6409F" />
            <ellipse cx={10.45} cy={6.25} rx={1.05} ry={1.05} fill="#D6409F" />
          </svg>
        </span>
        <div className="flex max-w-[288px] flex-col gap-0.5">
          <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#D6409F]">Positionierung</p>
          <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#181925]">
            Damit jeder weiß, wieso er gerade Dir vertrauen sollte.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          {[
            {
              label: "Zielgruppe schärfen",
              icon: (
                <path d="M8 4.784V8L10.649 10.649M1 2.514V5.541H4.027M1.378 10.333C2.341 13.052 4.937 15 7.99 15C11.861 15 15 11.866 15 8C15 4.134 11.861 1 7.99 1C5.085 1 2.593 2.764 1.529 5.278" fill="none" stroke="#D6409F" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              ),
            },
            {
              label: "Expertenrolle zeigen",
              icon: (
                <path d="M11.601 11.943H13.144M2.344 10.914V3.371C2.344 2.614 2.958 2 3.716 2H12.287C13.044 2 13.658 2.614 13.658 3.371V5.429M2.344 10.914H0.973V11.943C0.973 12.7 1.587 13.314 2.344 13.314H9.544M2.344 10.914H9.544M13.658 5.429H10.915C10.158 5.429 9.544 6.043 9.544 6.8V12.629C9.544 13.386 10.158 14 10.915 14H13.658C14.416 14 15.03 13.386 15.03 12.629V6.8C15.03 6.043 14.416 5.429 13.658 5.429Z" fill="none" stroke="#D6409F" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
              ),
            },
            {
              label: "Klare Botschaft",
              icon: (
                <>
                  <path d="M6.703 1.423C7.419 0.707 8.58 0.707 9.296 1.423L10.113 2.239C10.27 2.395 10.481 2.484 10.702 2.484H11.684C12.696 2.484 13.517 3.304 13.517 4.317V5.298C13.517 5.519 13.604 5.731 13.761 5.887L14.577 6.703C15.293 7.419 15.293 8.58 14.577 9.296L13.761 10.113C13.604 10.27 13.517 10.481 13.517 10.702V11.684C13.516 12.696 12.696 13.517 11.684 13.517H10.702C10.481 13.517 10.27 13.605 10.113 13.761L9.296 14.577C8.58 15.293 7.419 15.293 6.703 14.577L5.887 13.761C5.731 13.605 5.519 13.517 5.298 13.517H4.316C3.304 13.517 2.484 12.696 2.483 11.684V10.702C2.483 10.481 2.395 10.27 2.239 10.113L1.423 9.296C0.707 8.58 0.707 7.419 1.423 6.703L2.239 5.887C2.395 5.731 2.483 5.519 2.483 5.298V4.317C2.483 3.304 3.304 2.484 4.316 2.484H5.298C5.519 2.483 5.731 2.396 5.887 2.239L6.703 1.423Z" fill="none" stroke="#D6409F" strokeWidth={1.5} strokeLinejoin="round" />
                  <path d="M5.5 8L7.188 9.75L10.5 5.75" fill="none" stroke="#D6409F" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </>
              ),
            },
          ].map((row) => (
            <div key={row.label} className="flex items-center gap-2">
              <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
                {row.icon}
              </svg>
              <span className="font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#181925]">{row.label}</span>
            </div>
          ))}
        </div>
        <a href="/leistungen/positionierung" className={featureCardCtaClass}>
          <span className="font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#181925]">Prüfen lassen</span>
          <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
            <path d="M6 12L10 8L6 4" fill="none" stroke="#181925" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="flex h-52.5 w-full shrink-0 flex-col items-center justify-center overflow-hidden">
        <div className="w-fit">
          <div className="flex items-center gap-2">
            <div
              className="size-4 shrink-0 overflow-hidden rounded-full bg-size-[round(100%,0.5px)_round(100%,0.5px)] bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://app.paper.design/file-assets/01KT5ABDQ2JGEFTPVQEFT3VF1G/5GRMBFPQ5HGBKGHZFE2FT6K6GZ.webp)",
              }}
              role="img"
              aria-label="Max Mustermann"
            />
            <span className="font-sans text-sm leading-[142.857%] text-[#09090B]">Max Mustermann</span>
          </div>
          <div className="mt-2 w-fit rounded-tl-sm rounded-r-2xl rounded-bl-2xl border border-solid border-transparent bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.075),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
            <p className="w-[322px] font-sans text-sm leading-[142.857%] text-[#09090B]">
              Hey @berater, ich habe lange nach genau nach dir gesucht. Endlich habe ich jemanden, der mir helfen kann.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

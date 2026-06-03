"use client";

import { featureCardCtaClass } from "@/lib/paper";

/** Paper node 3J3-0 */
export function PaperFeatureCardLeads() {
  return (
    <div className="relative flex min-h-70 flex-col overflow-hidden rounded-2xl bg-[#00000008] antialiased [font-synthesis:none] text-xs/4">
      <div className="flex flex-col items-start gap-3 px-8 py-6">
        <span className="flex h-9 w-10 shrink-0 items-center justify-center rounded-full bg-white [corner-bottom-left-shape:superellipse(1.125)] [corner-bottom-right-shape:superellipse(1.125)] [corner-top-left-shape:superellipse(1.125)] [corner-top-right-shape:superellipse(1.125)]">
          <svg width={20} height={20} viewBox="0 0 16 16" className="shrink-0 overflow-hidden" aria-hidden>
            <path d="M10.27 6.486L8.197 10.461M14.054 10.838H1.946M12.95 3.05C10.216 0.317 5.784 0.317 3.05 3.05C0.317 5.784 0.317 10.216 3.05 12.95C5.784 15.683 10.216 15.683 12.95 12.95C15.683 10.216 15.683 5.784 12.95 3.05Z" fill="none" stroke="#FFA600" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <div className="flex max-w-[288px] flex-col gap-0.5">
          <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#FFA600]">Qualifizierte Anfragen</p>
          <p className="font-['Inter',system-ui,sans-serif] text-2xl/7 font-medium text-[#181925]">
            Damit nur noch passende Interessenten bei dir ankommen.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          {[
            {
              label: "Automationen",
              icon: (
                <path d="M10.27 6.486L8.197 10.461M14.054 10.838H1.946M12.95 3.05C10.216 0.317 5.784 0.317 3.05 3.05C0.317 5.784 0.317 10.216 3.05 12.95C5.784 15.683 10.216 15.683 12.95 12.95C15.683 10.216 15.683 5.784 12.95 3.05Z" fill="none" stroke="#FFA600" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
              ),
            },
            {
              label: "Klare Terminlogik",
              icon: (
                <>
                  <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z" fill="none" stroke="#FFA600" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.785 8.699L6.914 10.838L10.461 5.541" fill="none" stroke="#FFA600" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </>
              ),
            },
            {
              label: "Sauberes Nachfassen",
              icon: (
                <path d="M8 15C4.138 15 1 13.069 1 13.069V1.966C1 1.966 4.621 2.931 8 2.931M8 15V2.931M8 15C11.862 15 15 13.069 15 13.069V1.966M8 2.931C10.414 2.931 12.103 1 12.103 1V12.828C12.103 12.828 10.414 14.759 8 14.759" fill="none" stroke="#FFA600" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
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
        <a href="/leistungen/qualifizierung" className={featureCardCtaClass}>
          <span className="font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#181925]">Mehr erfahren</span>
          <svg width={16} height={16} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
            <path d="M6 12L10 8L6 4" fill="none" stroke="#181925" strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
      <div className="flex h-52.5 w-full shrink-0 flex-col items-center justify-center gap-4 px-8 pb-6">
        <div className="relative mx-auto my-6 min-w-[288px] w-fit">
          <div className="absolute inset-x-2 top-2 -bottom-2 h-27 w-68 rounded-2xl bg-white opacity-75 shadow-[0_0_0_1px_rgba(0,0,0,0.075),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]" />
          <div className="relative flex gap-3 overflow-hidden rounded-2xl bg-white py-4 pl-4 pr-8 shadow-[inset_0_0_0_1px_#FAFAFA,0_0_0_1px_rgba(0,0,0,0.075),0_4px_6px_-1px_rgba(0,0,0,0.067),0_2px_4px_-2px_rgba(0,0,0,0.067)] backdrop-blur-sm">
            <div
              className="absolute inset-1 w-1/2 rounded-l-xl border border-solid border-[oklch(76.5%_0.177_163.2)] opacity-10 [mask-composite:intersect] [mask-image:linear-gradient(#fff,#fff),linear-gradient(to_right,#000_25%,transparent),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff)]"
              style={{
                backgroundImage:
                  "linear-gradient(in oklab 313.86deg, oklab(69.6% -0.162 0.051) 19.13%, oklab(69.6% -0.162 0.051) 103.94%, oklab(0% 0 0 / 0%) 109.33%, oklab(0% 0 0 / 0%) 137.91%)",
              }}
            />
            <span className="relative flex size-8 shrink-0 items-center justify-center rounded-full border border-solid border-[#09090B1A] bg-white">
              <svg width={16} height={16} viewBox="0 0 24 24" className="shrink-0" aria-hidden>
                <path d="m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284" fill="none" stroke="oklch(59.6% 0.145 163.2)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 21h18" fill="none" stroke="oklch(59.6% 0.145 163.2)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="relative">
              <div className="mb-3">
                <p className="font-sans text-sm font-medium leading-[142.857%] text-[#09090B]">Neuer Abschluss</p>
                <p className="w-[194px] font-sans text-xs leading-[133.333%] text-[#52525C]">
                  Glückwunsch! Soeben wurde ein neuer Abschluss gemacht.
                </p>
              </div>
              <span className="inline-flex h-7 items-center justify-center gap-2 rounded-lg border border-solid border-transparent bg-white px-3 shadow-[0_0_0_1px_rgba(9,9,11,0.1),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
                <span className="font-sans text-xs font-medium leading-[133.333%] text-[#09090B]">Ansehen</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

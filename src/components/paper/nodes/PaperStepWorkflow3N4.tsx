"use client";

function StepIcon({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-[inset_0_0_0_3px_#FAFAFA,0_0_0_1px_rgba(0,0,0,0.075),0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(0,0,0,0.1)]"
      style={{
        backgroundImage:
          "linear-gradient(in oklab 180deg, oklab(14.1% 0.001 -0.005 / 5%) 0%, oklab(98.5% 0 0) 100%)",
      }}
    >
      {children}
    </span>
  );
}

/** Paper node 3N4-0 */
export function PaperStepWorkflow3N4() {
  return (
    <div className="flex h-50 w-full items-start justify-end overflow-clip p-6 antialiased [font-synthesis:none]">
      <div className="relative -mx-4 min-w-92 px-4 pt-6 [mask-composite:intersect] [mask-image:linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#000_65%,transparent),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff)]">
        <div className="absolute inset-x-9 top-2 bottom-4 h-85 w-74 rounded-2xl bg-[#FFFFFFBF] shadow-[0_0_0_1px_rgba(0,0,0,0.075)]" />
        <div className="absolute inset-x-6 inset-y-4 h-83 w-[320px] rounded-2xl bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.075)] backdrop-blur-sm" />
        <div className="relative rounded-t-2xl bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.075),0_10px_15px_-3px_rgba(0,0,0,0.067),0_4px_6px_-4px_rgba(0,0,0,0.067)]">
          <p className="font-sans text-base font-medium leading-[150%] text-[#09090B]">Workflow</p>
          <div className="mt-4">
            <div className="mb-0.5 flex items-center gap-3">
              <StepIcon>
                <svg width={16} height={16} viewBox="0 0 24 24" aria-hidden>
                  <circle cx={11} cy={11} r={8} fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} />
                  <path d="m21 21-4.3-4.3" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} />
                </svg>
              </StepIcon>
              <div className="min-w-0 grow basis-0">
                <p className="mb-1 font-sans text-sm font-medium leading-[142.857%] text-[#09090B]">Veröffentlichung</p>
                <p className="font-sans text-xs leading-[133.333%] text-[#52525C]">Deployment Homepage</p>
              </div>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[oklab(69.6%_-0.162_0.051/10%)]">
                <svg width={14} height={14} viewBox="0 0 24 24" aria-hidden>
                  <path d="M20 6 9 17l-5-5" fill="none" stroke="oklch(59.6% 0.145 163.2)" strokeWidth={2} />
                </svg>
              </span>
            </div>
            <div className="mb-0.5 ml-5 border-l border-dashed border-[#09090B13] py-3.5" />
            <div className="mb-0.5 flex items-center gap-3">
              <StepIcon>
                <svg width={16} height={16} viewBox="0 0 24 24" aria-hidden>
                  <ellipse cx={12} cy={5} rx={9} ry={3} fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M3 5V19A9 3 0 0 0 21 19V5" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M3 12A9 3 0 0 0 21 12" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                </svg>
              </StepIcon>
              <div className="min-w-0 grow basis-0">
                <p className="mb-1 font-sans text-sm font-medium leading-[142.857%] text-[#09090B]">Testing</p>
                <p className="font-sans text-xs leading-[133.333%] text-[#52525C]">Searching vector database</p>
              </div>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-[oklab(62.3%_-0.038_-0.211/10%)] opacity-[0.72]">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  className="rotate-[172deg]"
                  aria-hidden
                >
                  <path d="M10.1 2.182a10 10 0 0 1 3.8 0" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M13.9 21.818a10 10 0 0 1-3.8 0" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M17.609 3.721a10 10 0 0 1 2.69 2.7" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M2.182 13.9a10 10 0 0 1 0-3.8" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M20.279 17.609a10 10 0 0 1-2.7 2.69" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M21.818 10.1a10 10 0 0 1 0 3.8" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                  <path d="M6.391 20.279a10 10 0 0 1-2.69-2.7" fill="none" stroke="oklch(54.6% 0.245 262.9)" strokeWidth={2} />
                </svg>
              </span>
            </div>
            <div className="mb-0.5 ml-5 border-l border-dashed border-[#09090B13] py-3.5 opacity-50" />
            <div className="mb-0.5 flex items-center gap-3 opacity-50">
              <StepIcon>
                <svg width={16} height={16} viewBox="0 0 24 24" aria-hidden>
                  <path
                    d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
                    fill="none"
                    stroke="oklch(14.1% 0.005 285.9)"
                    strokeWidth={2}
                  />
                  <path
                    d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
                    fill="none"
                    stroke="oklch(14.1% 0.005 285.9)"
                    strokeWidth={2}
                  />
                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} />
                </svg>
              </StepIcon>
              <div className="min-w-0 grow basis-0">
                <p className="mb-1 font-sans text-sm font-medium leading-[142.857%] text-[#09090B]">Response Generation</p>
                <p className="line-clamp-1 font-sans text-xs leading-[133.333%] text-[#52525C]">Run inference with context</p>
              </div>
              <span className="shrink-0 rounded-full bg-[#09090B0D] px-2 py-0.5">
                <span className="font-sans text-xs leading-[133.333%] text-[#52525C]">Pending</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

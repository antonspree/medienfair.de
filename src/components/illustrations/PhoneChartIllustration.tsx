"use client";

/** Paper node 38U-0 */
export function PhoneChartIllustration() {
  const bars = [
    { h: "h-10", label: "So" },
    { h: "h-16", label: "Mo" },
    { h: "h-20", label: "Di" },
    { h: "h-28", label: "Mi" },
    { h: "h-16", label: "Do" },
    { h: "h-12", label: "Fr" },
    { h: "h-24", label: "Sa", gradient: true },
  ];
  return (
    <div className="flex h-80 w-full flex-col items-center overflow-hidden antialiased [font-synthesis:none]">
      <div className="min-w-92 w-fit px-4 pt-2 [mask-image:linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#000_75%,transparent),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff),linear-gradient(#fff,#fff)]">
        <div className="mx-auto overflow-hidden rounded-t-[40px] border border-transparent bg-[#FAFAFABF] px-2 pt-2 [box-shadow:0_0_0_1px_rgba(0,0,0,0.08),0_4px_6px_-1px_rgba(0,0,0,0.07)]">
          <div className="overflow-hidden rounded-t-4xl bg-white px-6 pt-2 pb-16 [box-shadow:0_0_0_1px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.07)]">
            <div className="flex items-center justify-between py-2 pl-4">
              <span className="font-sans text-xs font-semibold text-[#09090B]">9:41</span>
              <div className="flex items-end gap-1">
                <svg width={16} height={16} viewBox="0 0 24 24" aria-hidden><path d="M2 20h.01" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} /><path d="M7 20v-4M12 20v-8M17 20V8" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} /></svg>
                <svg width={18} height={18} viewBox="0 0 24 24" aria-hidden><path d="M12 20h.01" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} /><path d="M5 12.859a10 10 0 0 1 14 0M8.5 16.429a5 5 0 0 1 7 0" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} /></svg>
                <svg width={16} height={16} viewBox="0 0 24 24" className="-mb-px" aria-hidden><path fillRule="evenodd" d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-2.25a1.5 1.5 0 0 0-1.5-1.838V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15ZM4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75H18a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-.75-.75H4.5Z" clipRule="evenodd" fill="oklch(14.1% 0.005 285.9)" /></svg>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <span className="font-sans text-xs text-[#52525C]">Running</span>
              <span className="flex items-center gap-1">
                <span className="flex size-3 shrink-0 items-center justify-center rounded-xs bg-[oklch(59.6%_0.145_163.2)]">
                  <svg width={8} height={8} viewBox="0 0 24 24" aria-hidden><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" fill="none" stroke="#fff" strokeWidth={2} /><polyline points="16 7 22 7 22 13" fill="none" stroke="#fff" strokeWidth={2} /></svg>
                </span>
                <span className="font-sans text-[11px] font-medium text-[oklch(59.6%_0.145_163.2)]">65%</span>
              </span>
            </div>
            <div className="mt-0.5 flex gap-2 font-sans text-base text-[#09090B]">
              <span>11hr</span>
              <span>59min</span>
            </div>
            <div className="mt-12 grid h-32 shrink-0 grid-cols-7">
              {bars.map((bar) => (
                <div key={bar.label} className="flex h-full flex-col items-center justify-end gap-2">
                  <div
                    className={`w-1/2 shrink-0 rounded-sm ${bar.gradient ? "" : "bg-[#09090B1A]"} ${bar.h}`}
                    style={bar.gradient ? { backgroundImage: "linear-gradient(in oklab 180deg, oklab(87.1% -0.135 0.065) 0%, oklab(72.3% -0.189 0.111) 100%)" } : undefined}
                  />
                  <span className="font-sans text-xs text-[#52525C]">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

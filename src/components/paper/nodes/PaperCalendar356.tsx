"use client";

/** Paper node 356-0 */
export function PaperCalendar356() {
  return (
    <div className="flex h-80 w-full shrink-0 items-center justify-center overflow-hidden px-8 pb-6 antialiased [font-synthesis:none]">
      <div className="min-w-[288px] rounded-2xl bg-white p-3 [box-shadow:#00000013_0px_0px_0px_1px,#00000011_0px_10px_15px_-3px,#00000011_0px_4px_6px_-4px]">
        <div className="mb-3 flex items-start justify-between px-1">
          <div>
            <p className="mb-0.5 font-sans text-base font-semibold text-[#09090B]">Dienstag</p>
            <p className="font-sans text-xs text-[#52525C]">29. Januar 2026</p>
          </div>
          <span className="flex items-center gap-1.5 rounded-full bg-[#09090B0D] py-1 pr-2.5 pl-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" className="opacity-50" aria-hidden>
              <circle cx="12" cy="12" r="10" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} />
              <polyline points="12 6 12 12 16 14" fill="none" stroke="oklch(14.1% 0.005 285.9)" strokeWidth={2} />
            </svg>
            <span className="font-sans text-xs font-medium text-[#09090B]">Tag</span>
          </span>
        </div>
        {[
          { time: "09:00", event: null },
          {
            time: "10:00",
            event: {
              label: "All-In-Klusive Familie Schmidt",
              h: "h-18",
              text: "text-[#432DD7]",
              bg: "bg-[oklab(58.5%_0.029_-0.231/10%)]",
              shadow: "[box-shadow:oklab(58.5%_0.029_-0.231/25%)_0px_0px_0px_1px]",
            },
          },
          { time: "11:00", event: null },
          {
            time: "12:00",
            event: {
              label: "Erstgespräch - Max Mustermann",
              h: "h-8",
              text: "text-[oklch(50.8%_0.118_165.6)]",
              bg: "bg-[oklab(69.6%_-0.162_0.051/10%)]",
              shadow: "[box-shadow:oklab(69.6%_-0.162_0.051/25%)_0px_0px_0px_1px]",
            },
          },
          { time: "13:00", event: null },
          {
            time: "14:00",
            event: {
              label: "Closing - Anna",
              h: "h-8",
              text: "text-[oklch(49.6%_0.265_301.9)]",
              bg: "bg-[oklab(62.7%_0.148_-0.220/10%)]",
              shadow: "[box-shadow:oklab(62.7%_0.148_-0.220/25%)_0px_0px_0px_1px]",
            },
          },
        ].map((row) => (
          <div key={row.time} className="flex gap-3">
            <div className="w-10 shrink-0 py-2 text-right font-sans text-xs text-[#52525C]">{row.time}</div>
            <div className="relative grow border-t border-t-solid border-t-[#09090B0A] py-2">
              {row.event && (
                <div
                  className={`absolute inset-x-0 top-1 rounded-lg p-2 font-sans text-xs font-medium ${row.event.h} ${row.event.text} ${row.event.bg} ${row.event.shadow}`}
                >
                  {row.event.label}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

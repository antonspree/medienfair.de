"use client";

/** Paper node 3LF-0 */
export function PaperStepCsv3LF() {
  const gridRows = [
    ["bg-[#09090B26]", "bg-[#09090B26]", "bg-[#09090B26]"],
    ...Array(6).fill(["bg-[#09090B0D]", "bg-[#09090B0D]", "bg-[#09090B0D]"]),
  ] as string[][];

  return (
    <div className="flex h-50 w-full items-center justify-center overflow-clip p-6 antialiased [font-synthesis:none]">
      <div className="relative size-fit">
        <div className="w-16 rounded-l-md rounded-br-md rounded-tr-[15%] bg-white p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.075),0_4px_6px_-1px_rgba(0,0,0,0.067),0_2px_4px_-2px_rgba(0,0,0,0.067)] [corner-top-right-shape:bevel]">
          {gridRows.map((row, i) => (
            <div key={i} className={`flex gap-0.5 ${i < gridRows.length - 1 ? "mb-0.75" : ""}`}>
              {row.map((bg, j) => (
                <div key={j} className={`h-2 grow basis-0 rounded-sm ${bg}`} />
              ))}
            </div>
          ))}
        </div>
        <div className="absolute -right-3 bottom-2 rounded-sm bg-[oklch(70.4%_0.140_182.5)] px-1.5 py-0.5 shadow-[0_10px_15px_-3px_rgba(11,79,74,0.25),0_4px_6px_-4px_rgba(11,79,74,0.25)]">
          <span className="font-sans text-[10px] font-semibold leading-[150%] text-white [text-shadow:0_1px_0_rgba(0,0,0,0.075),0_1px_1px_rgba(0,0,0,0.075),0_2px_2px_rgba(0,0,0,0.075)]">
            CSV
          </span>
        </div>
      </div>
    </div>
  );
}

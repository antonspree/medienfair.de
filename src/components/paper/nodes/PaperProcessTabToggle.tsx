"use client";

/** Paper node 3VZ-0 — Kunden / Partner Segmented Control */
export function PaperProcessTabToggle({
  value,
  onChange,
}: {
  value: "kunden" | "partner";
  onChange: (value: "kunden" | "partner") => void;
}) {
  return (
    <div className="flex w-fit shrink-0 flex-col gap-2">
      <div className="flex w-[174px] items-center justify-center gap-1 rounded-full border border-solid border-black/[0.06] bg-white p-1">
        <button
          type="button"
          onClick={() => onChange("kunden")}
          className="relative flex h-8 grow basis-0 items-center justify-center gap-2 rounded-full px-4"
        >
          {value === "kunden" && (
            <span className="absolute inset-0 rounded-full bg-[#0000000D]" aria-hidden />
          )}
          <span className="relative text-center font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#1b263b]">
            Kunden
          </span>
        </button>
        <button
          type="button"
          onClick={() => onChange("partner")}
          className="relative flex h-8 grow basis-0 items-center justify-center gap-2 rounded-full pl-4 pr-2.5"
        >
          {value === "partner" && (
            <span className="absolute inset-0 rounded-full bg-[#0000000D]" aria-hidden />
          )}
          <span className="relative font-['Inter',system-ui,sans-serif] text-sm font-medium leading-[142.857%] text-[#1b263b]">
            Partner
          </span>
        </button>
      </div>
    </div>
  );
}

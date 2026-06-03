"use client";

/** Paper node 3KI-0 */
export function PaperLegalCard() {
  return (
    <div className="rounded-2xl bg-[#00000008] antialiased [font-synthesis:none]">
      <div className="flex items-center justify-between gap-3 px-8 py-6">
        <div className="flex flex-col gap-1">
          <p className="font-['Inter',system-ui,sans-serif] text-lg font-medium leading-[155.556%] text-[#181925]">
            Seriös & rechtlich sauber
          </p>
          <p className="max-w-[288px] font-['Inter',system-ui,sans-serif] text-base leading-[150%] text-[#666666]">
            Datenschutz, Impressum, Consent und Anfrageprozesse werden von Anfang an sauber mitgedacht.
          </p>
        </div>
        <svg width={72} height={72} viewBox="0 0 16 16" className="h-[72px] w-[72px] shrink-0 overflow-hidden" aria-hidden>
          <path
            d="M6.62 11.134C7.013 10.877 7.489 10.727 8 10.727C8.511 10.727 8.987 10.877 9.38 11.134M6.62 11.134C6.38 10.07 5.395 9.273 4.216 9.273C2.858 9.273 1.757 10.331 1.757 11.636C1.757 12.942 2.858 14 4.216 14C5.575 14 6.676 12.942 6.676 11.636C6.676 11.464 6.656 11.296 6.62 11.134ZM9.38 11.134C9.344 11.296 9.324 11.464 9.324 11.636C9.324 12.942 10.425 14 11.784 14C13.142 14 14.243 12.942 14.243 11.636C14.243 10.331 13.142 9.273 11.784 9.273C10.605 9.273 9.62 10.07 9.38 11.134ZM1 7.455H2.514M2.514 7.455L3.095 3.262C3.195 2.54 3.837 2 4.595 2H11.405C12.163 2 12.805 2.54 12.905 3.262L13.486 7.455M2.514 7.455H13.486M13.486 7.455H15"
            fill="none"
            stroke="#E0E0E0"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

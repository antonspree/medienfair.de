"use client";

import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/vertrieb-medienfair/erstgespraech?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=fca311";

export function CalendlyInline() {
  return (
    <>
      <div
        className="calendly-inline-widget w-full overflow-hidden rounded-2xl bg-[#FAFAFA]"
        data-url={CALENDLY_URL}
        style={{ minWidth: 320, height: 700 }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}

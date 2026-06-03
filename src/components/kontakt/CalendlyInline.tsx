"use client";

import Script from "next/script";

const CALENDLY_URL =
  "https://calendly.com/vertrieb-medienfair/erstgespraech?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=4562d7";

export function CalendlyInline() {
  return (
    <>
      <div
        className="calendly-inline-widget w-full overflow-hidden rounded-2xl bg-black/[0.02]"
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

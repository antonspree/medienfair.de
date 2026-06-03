"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function VertriebspartnerDashboard() {
  return (
    <section className="bg-white pb-4">
      <Reveal delay={0.08} className="w-full">
        <div
          className="bg-cover bg-center bg-no-repeat pt-16 pb-14 sm:pt-24 sm:pb-20"
          style={{ backgroundImage: "url(/images/hero-bg.webp)" }}
        >
          <div className="mx-auto max-w-5xl px-5">
            <div className="relative aspect-[8/5] w-full overflow-hidden rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.04)] sm:rounded-2xl">
              <Image
                src="/images/dashboard.png"
                alt="Beispiel-Dashboard: Bewerbungen und Partner-Pipeline"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>
            <p className="mx-auto mt-6 max-w-lg text-center text-xs font-medium text-[#666666]/80">
              Beispielansicht · Pipeline, Kanäle und Qualifizierung auf einen Blick
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

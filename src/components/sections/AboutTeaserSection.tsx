"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { fontInter, superellipse } from "@/lib/paper";

const teamPhotos = [
  { src: "/images/about/team-1.webp", alt: "Medienfair Team" },
  { src: "/images/about/team-2.webp", alt: "Medienfair bei der Arbeit" },
  { src: "/images/about/team-3.webp", alt: "Medienfair Produktion" },
] as const;

/** Paper artboard „uberunssection“ (node 6TT-0) */
export function AboutTeaserSection() {
  return (
    <section id="ueber-uns" className={`bg-white py-16 ${fontInter}`}>
      <Reveal className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-5">
        <h2 className="flex max-w-lg flex-wrap justify-center text-center text-4xl font-medium leading-[111%] text-balance text-[#181925]">
          Aber warum Medienfair?
        </h2>
        <p className="flex max-w-md flex-wrap justify-center text-center text-lg font-medium leading-6 text-[#666666]">
          Angefangen vor über 10 Jahren mit einem Hobby im Kinderzimmer. Kontakte
          geknüpft und nie aufgegeben – und gewachsen, schneller als gedacht.
        </p>

        <div className="flex w-full max-w-md items-stretch gap-2.5">
          {teamPhotos.map((photo) => (
            <div
              key={photo.src}
              className="relative min-h-[114px] flex-1 overflow-hidden rounded-[10px]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 33vw, 128px"
              />
            </div>
          ))}
        </div>

        <p className="flex max-w-md flex-wrap justify-center text-center text-lg font-medium leading-6 text-[#666666]">
          Nun stehen wir hier – mit Medienfair. Ein Team aus 7 Köpfen – mit Weitblick
          und Expertise. Zusammen haben wir Jahrzehnte Erfahrung.
        </p>

        <Link
          href="/ueber-uns"
          className={`inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#00000008] px-5 text-base font-medium leading-[150%] text-[#666666] transition-colors hover:bg-black/[0.06] hover:text-[#181925] ${superellipse}`}
        >
          Mehr zu uns
        </Link>
      </Reveal>
    </section>
  );
}

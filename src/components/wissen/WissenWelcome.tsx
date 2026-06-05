import Link from "next/link";
import { wissenWelcome } from "@/content/wissen/welcome";
import { fontInter } from "@/lib/paper";

export function WissenWelcome() {
  return (
    <article className={`w-full py-6 sm:py-12 ${fontInter}`}>
      <span className="inline-flex h-6 items-center justify-center rounded-md bg-black/[0.08] px-2 text-sm font-medium text-black/40">
        Wissen
      </span>

      <h1 className="my-4 text-2xl font-medium leading-[120%] tracking-[-0.525px] text-[#181925] sm:text-[30px]">
        {wissenWelcome.title}
      </h1>

      <p className="text-base leading-[137.5%] text-[#666666]">{wissenWelcome.intro}</p>

      <div className="my-6 w-full rounded-lg bg-black/[0.08] px-4 py-2.5">
        <p className="text-sm leading-[137.5%] text-[#666666]">{wissenWelcome.callout}</p>
      </div>

      {wissenWelcome.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="mb-4 mt-10 text-xl font-medium leading-[140%] text-[#181925]">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-[137.5%] text-[#666666] first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <p className="mt-12 text-sm font-medium text-[#999999]">
        Direkt einsteigen:{" "}
        <Link
          href="/wissen/positionierung"
          className="text-[#666666] hover:text-[#181925] hover:underline"
        >
          Positionierung
        </Link>
        ,{" "}
        <Link href="/faq" className="text-[#666666] hover:text-[#181925] hover:underline">
          FAQ
        </Link>{" "}
        oder{" "}
        <Link href="/kontakt" className="text-[#666666] hover:text-[#181925] hover:underline">
          Erstgespräch buchen
        </Link>
        .
      </p>
    </article>
  );
}

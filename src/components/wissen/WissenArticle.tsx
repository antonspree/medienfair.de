import Link from "next/link";
import type { WissenTerm } from "@/content/wissen/types";
import { getWissenCategoryTitle } from "@/content/wissen/categories";
import { fontInter } from "@/lib/paper";

type WissenArticleProps = {
  term: WissenTerm;
};

export function WissenArticle({ term }: WissenArticleProps) {
  const categoryTitle = getWissenCategoryTitle(term.categoryId);

  return (
    <article className={`w-full py-6 sm:py-12 ${fontInter}`}>
      <span className="inline-flex h-6 items-center justify-center rounded-md bg-[#FAFAFA] px-2 text-sm font-medium text-[#1b263b]/40">
        {categoryTitle}
      </span>

      <h1 className="my-4 text-2xl font-medium leading-[120%] tracking-[-0.525px] text-[#1b263b] sm:text-[30px]">
        {term.title}
      </h1>

      <p className="text-base leading-[137.5%] text-[#1b263b]/70">{term.intro}</p>

      {term.callout ? (
        <div className="my-6 w-full rounded-lg bg-[#FAFAFA] px-4 py-2.5">
          <p className="text-sm leading-[137.5%] text-[#1b263b]/70">{term.callout}</p>
        </div>
      ) : null}

      {term.sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24">
          <h2 className="mb-4 mt-10 text-xl font-medium leading-[140%] text-[#1b263b]">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-4 text-base leading-[137.5%] text-[#1b263b]/70 first:mt-0"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <p className="mt-12 text-sm font-medium text-[#999999]">
        Noch Fragen?{" "}
        <Link href="/faq" className="text-[#1b263b]/70 hover:text-[#1b263b] hover:underline">
          FAQ ansehen
        </Link>{" "}
        oder{" "}
        <Link href="/kontakt" className="text-[#1b263b]/70 hover:text-[#1b263b] hover:underline">
          Erstgespräch buchen
        </Link>
        .
      </p>
    </article>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WissenArticle } from "@/components/wissen/WissenArticle";
import { WissenShell } from "@/components/wissen/WissenShell";
import { getWissenTerm, wissenSlugs } from "@/content/wissen/terms";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return wissenSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const term = getWissenTerm(slug);
  if (!term) return {};
  return {
    title: `${term.title} – Wissen | Medienfair`,
    description: term.metaDescription,
  };
}

export default async function WissenTermPage({ params }: PageProps) {
  const { slug } = await params;
  const term = getWissenTerm(slug);
  if (!term) notFound();

  return (
    <WissenShell tocSections={term.sections}>
      <WissenArticle term={term} />
    </WissenShell>
  );
}

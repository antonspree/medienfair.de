import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/sections/Header";
import { CtaSection } from "@/components/sections/CtaSection";
import { Footer } from "@/components/sections/Footer";
import { ServiceSubpage } from "@/components/pages/leistungen/ServiceSubpage";
import { getLeistungPage, leistungSlugs } from "@/content/leistungen/pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return leistungSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLeistungPage(slug);
  if (!page) return {};
  return {
    title: `${page.badge} – Medienfair`,
    description: page.metaDescription,
  };
}

export default async function LeistungPage({ params }: PageProps) {
  const { slug } = await params;
  const content = getLeistungPage(slug);
  if (!content) notFound();

  return (
    <>
      <Header />
      <main>
        <ServiceSubpage content={content} />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

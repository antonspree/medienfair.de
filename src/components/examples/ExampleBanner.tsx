import Link from "next/link";

export function ExampleBanner() {
  return (
    <div className="border-b border-black/[0.06] bg-[#0EA5E90A]">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-2 px-5 py-2.5 text-center text-sm font-medium">
        <span className="text-[#0EA5E9]">Beispiel-Landingpage von Medienfair</span>
        <span className="text-[#999999]">So könnte deine Vertriebspartner-Seite aussehen.</span>
        <Link href="/beispiele" className="text-[#666666] hover:text-[#181925] hover:underline">
          Alle Beispiele
        </Link>
      </div>
    </div>
  );
}

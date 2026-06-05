"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoIcon } from "@/components/icons/LogoIcon";
import { wissenCategories } from "@/content/wissen/categories";
import { wissenTerms } from "@/content/wissen/terms";
import { fontInter, paper } from "@/lib/paper";
import { cn } from "@/lib/cn";

type WissenSidebarProps = {
  onNavigate?: () => void;
};

export function WissenSidebar({ onNavigate }: WissenSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`flex h-full min-h-0 w-full flex-col overflow-y-auto lg:w-56 ${fontInter}`}
    >
      <div className="flex flex-col gap-6 p-5">
        <Link href="/" className="flex items-center gap-2.5" aria-label="Zur Startseite">
          <LogoIcon className="w-[25px]" variant="dark" />
          <span className="inline-flex h-[18px] items-center justify-center rounded-sm border border-transparent bg-white px-1 text-xs font-medium text-[#999999] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]">
            Wissen
          </span>
        </Link>

        <div className="flex flex-col gap-1.5">
          <p className="text-sm font-medium text-black/40">Start</p>
          <ul className="flex flex-col">
            <li>
              <Link
                href="/wissen"
                onClick={onNavigate}
                className={cn(
                  "mb-1 flex h-6 items-center gap-2 text-sm font-medium",
                  pathname === "/wissen" ? "text-[#181925]" : "text-[#666666] hover:text-[#181925]",
                )}
              >
                <span className="line-clamp-1">Willkommen</span>
                {pathname === "/wissen" ? (
                  <span
                    className="size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: paper.faqChevron }}
                    aria-hidden
                  />
                ) : null}
              </Link>
            </li>
          </ul>
        </div>

        {wissenCategories.map((category) => {
          const terms = wissenTerms.filter((t) => t.categoryId === category.id);
          return (
            <div key={category.id} className="flex flex-col gap-1.5">
              <p className="text-sm font-medium text-black/40">{category.title}</p>
              <ul className="flex flex-col">
                {terms.map((term, i) => {
                  const href = `/wissen/${term.slug}`;
                  const active = pathname === href;
                  return (
                    <li key={term.slug}>
                      <Link
                        href={href}
                        onClick={onNavigate}
                        className={cn(
                          "mb-1 flex h-6 items-center gap-2 text-sm font-medium last:mb-0",
                          active ? "text-[#181925]" : "text-[#666666] hover:text-[#181925]",
                          i === terms.length - 1 && "mb-0",
                        )}
                      >
                        <span className="line-clamp-1">{term.title}</span>
                        {active ? (
                          <span
                            className="size-2 shrink-0 rounded-full"
                            style={{ backgroundColor: paper.faqChevron }}
                            aria-hidden
                          />
                        ) : null}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

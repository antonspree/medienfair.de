import Link from "next/link";
import { cn } from "@/lib/cn";
import {
  leistungenMegaMenuItems,
  leistungenMegaMenuMoreLinks,
  type LeistungenMegaIcon,
} from "@/lib/leistungen-mega-menu";

function MegaMenuIcon({ type }: { type: LeistungenMegaIcon }) {
  const stroke = "#FFFFFF";
  const common = {
    fill: "none" as const,
    stroke,
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "clock") {
    return (
      <path
        d="M8 4.5V3.722M8 11.5V12.278M9.684 5.667C9.348 5.202 8.72 4.889 8 4.889H7.784C6.829 4.889 6.056 5.508 6.056 6.272V6.331C6.056 6.877 6.441 7.377 7.052 7.621L8.948 8.379C9.559 8.623 9.944 9.123 9.944 9.669C9.944 10.466 9.137 11.111 8.142 11.111H8C7.28 11.111 6.652 10.798 6.316 10.333M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z"
        {...common}
      />
    );
  }
  if (type === "globe") {
    return (
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    );
  }
  if (type === "face") {
    return (
      <>
        <path
          d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z"
          {...common}
        />
        <path d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1" {...common} />
        <ellipse cx={5.55} cy={6.25} rx={1.05} ry={1.05} fill={stroke} />
        <ellipse cx={10.45} cy={6.25} rx={1.05} ry={1.05} fill={stroke} />
      </>
    );
  }
  return (
    <path
      d="M10.27 6.486L8.197 10.461M14.054 10.838H1.946M12.95 3.05C10.216 0.317 5.784 0.317 3.05 3.05C0.317 5.784 0.317 10.216 3.05 12.95C5.784 15.683 10.216 15.683 12.95 12.95C15.683 10.216 15.683 5.784 12.95 3.05Z"
      {...common}
    />
  );
}

type LeistungenMegaMenuProps = {
  onNavigate?: () => void;
  className?: string;
};

export function LeistungenMegaMenu({ onNavigate, className }: LeistungenMegaMenuProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="grid grid-cols-2 gap-2">
        {leistungenMegaMenuItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={onNavigate}
            className="flex min-h-[132px] flex-col items-center justify-center gap-3 rounded-2xl px-3 py-5 transition-[filter] hover:brightness-110"
            style={{ backgroundColor: item.cardBg }}
          >
            <span
              className="flex size-12 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: item.iconBg }}
            >
              <svg width={24} height={24} viewBox="0 0 16 16" className="shrink-0" aria-hidden>
                <MegaMenuIcon type={item.iconType} />
              </svg>
            </span>
            <div className="flex flex-col items-center gap-0.5 text-center">
              <span className="text-sm font-medium text-white">{item.title}</span>
              <span className="text-xs font-medium leading-snug text-[#9CA3AF]">
                {item.subtitle}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="border-t border-white/10 px-2 pt-2.5">
        <nav
          className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1"
          aria-label="Weitere Leistungen"
        >
          {leistungenMegaMenuMoreLinks.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-1.5">
              {index > 0 && (
                <span className="text-[#555555]" aria-hidden>
                  ·
                </span>
              )}
              <Link
                href={link.href}
                onClick={onNavigate}
                className="text-xs font-medium text-[#BBBCC3] transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>
      </div>

      <Link
        href="/#leistungen"
        onClick={onNavigate}
        className="rounded-xl px-2 py-1 text-center text-xs font-medium text-[#888888] transition-colors hover:text-[#BBBCC3]"
      >
        Alle Leistungen auf der Startseite
      </Link>
    </div>
  );
}

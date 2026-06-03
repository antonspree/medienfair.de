import Link from "next/link";
import { ACCENT } from "./data";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function AccentPillLink({ href, children, variant = "primary" }: Props) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: ACCENT }}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className="inline-flex h-11 items-center justify-center rounded-full border border-black/[0.08] bg-white px-5 text-sm font-medium text-[#181925] transition-colors hover:bg-black/[0.02]"
    >
      {children}
    </Link>
  );
}

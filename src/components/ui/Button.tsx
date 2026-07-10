import { cn } from "@/lib/cn";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "nav";
  size?: "sm" | "md";
  className?: string;
  href?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href = "#",
}: ButtonProps) {
  const sizes = {
    sm: "h-8 px-2.5 text-sm",
    md: "h-11 px-5 text-base",
  };

  const variants = {
    primary: "bg-[#fca311] text-white hover:bg-[#e8940f]",
    secondary: "bg-[#FAFAFA] text-[#1b263b]/70 hover:bg-[#FAFAFA]",
    ghost: "bg-white text-[#1b263b] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:bg-[#fafafa]",
    nav: "bg-[#fca311] text-white hover:bg-[#e8940f] h-8 px-2.5 text-sm",
  };

  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

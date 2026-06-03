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
    primary: "bg-[#4562D7] text-white hover:bg-[#3d56c4]",
    secondary: "bg-black/[0.03] text-[#666666] hover:bg-black/[0.06]",
    ghost: "bg-white text-[#181925] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)] hover:bg-[#fafafa]",
    nav: "bg-[#4562D7] text-white hover:bg-[#3d56c4] h-8 px-2.5 text-sm",
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

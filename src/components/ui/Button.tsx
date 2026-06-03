"use client";

import { motion } from "framer-motion";
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
    primary: "bg-[#4562D7] text-white",
    secondary: "bg-black/[0.03] text-[#666666]",
    ghost: "bg-white text-[#181925] shadow-[0_1px_1px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.05)]",
    nav: "bg-[#4562D7] text-white h-8 px-2.5 text-sm",
  };

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors",
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {children}
    </motion.a>
  );
}

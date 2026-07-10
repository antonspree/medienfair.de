"use client";

import { cn } from "@/lib/cn";

type PaperPlayButtonProps = {
  onClick: () => void;
  className?: string;
  /** Helles Cover (z. B. weißes Logo-Banner) */
  light?: boolean;
};

/** Paper frame „Play“ – zentrierter Play-Button über Video-Thumbnail */
export function PaperPlayButton({ onClick, className, light }: PaperPlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Video abspielen"
      className={cn("absolute inset-0 z-10 flex items-center justify-center", className)}
    >
      <span
        className={cn(
          "flex size-14 shrink-0 items-center justify-center rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors duration-200 sm:size-16",
          light
            ? "bg-[#1b263b]/10 hover:bg-[#1b263b]/15"
            : "bg-white/15 hover:bg-white/25",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className={cn(
            "size-10 shrink-0 sm:size-11",
            light ? "text-[#1b263b]" : "text-white",
          )}
        >
          <path d="M8 6.82v10.36c0 .55.6.89 1.05.59l8.4-5.18a.7.7 0 0 0 0-1.18l-8.4-5.18C8.6 5.93 8 6.27 8 6.82z" />
        </svg>
      </span>
    </button>
  );
}

"use client";

type PaperPlayButtonProps = {
  onClick: () => void;
  className?: string;
};

/** Paper frame „Play“ – zentrierter Play-Button über Video-Thumbnail */
export function PaperPlayButton({ onClick, className }: PaperPlayButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Video abspielen"
      className={`absolute inset-0 z-10 flex items-center justify-center ${className ?? ""}`}
    >
      <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-black/50 transition-transform duration-200 hover:scale-105 hover:bg-black/60 active:scale-95 sm:size-24">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className="size-10 shrink-0 text-white sm:size-12"
        >
          <path d="M8 6.82v10.36c0 .55.6.89 1.05.59l8.4-5.18a.7.7 0 0 0 0-1.18l-8.4-5.18C8.6 5.93 8 6.27 8 6.82z" />
        </svg>
      </span>
    </button>
  );
}

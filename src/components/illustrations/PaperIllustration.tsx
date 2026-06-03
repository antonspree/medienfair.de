import { cn } from "@/lib/cn";

export type PaperIllustrationProps = {
  /** Paper-exported SVG under /public/svg/illustrations/ */
  src: string;
  /** Native export width from Paper (px) */
  width: number;
  /** Native export height from Paper (px) */
  height: number;
  className?: string;
  /** Outer slot height (Paper artboard area) */
  slotHeight?: number;
};

/**
 * Renders a Paper `export` SVG 1:1 (foreignObject snapshot).
 * Do not hand-rebuild these frames — use the exported asset.
 */
export function PaperIllustration({
  src,
  width,
  height,
  className,
  slotHeight,
}: PaperIllustrationProps) {
  const slot = slotHeight ?? height;

  return (
    <div
      className={cn(
        "flex w-full shrink-0 items-center justify-center overflow-hidden antialiased [font-synthesis:none]",
        className,
      )}
      style={{ minHeight: slot }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        width={width}
        height={height}
        alt=""
        decoding="async"
        className="h-auto max-w-full shrink-0"
        style={{ width: "auto", height: "auto", maxHeight: slot }}
      />
    </div>
  );
}

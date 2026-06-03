export function ChevronDown({
  className,
  stroke = "currentColor",
}: {
  className?: string;
  stroke?: string;
}) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      className={className}
      aria-hidden
    >
      <path
        d="M4 6L8 10L12 6"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoIcon({
  className = "w-[25px] h-auto",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const shield = variant === "light" ? "#FFFFFF" : "#141414";
  const chevron = variant === "light" ? "#000000" : "#141414";

  return (
    <svg
      width="42"
      height="38"
      viewBox="0 0 42 38"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M0 18.802V7.952C0 3.56 3.56 0 7.952 0C9.609 0 11.225 0.518 12.574 1.481L21 7.5L29.426 1.481C30.775 0.518 32.391 0 34.048 0C38.44 0 42 3.56 42 7.952V18.802C42 21.431 40.709 23.892 38.545 25.385L24.409 35.146C22.357 36.563 19.643 36.563 17.591 35.146L3.454 25.385C1.291 23.892 0 21.431 0 18.802Z"
        fill={shield}
      />
      <path
        d="M8.5 18.5L21 27L33.5 18.5"
        fill="none"
        stroke={chevron}
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}

import { cn } from "@/lib/cn";

type IconProps = { className?: string; size?: number; stroke?: string };

function IconBase({
  className,
  size = 16,
  viewBox = "0 0 16 16",
  children,
}: {
  className?: string;
  size?: number;
  viewBox?: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={cn("shrink-0 overflow-hidden", className)}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function IconLogoMark({
  className,
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const shield = variant === "dark" ? "#1b263b" : "#FFFFFF";
  const chevron = variant === "dark" ? "#FFFFFF" : "#1b263b";
  return (
    <svg
      width={42}
      height={38}
      viewBox="0 0 42 38"
      className={cn("h-auto w-[25px]", className)}
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
        strokeWidth={7}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconChevronNav({ className, stroke = "#BBBCC3" }: IconProps) {
  return (
    <IconBase className={className} size={14}>
      <path
        d="M4 6L8 10L12 6"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconChevronRight({ className, stroke = "currentColor" }: IconProps) {
  return (
    <IconBase className={className}>
      <path
        d="M6 12L10 8L6 4"
        fill="none"
        stroke={stroke}
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconChevronFaq({ className, stroke = "#918DF6" }: IconProps) {
  return (
    <IconBase className={cn("translate-y-0.5", className)}>
      <path
        d="M4 6L8 10L12 6"
        fill="none"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconXCircle({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-0.344 4 16 16"
      width={16}
      height={16}
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M7.973 5.5c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5S11.563 5.5 7.973 5.5Zm-1.147 4.647a0.5 0.5 0 1 0-0.707 0.706L7.266 12l-1.147 1.147a0.5 0.5 0 1 0 0.707 0.706L7.973 12.707l1.147 1.146a0.5 0.5 0 1 0 0.706-0.706L8.679 12l1.147-1.147a0.5 0.5 0 1 0-0.706-0.706L7.973 11.293l-1.147-1.146Z"
        clipRule="evenodd"
        fill="#EC6B5C"
      />
    </svg>
  );
}

export function IconDollar({ className, stroke = "#33C758", size = 20 }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M8 4.5V3.722M8 11.5V12.278M9.684 5.667C9.348 5.202 8.72 4.889 8 4.889H7.784C6.829 4.889 6.056 5.508 6.056 6.272V6.331C6.056 6.877 6.441 7.377 7.052 7.621L8.948 8.379C9.559 8.623 9.944 9.123 9.944 9.669C9.944 10.466 9.137 11.111 8.142 11.111H8C7.28 11.111 6.652 10.798 6.316 10.333M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconGlobe({ className, stroke = "#2C78FC", size = 20 }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="square"
      />
    </IconBase>
  );
}

export function IconSmile({ className, stroke = "#D6409F", size = 20 }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="5.55" cy="6.25" rx="1.05" ry="1.05" fill={stroke} />
      <ellipse cx="10.45" cy="6.25" rx="1.05" ry="1.05" fill={stroke} />
    </IconBase>
  );
}

export function IconPerformance({ className, stroke = "#FFA600", size = 20 }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        d="M10.27 6.486L8.197 10.461M14.054 10.838H1.946M12.95 3.05C10.216 0.317 5.784 0.317 3.05 3.05C0.317 5.784 0.317 10.216 3.05 12.95C5.784 15.683 10.216 15.683 12.95 12.95C15.683 10.216 15.683 5.784 12.95 3.05Z"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconCheckCircle({ className, stroke }: IconProps) {
  return (
    <IconBase className={className}>
      <path
        d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.785 8.699L6.914 10.838L10.461 5.541"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconBase>
  );
}

export function IconLegalScales({ className, size = 72 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <path
        d="M6.62 11.134C7.013 10.877 7.489 10.727 8 10.727C8.511 10.727 8.987 10.877 9.38 11.134M6.62 11.134C6.38 10.07 5.395 9.273 4.216 9.273C2.858 9.273 1.757 10.331 1.757 11.636C1.757 12.942 2.858 14 4.216 14C5.575 14 6.676 12.942 6.676 11.636C6.676 11.464 6.656 11.296 6.62 11.134ZM9.38 11.134C9.344 11.296 9.324 11.464 9.324 11.636C9.324 12.942 10.425 14 11.784 14C13.142 14 14.243 12.942 14.243 11.636C14.243 10.331 13.142 9.273 11.784 9.273C10.605 9.273 9.62 10.07 9.38 11.134ZM1 7.455H2.514M2.514 7.455L3.095 3.262C3.195 2.54 3.837 2 4.595 2H11.405C12.163 2 12.805 2.54 12.905 3.262L13.486 7.455M2.514 7.455H13.486M13.486 7.455H15"
        fill="none"
        stroke="#E0E0E0"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconStripe() {
  return (
    <svg width={64} height={64} viewBox="0 0 400 400" className="h-16 w-16 shrink-0" aria-hidden>
      <circle cx="200" cy="200" r="200" fill="#635BFF" />
      <path
        d="M184.401 155.5C184.401 146.1 192.101 142.4 204.901 142.4C223.301 142.4 246.501 148 264.901 157.9V101.1C244.801 93.1 225.001 90 205.001 90C155.901 90 123.301 115.6 123.301 158.4C123.301 225.1 215.201 214.5 215.201 243.3C215.201 254.4 205.501 258 192.001 258C171.901 258 146.301 249.8 126.001 238.7V296.2C148.501 305.9 171.201 310 192.001 310C242.301 310 276.901 285.1 276.901 241.8C276.501 169.8 184.401 182.6 184.401 155.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function IconDodo() {
  return (
    <svg width={40} height={40} viewBox="0 0 126 126" className="-ml-3 h-10 w-10 shrink-0" aria-hidden>
      <path
        d="M62.689 0C28.069 0 0 28.059 0 62.669C0 97.279 28.068 125.338 62.69 125.338C97.31 125.338 125.378 97.279 125.378 62.668C125.378 28.058 97.31 0 62.689 0Z"
        fill="#C6FE1E"
      />
      <path
        d="M55.208 46.274H55.166C52.576 45.531 49.834 47.018 48.956 49.474C47.986 52.115 49.524 55.14 52.241 55.976C58.894 57.864 61.753 48.33 55.208 46.274Z"
        fill="#0D0D0D"
      />
      <path
        d="M111.912 59.753C103.345 40.993 76.012 48.756 73.488 43.843C66.091 32.236 52.282 25.719 37.354 29.078C35.055 28.158 27.14 27.908 22.024 31.125L25.109 32.487C25.343 32.587 25.276 32.562 25.619 32.687C27.014 33.214 26.772 33.064 25.769 33.615C23.47 34.96 20.603 36.523 18.815 38.871C18.89 38.979 22.752 39.907 22.752 39.907C22.818 39.924 23.537 39.999 23.379 40.317C10.749 60.254 32.046 90.343 42.386 106.537H72.318C67.695 98.265 62.413 86.976 64.218 79.313C64.544 77.926 64.962 76.163 66.667 75.929C70.788 75.269 76.305 75.328 80.233 74.885H80.292C81.128 74.843 101.589 72.244 106.487 84.995C106.905 86.165 107.867 85.405 108.251 84.636C111.904 77.375 114.261 65.944 111.929 59.761L111.912 59.753ZM78.879 53.594C77.442 56.159 76.464 59.494 76.213 62.401C76.079 64.248 76.271 66.069 76.455 67.916C76.556 68.935 76.564 70.222 75.745 70.891C75.034 71.492 73.856 71.551 72.669 71.634C66.843 71.609 52.633 71.634 47.159 67.908L47.125 67.883C39.159 63.028 34.896 52.065 39.627 43.55C41.157 40.66 43.974 38.779 47.184 38.069C51.313 37.124 55.86 37.826 59.546 39.757C61.05 40.517 62.848 41.52 64.218 42.673C66.935 45.046 69.258 47.511 72.819 48.271C74.458 48.739 76.163 48.672 77.801 49.007C80.869 49.742 80.1 51.488 78.871 53.577L78.879 53.594Z"
        fill="#0D0D0D"
      />
    </svg>
  );
}

export function IconRevenueCat() {
  return (
    <svg width={40} height={40} viewBox="0 0 512 512" className="-ml-3 h-10 w-10 shrink-0" aria-hidden>
      <path
        d="M95 109.774C110.152 106.108 133.612 104 154.795 104C212.046 104 246.32 123.928 246.32 174.646C246.32 205.746 233.737 226.264 214.005 237.437L261.765 318.946C258.05 321.632 250.035 323.176 238.864 323.176C226.282 323.176 217.987 321.672 211.982 318.946L172.225 248.3H167.645C157.789 248.305 147.945 247.601 138.18 246.192V319.255C134.172 321.672 127.022 323.176 116.73 323.176C106.73 323.176 99.287 321.659 95 319.255V109.774ZM137.643 207.848C145.772 209.263 153.997 209.968 162.235 209.956C187.12 209.956 202.285 200.556 202.285 177.057C202.285 152.886 186.268 142.949 157.668 142.949C150.956 142.918 144.255 143.515 137.643 144.735V207.848Z"
        fill="#F25A5A"
      />
      <path
        d="M428.529 329.244C428.529 365.526 410.145 375.494 396.306 382.195C360.972 399.32 304.368 379.4 244.206 373.338C189.732 366.214 135.706 361.522 127.309 373.738C124.152 376.832 123.481 386.798 127.309 390.862C138.604 402.85 168.061 394.493 188.919 390.714C195.391 389.694 201.933 392.099 206.079 397.021C210.226 401.944 211.349 408.637 209.024 414.58C206.699 420.522 201.28 424.811 194.809 425.831C185.379 427.264 175.85 427.989 166.306 428C145.988 428 120.442 424.495 105.943 409.072C98.723 401.4 91.327 387.78 97.027 366.465C107.875 326.074 172.807 336.052 248.033 343.633C300.41 348.907 357.23 366.465 379.934 350.343C385.721 346.234 396.517 337.022 390.698 329.244C384.879 321.467 375.353 325.684 362.838 325.684C300.152 325.684 263.238 285.302 263.238 217.916C263.247 167.292 284.176 131.892 318.287 115.09C333.109 107.789 350.421 104 369.587 104C386.292 104 403.269 106.931 414.11 113.366C420.847 123.032 423.778 140.305 422.306 153.201C408.247 146.466 395.36 142.949 378.669 142.949C337.365 142.949 308.947 164.039 308.947 214.985C308.947 265.932 337.065 286.149 376.611 286.149C387.869 286.035 403.1 284.67 422.306 282.053C426.455 297.498 428.529 313.228 428.529 329.244Z"
        fill="#F25A5A"
      />
    </svg>
  );
}

/** Process benefit icons – stroke #4562D7 */
export const processIcons = {
  compass: (
    <IconBase>
      <path d="M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M10.01 5.526L6.904 6.373C6.645 6.443 6.443 6.645 6.373 6.904L5.525 10.01C5.448 10.292 5.708 10.552 5.99 10.475L9.096 9.627C9.355 9.557 9.557 9.355 9.627 9.096L10.474 5.99C10.551 5.708 10.292 5.449 10.01 5.526Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinejoin="round" />
    </IconBase>
  ),
  globe: (
    <IconBase>
      <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="square" />
    </IconBase>
  ),
  shield: (
    <IconBase>
      <path d="M14 4.082C14 3.432 13.599 2.855 13.005 2.65L8.46 1.077C8.161 0.974 7.839 0.974 7.54 1.077L2.995 2.65C2.401 2.855 2 3.432 2 4.082V7.833C2 11.586 5.091 13.371 8 15C10.909 13.371 14 11.586 14 7.833V4.082Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="square" strokeLinejoin="round" />
    </IconBase>
  ),
  spark: (
    <IconBase>
      <path d="M10.27 6.486L8.197 10.461M14.054 10.838H1.946M12.95 3.05C10.216 0.317 5.784 0.317 3.05 3.05C0.317 5.784 0.317 10.216 3.05 12.95C5.784 15.683 10.216 15.683 12.95 12.95C15.683 10.216 15.683 5.784 12.95 3.05Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  ),
  clock: (
    <IconBase>
      <path d="M8 4.784V8L10.649 10.649M1 2.514V5.541H4.027M1.378 10.333C2.341 13.052 4.937 15 7.99 15C11.861 15 15 11.866 15 8C15 4.134 11.861 1 7.99 1C5.085 1 2.593 2.764 1.529 5.278" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  ),
  euro: (
    <IconBase>
      <path d="M8 4.5V3.722M8 11.5V12.278M9.684 5.667C9.348 5.202 8.72 4.889 8 4.889H7.784C6.829 4.889 6.056 5.508 6.056 6.272V6.331C6.056 6.877 6.441 7.377 7.052 7.621L8.948 8.379C9.559 8.623 9.944 9.123 9.944 9.669C9.944 10.466 9.137 11.111 8.142 11.111H8C7.28 11.111 6.652 10.798 6.316 10.333M15 8C15 11.866 11.866 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C11.866 1 15 4.134 15 8Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  ),
  smile: (
    <IconBase>
      <path d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="5.55" cy="6.25" rx="1.05" ry="1.05" fill="#4562D7" />
      <ellipse cx="10.45" cy="6.25" rx="1.05" ry="1.05" fill="#4562D7" />
    </IconBase>
  ),
  rocket: (
    <IconBase>
      <path d="M7.18 1V2.159M11.55 2.81L10.731 3.63M3.63 10.731L2.81 11.55M2.159 7.18H1M3.63 3.63L2.81 2.81M9.603 14.752L6.717 7.216C6.598 6.904 6.904 6.598 7.216 6.717L14.752 9.603C15.051 9.718 15.089 10.127 14.815 10.294L12.088 11.96C12.036 11.992 11.992 12.036 11.96 12.088L10.294 14.815C10.127 15.089 9.718 15.051 9.603 14.752Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  ),
  funnel: (
    <IconBase>
      <path d="M1 15C1 15 2.5 13 4 13M4 13C5.562 13 8 13 8 13M4 13C4 9.095 4 6.905 4 3M8 13V3M8 13C8 13 10.5 10.5 12 10.5M4 3C2.5 3 1 1 1 1M4 3C5.562 3 8 3 8 3M8 3C8 3 10.5 5.5 12 5.5M15 5.5C15 5.5 13.172 5.5 12 5.5M15 10.5C15 10.5 13.172 10.5 12 10.5M12 5.5C12 7.453 12 8.547 12 10.5" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </IconBase>
  ),
  heart: (
    <svg width={16} viewBox="0 0 17 16" height={16} className="shrink-0" aria-hidden>
      <path d="M16 6.25C16 11.281 9.125 15 8.5 15C7.875 15 1 11.281 1 6.25C1 2.75 3.083 1 5.167 1C7.25 1 8.5 2.313 8.5 2.313C8.5 2.313 9.75 1 11.833 1C13.917 1 16 2.75 16 6.25Z" fill="none" stroke="#4562D7" strokeWidth={1.5} strokeLinejoin="round" />
    </svg>
  ),
} as const;

export const PROCESS_BENEFITS: { label: string; icon: keyof typeof processIcons }[] = [
  { label: "Klare Positionierung", icon: "compass" },
  { label: "Online-Sichtbarkeit", icon: "globe" },
  { label: "DSGVO & Pflichtseiten", icon: "shield" },
  { label: "Performante Website", icon: "spark" },
  { label: "Nachhaltiges SEO", icon: "clock" },
  { label: "Planbare Anfragen", icon: "euro" },
  { label: "Personal Brand", icon: "smile" },
  { label: "Paid Marketing", icon: "rocket" },
  { label: "Qualifizierte Anfragen", icon: "funnel" },
  { label: "Persönliche Beratung", icon: "heart" },
];

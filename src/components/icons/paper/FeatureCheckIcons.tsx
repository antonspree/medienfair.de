import { cn } from "@/lib/cn";

function CheckIcon({
  stroke,
  children,
  className,
}: {
  stroke: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      className={cn("shrink-0 overflow-hidden", className)}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function CheckWebsite1({ stroke = "#33C758" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path
        d="M10.172 6.793C7.034 9.931 7.115 13.269 6.096 15C5.076 13.269 4.138 8.771 1 8.771M13.31 4.379C12.862 4.379 12.432 4.201 12.116 3.884C11.799 3.568 11.621 3.138 11.621 2.69C11.621 2.242 11.799 1.812 12.116 1.495C12.432 1.178 12.862 1 13.31 1C13.758 1 14.188 1.178 14.505 1.495C14.822 1.812 15 2.242 15 2.69C15 3.138 14.822 3.568 14.505 3.884C14.188 4.201 13.758 4.379 13.31 4.379Z"
        fill="none"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </CheckIcon>
  );
}

export function CheckWebsite2({ stroke = "#33C758" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M8 12.351V15M8 1V3.649" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.352 8H15" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.051 3.05L8 8M8 8L3.051 12.95M8 8L1 8" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.078 11.076L12.951 12.949" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.078 4.923L12.951 3.05" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

export function CheckWebsite3({ stroke = "#33C758" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="5.55" cy="6.25" rx="1.05" ry="1.05" fill={stroke} />
      <ellipse cx="10.45" cy="6.25" rx="1.05" ry="1.05" fill={stroke} />
    </CheckIcon>
  );
}

export function CheckVisibility1({ stroke = "#2C78FC" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M8 15c3.866 0 7-3.134 7-7S11.866 1 8 1 1 4.134 1 8s3.134 7 7 7Z" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.29 9.4c.31 1.21 1.41 2.1 2.71 2.1s2.4-.89 2.71-2.1" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <ellipse cx="5.55" cy="6.25" rx="1.05" ry="1.05" fill={stroke} />
      <ellipse cx="10.45" cy="6.25" rx="1.05" ry="1.05" fill={stroke} />
    </CheckIcon>
  );
}

export function CheckVisibility2({ stroke = "#2C78FC" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1M8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1M8 15C6.224 15 4.784 11.866 4.784 8C4.784 4.134 6.224 1 8 1M8 15C9.776 15 11.216 11.866 11.216 8C11.216 4.134 9.776 1 8 1M14.811 8H1.189" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="square" />
    </CheckIcon>
  );
}

export function CheckVisibility3({ stroke = "#2C78FC" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M7.18 1V2.159M11.55 2.81L10.731 3.63M3.63 10.731L2.81 11.55M2.159 7.18H1M3.63 3.63L2.81 2.81M9.603 14.752L6.717 7.216C6.598 6.904 6.904 6.598 7.216 6.717L14.752 9.603C15.051 9.718 15.089 10.127 14.815 10.294L12.088 11.96C12.036 11.992 11.992 12.036 11.96 12.088L10.294 14.815C10.127 15.089 9.718 15.051 9.603 14.752Z" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

export function CheckPosition1({ stroke = "#D6409F" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M8 4.784V8L10.649 10.649M1 2.514V5.541H4.027M1.378 10.333C2.341 13.052 4.937 15 7.99 15C11.861 15 15 11.866 15 8C15 4.134 11.861 1 7.99 1C5.085 1 2.593 2.764 1.529 5.278" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

export function CheckPosition2({ stroke = "#D6409F" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M11.601 11.943H13.144M2.344 10.914V3.371C2.344 2.614 2.958 2 3.716 2H12.287C13.044 2 13.658 2.614 13.658 3.371V5.429M2.344 10.914H0.973V11.943C0.973 12.7 1.587 13.314 2.344 13.314H9.544M2.344 10.914H9.544M13.658 5.429H10.915C10.158 5.429 9.544 6.043 9.544 6.8V12.629C9.544 13.386 10.158 14 10.915 14H13.658C14.416 14 15.03 13.386 15.03 12.629V6.8C15.03 6.043 14.416 5.429 13.658 5.429Z" fill="none" stroke={stroke} strokeWidth={1.25} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

export function CheckPosition3({ stroke = "#D6409F" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M6.703 1.423C7.419 0.707 8.58 0.707 9.296 1.423L10.113 2.239C10.27 2.395 10.481 2.484 10.702 2.484H11.684C12.696 2.484 13.517 3.304 13.517 4.317V5.298C13.517 5.519 13.604 5.731 13.761 5.887L14.577 6.703C15.293 7.419 15.293 8.58 14.577 9.296L13.761 10.113C13.604 10.27 13.517 10.481 13.517 10.702V11.684C13.516 12.696 12.696 13.517 11.684 13.517H10.702C10.481 13.517 10.27 13.605 10.113 13.761L9.296 14.577C8.58 15.293 7.419 15.293 6.703 14.577L5.887 13.761C5.731 13.605 5.519 13.517 5.298 13.517H4.316C3.304 13.517 2.484 12.696 2.483 11.684V10.702C2.483 10.481 2.395 10.27 2.239 10.113L1.423 9.296C0.707 8.58 0.707 7.419 1.423 6.703L2.239 5.887C2.395 5.731 2.483 5.519 2.483 5.298V4.317C2.483 3.304 3.304 2.484 4.316 2.484H5.298C5.519 2.483 5.731 2.396 5.887 2.239L6.703 1.423Z" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M5.5 8L7.188 9.75L10.5 5.75" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

export function CheckLeads1({ stroke = "#FFA600" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M10.27 6.486L8.197 10.461M14.054 10.838H1.946M12.95 3.05C10.216 0.317 5.784 0.317 3.05 3.05C0.317 5.784 0.317 10.216 3.05 12.95C5.784 15.683 10.216 15.683 12.95 12.95C15.683 10.216 15.683 5.784 12.95 3.05Z" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

export function CheckLeads2({ stroke = "#FFA600" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4.785 8.699L6.914 10.838L10.461 5.541" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

export function CheckLeads3({ stroke = "#FFA600" }) {
  return (
    <CheckIcon stroke={stroke}>
      <path d="M8 15C4.138 15 1 13.069 1 13.069V1.966C1 1.966 4.621 2.931 8 2.931M8 15V2.931M8 15C11.862 15 15 13.069 15 13.069V1.966M8 2.931C10.414 2.931 12.103 1 12.103 1V12.828C12.103 12.828 10.414 14.759 8 14.759" fill="none" stroke={stroke} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
    </CheckIcon>
  );
}

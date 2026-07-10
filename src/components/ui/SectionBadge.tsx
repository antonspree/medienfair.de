export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center justify-center rounded-md bg-[#1b263b]/[0.03] px-2 text-sm font-medium text-[#1b263b]/40">
      {children}
    </span>
  );
}

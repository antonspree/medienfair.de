export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center justify-center rounded-md bg-black/[0.03] px-2 text-sm font-medium text-black/40">
      {children}
    </span>
  );
}

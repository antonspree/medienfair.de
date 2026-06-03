import { PaperIllustration } from "@/components/illustrations/PaperIllustration";

/** Paper node 5RA-0 – export: dashboard-panel.svg */
export function DashboardPanelIllustration() {
  return (
    <PaperIllustration
      src="/svg/illustrations/dashboard-panel.svg"
      width={384}
      height={291}
      className="w-full flex-col gap-4 self-stretch pl-6 pt-1 [perspective:400px]"
    />
  );
}

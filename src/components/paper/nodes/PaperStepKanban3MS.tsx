"use client";

const AVATAR_A = "/images/about/team-1.webp";
const AVATAR_B = "/images/about/team-3.webp";

function FlagIcon({ fill }: { fill: string }) {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" className="shrink-0" aria-hidden>
      <path
        d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
        fill={fill}
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1={4} x2={4} y1={22} y2={15} stroke={fill} strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function Avatar({ src }: { src: string }) {
  return (
    <div className="size-5 shrink-0 overflow-hidden rounded-full shadow-[0_0_0_2px_#fff]">
      <div
        className="aspect-square w-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${src})` }}
        role="img"
        aria-hidden
      />
    </div>
  );
}

function KanbanCard({
  title,
  subtitle,
  flagFill,
  avatars,
  comments,
  attachments,
}: {
  title: string;
  subtitle: string;
  flagFill: string;
  avatars: string[];
  comments: number;
  attachments?: number;
}) {
  return (
    <div className="mb-2 rounded-lg bg-white p-3 shadow-[0_0_0_1px_rgba(0,0,0,0.075),0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]">
      <div className="mb-2 flex items-start justify-between">
        <span className="font-sans text-sm font-medium leading-[142.857%] text-[#09090B]">{title}</span>
        <FlagIcon fill={flagFill} />
      </div>
      <p className="mb-3 font-sans text-xs leading-[133.333%] text-[#52525C]">{subtitle}</p>
      <div className="flex items-center justify-between">
        <div className="flex">
          {avatars.map((src, i) => (
            <div key={`${src}-${i}`} className={i > 0 ? "-ml-1.5" : ""}>
              <Avatar src={src} />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-0.5">
            <svg width={12} height={12} viewBox="0 0 24 24" className="shrink-0" aria-hidden>
              <path
                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                fill="none"
                stroke="oklch(44.2% 0.017 285.8)"
                strokeWidth={2}
              />
            </svg>
            <span className="font-sans text-[10px] leading-[150%] text-[#52525C]">{comments}</span>
          </span>
          {attachments !== undefined && (
            <span className="flex items-center gap-0.5">
              <svg width={12} height={12} viewBox="0 0 24 24" className="shrink-0" aria-hidden>
                <path
                  d="M13.234 20.252 21 12.3"
                  fill="none"
                  stroke="oklch(44.2% 0.017 285.8)"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
                <path
                  d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
                  fill="none"
                  stroke="oklch(44.2% 0.017 285.8)"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
              <span className="font-sans text-[10px] leading-[150%] text-[#52525C]">{attachments}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

/** Paper node 3MS-0 */
export function PaperStepKanban3MS() {
  return (
    <div className="flex h-50 w-full items-start justify-center overflow-clip p-6 antialiased [font-synthesis:none] text-xs/4">
      <div className="pl-6 pt-1 [mask-composite:intersect] [mask-image:linear-gradient(#fff,#fff),radial-gradient(100%_100%_at_0%_0%,#000_75%,transparent),linear-gradient(#fff,#fff)]">
        <div className="min-w-[320px] rounded-2xl bg-[#FFFFFF80] p-2 shadow-[0_0_0_1px_rgba(0,0,0,0.075),0_20px_25px_-5px_rgba(0,0,0,0.067),0_8px_10px_-6px_rgba(0,0,0,0.067)]">
          <div className="mb-2 flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-2">
              <span className="size-2 shrink-0 rounded-full bg-[oklch(76.9%_0.188_70.1)]" />
              <span className="font-sans text-sm font-semibold leading-[142.857%] text-[#09090B]">In Arbeit</span>
            </div>
            <svg width={16} height={16} viewBox="0 0 24 24" className="shrink-0" aria-hidden>
              <circle cx={12} cy={12} r={1} fill="none" stroke="oklch(44.2% 0.017 285.8)" strokeWidth={2} />
              <circle cx={19} cy={12} r={1} fill="none" stroke="oklch(44.2% 0.017 285.8)" strokeWidth={2} />
              <circle cx={5} cy={12} r={1} fill="none" stroke="oklch(44.2% 0.017 285.8)" strokeWidth={2} />
            </svg>
          </div>
          <KanbanCard
            title="Ist-Zustand Analyse"
            subtitle="Entwicklung Struktur"
            flagFill="oklch(63.7% 0.237 25.3)"
            avatars={[AVATAR_A, AVATAR_B]}
            comments={4}
            attachments={2}
          />
          <KanbanCard
            title="Prototyp Website"
            subtitle="Run usability tests with beta users"
            flagFill="oklch(76.9% 0.188 70.1)"
            avatars={["/images/about/team-2.webp"]}
            comments={2}
          />
          <KanbanCard
            title="Documentation"
            subtitle="Write API reference docs"
            flagFill="oklch(44.2% 0.017 285.8)"
            avatars={[AVATAR_B]}
            comments={1}
            attachments={1}
          />
        </div>
      </div>
    </div>
  );
}

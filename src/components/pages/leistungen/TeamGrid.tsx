import type { TeamMember } from "@/content/team";

type TeamGridProps = {
  heading: string;
  intro?: string;
  members: TeamMember[];
};

export function TeamGrid({ heading, intro, members }: TeamGridProps) {
  return (
    <div>
      <h3 className="mb-4 mt-10 text-lg font-medium leading-[140%] text-[#181925]">
        {heading}
      </h3>
      {intro ? (
        <p className="mt-4 text-base font-medium leading-[137.5%] text-[#666666]">
          {intro}
        </p>
      ) : null}

      <ul className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2">
        {members.map((member) => (
          <li key={member.id}>
            <figure>
              {/* Portraits: Bilder unter public/images/team/{id}.webp – dann Block unten aktivieren
              <div className="relative mb-2.5 aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-[#F8F8F8]">
                <Image
                  src={teamMemberImageSrc(member.id)}
                  alt={member.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 640px) 50vw, 180px"
                />
              </div>
              */}
              <figcaption>
                <p className="text-sm font-medium leading-[142.857%] text-[#181925]">
                  {member.name}
                </p>
                <p className="mt-0.5 text-sm font-medium leading-[142.857%] text-[#999999]">
                  {member.role}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
}

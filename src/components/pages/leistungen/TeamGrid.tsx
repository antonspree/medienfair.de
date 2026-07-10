import Image from "next/image";
import type { TeamMember } from "@/content/team";
import { teamMemberImageSrc } from "@/content/team";

type TeamGridProps = {
  heading: string;
  intro?: string;
  members: TeamMember[];
  /** Volle Sektion mit zentrierter Überschrift (Über-uns) */
  variant?: "inline" | "section";
};

export function TeamGrid({
  heading,
  intro,
  members,
  variant = "inline",
}: TeamGridProps) {
  const isSection = variant === "section";

  return (
    <div className={isSection ? "w-full" : undefined}>
      {isSection ? (
        <h2 className="mb-8 text-center text-[36px] font-medium leading-[111%] text-[#1b263b]">
          {heading}
        </h2>
      ) : (
        <h3 className="mb-4 mt-10 text-lg font-medium leading-[140%] text-[#1b263b]">
          {heading}
        </h3>
      )}

      {intro ? (
        <p
          className={
            isSection
              ? "mx-auto mb-8 max-w-xl text-center text-base font-medium leading-[137.5%] text-[#1b263b]/70"
              : "mt-4 text-base font-medium leading-[137.5%] text-[#1b263b]/70"
          }
        >
          {intro}
        </p>
      ) : null}

      <ul
        className={
          isSection
            ? "mx-auto grid max-w-2xl grid-cols-3 gap-x-3 gap-y-6 sm:max-w-3xl sm:grid-cols-4"
            : "mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4"
        }
      >
        {members.map((member) => {
          const imageSrc = teamMemberImageSrc(member);
          return (
          <li key={member.id} className="w-full">
            <figure className="flex w-full flex-col">
              <div className="relative mb-2 aspect-[4/5] w-full overflow-hidden rounded-[8px] bg-[#FAFAFA]">
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 33vw, 140px"
                  />
                ) : null}
              </div>
              <figcaption className="w-full">
                <p className="text-xs font-medium leading-snug text-[#1b263b] sm:text-sm sm:leading-[142.857%]">
                  {member.name}
                </p>
                <p className="mt-0.5 text-xs font-medium leading-snug text-[#1b263b]/60 sm:text-sm sm:leading-[142.857%]">
                  {member.role}
                </p>
              </figcaption>
            </figure>
          </li>
          );
        })}
      </ul>
    </div>
  );
}

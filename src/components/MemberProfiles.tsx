import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const members = [
  { name: "Amara Obi", group: "Worship Team", since: "Member since 2022", streak: "6 wk streak" },
  { name: "Josiah Turner", group: "Youth Ministry", since: "Member since 2023", streak: "3 wk streak" },
  { name: "Grace Kim", group: "Prayer Team", since: "Member since 2021", streak: "12 wk streak" },
  { name: "David Mensah", group: "Ushers", since: "Member since 2024", streak: "New" },
];

export default function MemberProfiles() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Member profiles"
          title="Every member, one profile."
          subtitle="Attendance history, groups, giving, and notes — all in a single view your team can trust."
        />

        <div data-reveal className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-border bg-bg-1 p-5 transition-colors hover:border-border-strong"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-2 text-[14px] font-medium text-brand-5">
                {m.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="mt-4 text-[15px] font-medium text-fg">{m.name}</div>
              <div className="mt-1 text-[13px] text-fg-2">{m.group}</div>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-[12px] text-fg-3">
                <span>{m.since}</span>
                <span className="rounded-full bg-bg-3 px-2 py-0.5 text-brand-5">
                  {m.streak}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

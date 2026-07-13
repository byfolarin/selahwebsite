import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const rows = [
  { source: "General fund", icon: "●", amount: "$12,480", pct: 84 },
  { source: "Building campaign", icon: "▲", amount: "$6,120", pct: 61 },
  { source: "Missions", icon: "◆", amount: "$3,940", pct: 44 },
  { source: "Text-to-give", icon: "✦", amount: "$2,860", pct: 33 },
  { source: "Events", icon: "■", amount: "$1,110", pct: 18 },
];

export default function GivingAttribution() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Giving attribution"
          title="Know exactly where giving comes from."
          subtitle="Every gift is tied to a fund, a campaign, and a member — so you can see what's working without pulling a spreadsheet."
        />

        <div
          data-reveal
          className="mt-10 rounded-2xl border border-border bg-bg-1 p-6 sm:p-8"
        >
          <div className="flex items-center justify-between text-[12.5px] text-fg-2">
            <span>Fund</span>
            <span>This month</span>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {rows.map((row) => (
              <div key={row.source} className="flex items-center gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bg-3 text-[13px] text-brand-5">
                  {row.icon}
                </div>
                <div className="w-36 shrink-0 text-[14px] text-fg">{row.source}</div>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-bg-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-3 to-brand-5"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <div className="w-20 shrink-0 text-right text-[14px] font-medium text-fg">
                  {row.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

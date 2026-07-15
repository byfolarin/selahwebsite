import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const rows = [
  { source: "Sunday Service (9am)", icon: "●", amount: "512", pct: 88 },
  { source: "Sunday Service (11am)", icon: "▲", amount: "684", pct: 96 },
  { source: "Wednesday Bible Study", icon: "◆", amount: "214", pct: 58 },
  { source: "Youth Group", icon: "✦", amount: "96", pct: 40 },
  { source: "Prayer Meeting", icon: "■", amount: "58", pct: 24 },
];

export default function AttendanceBreakdown() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="features" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Attendance"
          title="See attendance across every service."
          subtitle="Every check-in is tied to a service, a campus, and a member — so you know who showed up without digging through spreadsheets."
        />

        <div
          data-reveal
          className="mt-10 rounded-2xl border border-border bg-bg-1 p-6 sm:p-8"
        >
          <div className="flex items-center justify-between text-[12.5px] text-fg-2">
            <span>Service</span>
            <span>This week</span>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {rows.map((row) => (
              <div key={row.source} className="flex items-center gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-bg-3 text-[13px] text-brand-5">
                  {row.icon}
                </div>
                <div className="w-44 shrink-0 text-[14px] text-fg">{row.source}</div>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-bg-3">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-3 to-brand-5"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
                <div className="w-16 shrink-0 text-right text-[14px] font-medium text-fg">
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

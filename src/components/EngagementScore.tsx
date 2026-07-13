import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const metrics = [
  { label: "Attendance consistency", value: 82 },
  { label: "New visitor follow-up", value: 91 },
  { label: "Group participation", value: 64 },
];

function RingScore({ value }: { value: number }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <svg viewBox="0 0 120 120" className="h-28 w-28 -rotate-90">
      <circle cx="60" cy="60" r={r} stroke="var(--color-bg-3)" strokeWidth="10" fill="none" />
      <circle
        cx="60"
        cy="60"
        r={r}
        stroke="var(--color-brand-5)"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeDasharray={c}
        strokeDashoffset={offset}
      />
    </svg>
  );
}

export default function EngagementScore() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Ministry health"
          title="A single score for how your church is doing."
          subtitle="Selah rolls up attendance, follow-up, and group life into one number your leadership team can rally around."
        />

        <div
          data-reveal
          className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-bg-1 p-6 sm:grid-cols-2 sm:p-8"
        >
          <div className="flex flex-col items-center justify-center gap-4 border-b border-border pb-6 sm:border-b-0 sm:border-r sm:pb-0">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <RingScore value={79} />
              <span className="absolute text-[22px] font-medium text-fg">79</span>
            </div>
            <div className="text-[13px] text-fg-2">Overall health score</div>
          </div>

          <div className="flex flex-col justify-center gap-5 sm:pl-6">
            {metrics.map((m) => (
              <div key={m.label}>
                <div className="flex items-center justify-between text-[13.5px]">
                  <span className="text-fg-1">{m.label}</span>
                  <span className="font-medium text-fg">{m.value}%</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-bg-3">
                  <div
                    className="h-full rounded-full bg-brand-4"
                    style={{ width: `${m.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

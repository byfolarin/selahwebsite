import { Suspense, useEffect, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";
import Globe from "../three/Globe";

const feed = [
  { name: "Amara O.", detail: "checked in · Sunday Service", time: "now" },
  { name: "Josiah T.", detail: "checked in · Youth Group", time: "12s ago" },
  { name: "Grace K.", detail: "joined Prayer Team", time: "41s ago" },
  { name: "David M.", detail: "checked in · Sunday Service", time: "1m ago" },
  { name: "Ruth A.", detail: "gave · Missions fund", time: "2m ago" },
];

export default function LiveSection() {
  const ref = useReveal<HTMLDivElement>();
  const [count, setCount] = useState(1284);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => c + Math.floor(Math.random() * 3));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="live" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Realtime"
          title="See who's checking in, live."
          subtitle="Attendance, check-ins, and messages update the moment they happen — across every campus."
        />

        <div
          data-reveal
          className="mt-10 grid grid-cols-1 gap-4 overflow-hidden rounded-2xl border border-border bg-bg-1 sm:grid-cols-2"
        >
          <div className="relative flex min-h-[320px] items-center justify-center">
            <div className="absolute left-5 top-5 z-10">
              <div className="text-[12px] text-fg-2">Checked in today</div>
              <div className="mt-1 text-[28px] font-medium tabular-nums text-fg">
                {count.toLocaleString()}
              </div>
            </div>
            <div className="h-[320px] w-full">
              <Suspense fallback={null}>
                <Globe />
              </Suspense>
            </div>
          </div>

          <div className="border-t border-border p-5 sm:border-l sm:border-t-0">
            <div className="text-[12px] text-fg-2">Live feed</div>
            <div className="mt-3 flex flex-col gap-1">
              {feed.map((item) => (
                <div
                  key={item.name + item.time}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 hover:bg-bg-2"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-2 text-[12px] font-medium text-brand-5">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[13.5px] text-fg">{item.name}</div>
                    <div className="truncate text-[12px] text-fg-2">{item.detail}</div>
                  </div>
                  <div className="shrink-0 text-[11.5px] text-fg-3">{item.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

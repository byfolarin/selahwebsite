import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReveal } from "../hooks/useReveal";

const tabs = [
  {
    id: "activity",
    label: "All your ministry activity, unified",
    subtitle:
      "Every check-in, gift, and message across your campuses is automatically synced from your connected tools.",
  },
  {
    id: "giving",
    label: "Giving gets tracked automatically",
    subtitle:
      "Members give online or in person, and every gift is reconciled to the right fund automatically.",
  },
  {
    id: "matching",
    label: "Automatic attendance matching",
    subtitle:
      "Check-ins from the kiosk, the app, and manual roll call are matched to member profiles automatically.",
  },
] as const;

type TabId = (typeof tabs)[number]["id"];

const activityRows = [
  { date: "Jul 19", desc: "Sunday Service (9am)", category: "Attendance", amount: "512 in", color: "#0089ff" },
  { date: "Jul 19", desc: "Missions Fund", category: "Giving", amount: "$1,240", color: "#4CAF50" },
  { date: "Jul 18", desc: "Youth Group", category: "Attendance", amount: "96 in", color: "#0089ff" },
  { date: "Jul 17", desc: "Weekly Bulletin", category: "Message", amount: "1,204", color: "#ff9500" },
  { date: "Jul 16", desc: "Wed. Bible Study", category: "Attendance", amount: "214 in", color: "#0089ff" },
];

const sources = ["Kiosk", "App", "Website", "Manual"];

const givingRows = [
  { date: "Jul 19", giver: "Amara Obi", fund: "General", status: "Paid" },
  { date: "Jul 19", giver: "Josiah Turner", fund: "Missions", status: "Recurring" },
  { date: "Jul 18", giver: "Grace Kim", fund: "Building", status: "Paid" },
  { date: "Jul 17", giver: "David Mensah", fund: "General", status: "Pending" },
  { date: "Jul 16", giver: "Ruth Adeyemi", fund: "Missions", status: "Paid" },
];

const statusStyle: Record<string, string> = {
  Paid: "bg-bg-3 text-brand-5",
  Recurring: "bg-bg-3 text-fg-1",
  Pending: "bg-bg-3 text-amber",
};

const matches = [
  { desc: "Check-in · Kiosk · $0 · Jul 19", who: "Amara Obi" },
  { desc: "Check-in · App · $0 · Jul 19", who: "Josiah Turner" },
  { desc: "Guest form · Website · $0 · Jul 18", who: "Grace Kim" },
];

function Sparkbars() {
  const heights = [6, 10, 5, 14, 8, 16, 7, 12, 9, 4];
  return (
    <div className="flex items-end gap-[2px]">
      {heights.map((h, i) => (
        <span key={i} className="w-[3px] bg-fg" style={{ height: h }} />
      ))}
    </div>
  );
}

function ActivityPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-[13.5px] text-fg">Activity</h3>
      </div>
      <div className="flex items-start justify-center gap-10 px-4 pt-6 pb-4">
        {sources.map((s) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-2 text-[10px] text-fg-2">
              {s[0]}
            </div>
            <span className="text-[10px] text-fg-3">{s}</span>
            <span className="h-6 w-px border-l border-dashed border-border-strong" />
          </div>
        ))}
      </div>
      <table className="w-full text-left text-[12.5px]">
        <thead>
          <tr className="border-y border-border text-fg-2">
            <th className="px-4 py-2.5 font-normal">Date</th>
            <th className="px-4 py-2.5 font-normal">Description</th>
            <th className="px-4 py-2.5 font-normal">Category</th>
            <th className="px-4 py-2.5 text-right font-normal">Amount</th>
          </tr>
        </thead>
        <tbody>
          {activityRows.map((r) => (
            <tr key={r.desc} className="border-b border-border last:border-0">
              <td className="px-4 py-2.5 text-fg-2">{r.date}</td>
              <td className="px-4 py-2.5 text-fg">{r.desc}</td>
              <td className="px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: r.color }} />
                  <span className="text-fg-1">{r.category}</span>
                </div>
              </td>
              <td className="px-4 py-2.5 text-right font-medium text-fg">{r.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function GivingPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-[13.5px] text-fg">Giving</h3>
      </div>
      <div className="grid grid-cols-2 gap-px bg-border">
        {[
          { value: "$3,860.00", label: "Received", sub: "this week" },
          { value: "$1,240.00", label: "Missions fund", sub: "this week" },
          { value: "$14,920.00", label: "Year to date", sub: "" },
        ].map((s) => (
          <div key={s.label} className="bg-bg-1 px-4 py-4">
            <div className="text-[15px] font-medium text-fg">{s.value}</div>
            <div className="mt-1 text-[12px] text-fg-1">{s.label}</div>
            {s.sub && <div className="text-[11px] text-fg-3">{s.sub}</div>}
          </div>
        ))}
        <div className="flex items-center justify-between bg-bg-1 px-4 py-4">
          <div>
            <div className="text-[15px] font-medium text-fg">Steady</div>
            <div className="mt-1 text-[12px] text-fg-1">Giving trend</div>
          </div>
          <Sparkbars />
        </div>
      </div>
      <table className="w-full text-left text-[12.5px]">
        <thead>
          <tr className="border-y border-border text-fg-2">
            <th className="px-4 py-2.5 font-normal">Date</th>
            <th className="px-4 py-2.5 font-normal">Giver</th>
            <th className="px-4 py-2.5 font-normal">Fund</th>
            <th className="px-4 py-2.5 text-right font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {givingRows.map((r) => (
            <tr key={r.giver + r.date} className="border-b border-border last:border-0">
              <td className="px-4 py-2.5 text-fg-2">{r.date}</td>
              <td className="px-4 py-2.5 text-fg">{r.giver}</td>
              <td className="px-4 py-2.5 text-fg-1">{r.fund}</td>
              <td className="px-4 py-2.5 text-right">
                <span className={`rounded-full px-2 py-0.5 text-[11px] ${statusStyle[r.status]}`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function MatchingPanel() {
  return (
    <div className="flex h-full flex-col">
      <div className="border-b border-border px-4 py-3">
        <h3 className="text-[13.5px] text-fg">Inbox</h3>
      </div>
      <div className="flex flex-col divide-y divide-border px-4">
        {matches.map((m) => (
          <div key={m.who} className="flex items-center justify-between gap-4 py-4">
            <div className="min-w-0">
              <div className="text-[13px] text-fg">Suggested match</div>
              <div className="mt-0.5 text-[12px] text-fg-2">{m.desc}</div>
              <div className="mt-0.5 text-[12.5px] text-fg-1">{m.who}</div>
            </div>
            <button className="shrink-0 rounded-full border border-border-strong px-3 py-1.5 text-[12px] text-fg-1 transition-colors hover:bg-bg-2">
              Review
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

const panels: Record<TabId, () => React.ReactElement> = {
  activity: ActivityPanel,
  giving: GivingPanel,
  matching: MatchingPanel,
};

export default function HowItWorks() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<TabId>("activity");
  const [displayed, setDisplayed] = useState<TabId>("activity");
  const panelRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = itemRefs.current.findIndex((el) => el === entry.target);
            if (idx !== -1) setActive(tabs[idx].id);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (active === displayed) return;
    const el = panelRef.current;
    if (!el) {
      setDisplayed(active);
      return;
    }
    gsap.to(el, {
      y: 16,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => setDisplayed(active),
    });
  }, [active, displayed]);

  useEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    gsap.fromTo(el, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" });
  }, [displayed]);

  const Panel = panels[displayed];

  return (
    <section id="how-it-works" className="px-6 py-16 sm:py-20 lg:py-24">
      <div ref={ref} className="mx-auto max-w-350">
        <h2
          data-reveal
          className="text-center text-[30px] font-medium tracking-tight text-fg sm:text-[36px]"
        >
          How it works
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal className="flex flex-col gap-24 py-4 lg:gap-40">
            {tabs.map((tab, i) => {
              const isActive = active === tab.id;
              return (
                <div
                  key={tab.id}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  className="flex items-start gap-3"
                >
                  <span
                    className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${
                      isActive ? "bg-fg" : "bg-border-strong"
                    }`}
                  />
                  <div>
                    <h3
                      className={`text-[19px] transition-colors sm:text-[22px] ${
                        isActive ? "text-fg" : "text-fg-3"
                      }`}
                    >
                      {tab.label}
                    </h3>
                    {isActive && (
                      <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-fg-1">
                        {tab.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-1">
              <div ref={panelRef}>
                <Panel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

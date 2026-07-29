import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

function CheckInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="5" width="16" height="14" rx="2" />
    </svg>
  );
}
function FollowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 12h11m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}
function GroupsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5M15 8a3 3 0 110 6M21 20c0-2.5-2-4.5-4-5" strokeLinecap="round" />
    </svg>
  );
}
function GivingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 20s-7-4.35-7-9.5A4.5 4.5 0 0112 6a4.5 4.5 0 017 4.5C19 15.65 12 20 12 20z" strokeLinejoin="round" />
    </svg>
  );
}
function ReportsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 20V10M12 20V4M20 20v-7" strokeLinecap="round" />
    </svg>
  );
}

const categories = [
  {
    id: "checkin",
    label: "Check-in",
    icon: CheckInIcon,
    heading: "Check-in.",
    subtitle: "Get people through the door and known, automatically.",
    feature: "Kiosk & QR",
    description:
      "Members tap in at the kiosk or scan a QR code from their phone. Guest check-ins are matched to member profiles the moment they happen — no roll call, no clipboard.",
    steps: ["Scan", "Match", "Notify"],
  },
  {
    id: "followup",
    label: "Follow-up",
    icon: FollowUpIcon,
    heading: "Follow-up.",
    subtitle: "Nobody falls through the cracks after a first visit.",
    feature: "Visitor routing",
    description:
      "First-time guests are flagged the moment they check in, and follow-ups route straight to the right pastor or volunteer — closed out when the conversation actually happens.",
    steps: ["Flag", "Assign", "Close"],
  },
  {
    id: "groups",
    label: "Groups",
    icon: GroupsIcon,
    heading: "Groups.",
    subtitle: "Every small group, tracked without a spreadsheet.",
    feature: "Rosters & attendance",
    description:
      "Create a group and add members in seconds. Leaders mark attendance from their phone after each meeting, so participation never lives in someone's memory.",
    steps: ["Create", "Meet", "Track"],
  },
  {
    id: "giving",
    label: "Giving",
    icon: GivingIcon,
    heading: "Giving.",
    subtitle: "Every gift lands in the right fund, reconciled on its own.",
    feature: "Online giving",
    description:
      "Members give from the app, the kiosk, or a shared link. Every gift is tagged to a fund and reconciled automatically, so nothing needs re-entering by hand.",
    steps: ["Give", "Tag", "Reconcile"],
  },
  {
    id: "reports",
    label: "Reports",
    icon: ReportsIcon,
    heading: "Reports.",
    subtitle: "The numbers your board actually asks for, ready on demand.",
    feature: "Rollups & export",
    description:
      "Attendance, giving, and follow-up summarized by week or month. Send a clean export straight to your leadership team before the meeting starts.",
    steps: ["Collect", "Summarize", "Share"],
  },
] as const;

function FlowDiagram({ steps }: { steps: readonly string[] }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
      style={{
        backgroundColor: "#4265E7",
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-8">
        {steps.map((step, i) => (
          <div key={step} className="flex flex-col items-center">
            <div className="w-44 rounded-xl bg-[#FAFBF7] px-5 py-3.5 text-center text-[15px] font-medium text-[#14141c] shadow-sm sm:w-52">
              {step}
            </div>
            {i < steps.length - 1 && (
              <svg viewBox="0 0 2 28" className="h-6 w-0.5 text-white/60">
                <line x1="1" y1="0" x2="1" y2="28" stroke="currentColor" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("checkin");
  const current = categories.find((c) => c.id === active)!;

  return (
    <section className="bg-[#FAFBF7] px-6 py-20 sm:py-28">
      <div ref={ref} className="mx-auto max-w-6xl">
        <div data-reveal className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav className="flex gap-2 overflow-x-auto lg:flex-col lg:gap-1 lg:overflow-visible">
            {categories.map((c) => {
              const Icon = c.icon;
              const isActive = active === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className={`flex shrink-0 items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-left text-[14px] font-medium transition-colors lg:w-full ${
                    isActive
                      ? "bg-[#14141c] text-[#FAFBF7]"
                      : "text-[#14141c]/50 hover:bg-[#14141c]/5 hover:text-[#14141c]"
                  }`}
                >
                  <Icon />
                  {c.label}
                </button>
              );
            })}
          </nav>

          <div>
            <h2 className="text-[44px] font-semibold leading-none tracking-tight text-[#14141c] sm:text-[64px]">
              {current.heading}
            </h2>
            <p className="mt-4 max-w-md text-[16px] leading-relaxed text-[#14141c]/60">
              {current.subtitle}
            </p>

            <div className="mt-12 grid grid-cols-1 items-center gap-8 sm:grid-cols-2 sm:gap-12">
              <div>
                <h3 className="text-[22px] font-semibold text-[#14141c]">{current.feature}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#14141c]/60">
                  {current.description}
                </p>
              </div>
              <FlowDiagram steps={current.steps} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

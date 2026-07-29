import { useReveal } from "../hooks/useReveal";

function DocsIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h7l4 4v14H7z" strokeLinejoin="round" />
      <path d="M9 12h6M9 16h6M9 8h2" strokeLinecap="round" />
    </svg>
  );
}
function GuidesIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 5.5A2.5 2.5 0 016.5 3H20v15H6.5A2.5 2.5 0 004 20.5V5.5z" strokeLinejoin="round" />
      <path d="M4 5.5v15" strokeLinecap="round" />
    </svg>
  );
}
function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 013.7-2.2c.9.5 1.3 1.6.8 2.6-.4.8-1.5 1-2 1.9v.7" strokeLinecap="round" />
      <circle cx="12" cy="16.3" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
function OnboardingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 19V8a2 2 0 012-2h9l5 5v8a2 2 0 01-2 2H6a2 2 0 01-2-2z" strokeLinejoin="round" />
      <path d="M9 13l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const resources = [
  {
    icon: DocsIcon,
    title: "Help center",
    description: "Answers for staff and volunteers, searchable by topic.",
  },
  {
    icon: GuidesIcon,
    title: "Setup guides",
    description: "Step-by-step walkthroughs for check-in, giving, and groups.",
  },
  {
    icon: SupportIcon,
    title: "Support",
    description: "Talk to a real person when something doesn't add up.",
  },
  {
    icon: OnboardingIcon,
    title: "Onboarding",
    description: "A dedicated call to get your church fully set up in a week.",
  },
];

export default function ResourcesGrid() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="border-t border-[#14141c]/10 bg-[#FAFBF7] px-6 py-20 sm:py-24">
      <div ref={ref} data-reveal className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((r) => (
          <a
            key={r.title}
            href="#"
            className="group rounded-2xl border border-[#14141c]/10 bg-white p-6 transition-colors hover:border-[#14141c]/25"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4265E7]/10 text-[#4265E7]">
              <r.icon />
            </div>
            <h3 className="mt-4 text-[15px] font-medium text-[#14141c]">{r.title}</h3>
            <p className="mt-1.5 text-[13.5px] leading-relaxed text-[#14141c]/55">
              {r.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

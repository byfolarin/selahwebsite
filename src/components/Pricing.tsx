import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const plans = [
  {
    name: "Starter",
    price: "$29",
    tagline: "For churches up to 250 members",
    features: ["250 members", "Realtime check-in", "Giving attribution", "Email support"],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$79",
    tagline: "For churches up to 1,000 members",
    features: [
      "1,000 members",
      "Everything in Starter",
      "Ministry health score",
      "Multi-campus",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Congregation",
    price: "Custom",
    tagline: "For churches beyond 1,000 members",
    features: ["Unlimited members", "Everything in Growth", "SSO", "Dedicated success manager"],
    highlight: false,
  },
];

export default function Pricing() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="pricing" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Pricing"
          title="Simple pricing that scales with your church."
          subtitle="No per-volunteer fees. No setup cost. Cancel anytime."
        />

        <div data-reveal className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-6 ${
                plan.highlight
                  ? "border-brand-4 bg-bg-1 shadow-[0_0_0_1px_var(--color-brand-4)]"
                  : "border-border bg-bg-1"
              }`}
            >
              {plan.highlight && (
                <div className="mb-3 inline-block rounded-full bg-brand-2 px-2.5 py-1 text-[11px] font-medium text-brand-5">
                  Most popular
                </div>
              )}
              <div className="text-[15px] font-medium text-fg">{plan.name}</div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-[32px] font-medium text-fg">{plan.price}</span>
                {plan.price !== "Custom" && (
                  <span className="text-[13px] text-fg-2">/mo</span>
                )}
              </div>
              <div className="mt-1 text-[13px] text-fg-2">{plan.tagline}</div>

              <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-[13.5px] text-fg-1">
                    <span className="text-brand-5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`mt-6 block rounded-full px-4 py-2.5 text-center text-[13.5px] font-medium transition-colors ${
                  plan.highlight
                    ? "bg-brand-4 text-bg hover:bg-brand-5"
                    : "border border-border-strong text-fg hover:bg-bg-2"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    q: "How long does setup take?",
    a: "Most churches are fully onboarded in under a week, including member import and staff training.",
  },
  {
    q: "Can we import from Planning Center or CCB?",
    a: "Yes — Selah imports members, groups, and attendance history from all major church management platforms.",
  },
  {
    q: "Is member data ever sold or shared?",
    a: "Never. Your congregation's data belongs to your church, full stop.",
  },
  {
    q: "Do volunteers count toward our member limit?",
    a: "No. Volunteer and staff seats are unlimited on every plan.",
  },
];

export default function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-2xl">
        <SectionHeader eyebrow="FAQ" title="Questions, answered." />

        <div data-reveal className="mt-10 flex flex-col divide-y divide-border rounded-2xl border border-border bg-bg-1">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
                >
                  <span className="text-[14.5px] text-fg">{item.q}</span>
                  <span
                    className={`shrink-0 text-fg-2 transition-transform ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 text-[13.5px] leading-relaxed text-fg-1">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

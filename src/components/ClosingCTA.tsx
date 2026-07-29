import { useReveal } from "../hooks/useReveal";

export default function ClosingCTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="cta" className="bg-[#14141c] px-6 py-24 sm:py-28">
      <div ref={ref} data-reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-[36px] font-semibold leading-tight tracking-tight text-[#FAFBF7] sm:text-[52px]">
          Run your church, not the admin.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-[#FAFBF7]/60">
          Check-in, follow-up, groups, and giving — all in one place, ready
          before your next service.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#top"
            className="rounded-full bg-[#4265E7] px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Start your 14-day free trial
          </a>
          <a
            href="#top"
            className="rounded-full bg-white/10 px-6 py-3 text-[14px] font-medium text-[#FAFBF7] transition-colors hover:bg-white/15"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}

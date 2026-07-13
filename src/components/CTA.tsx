import { useReveal } from "../hooks/useReveal";

export default function CTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="cta" className="px-6 py-24">
      <div
        ref={ref}
        data-reveal
        className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl bg-bg-2 px-8 py-16 text-center"
      >
        <h2 className="relative text-[30px] font-medium tracking-tight text-fg sm:text-[38px]">
          Bring your church into one place.
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-[15px] text-fg-1">
          Start your free 14-day trial today. No credit card required.
        </p>
        <div className="relative mt-8 flex items-center justify-center gap-3">
          <a
            href="#top"
            className="rounded-full bg-brand-4 px-6 py-3 text-[14px] font-medium text-bg hover:bg-brand-5 transition-colors"
          >
            Start free trial
          </a>
          <a
            href="#live"
            className="rounded-full border border-border-strong px-6 py-3 text-[14px] font-medium text-fg hover:bg-bg-2 transition-colors"
          >
            Talk to sales
          </a>
        </div>
      </div>
    </section>
  );
}

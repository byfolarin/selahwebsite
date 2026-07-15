import { useReveal } from "../hooks/useReveal";
import LogoStrip from "./LogoStrip";
import GradientBlobs from "./GradientBlobs";
import membersScreenshot from "../assets/screenshots/members.png";

export default function Hero() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="relative pt-40 pb-0">
      <div ref={ref} className="relative mx-auto max-w-4xl px-6 text-center">
        <span
          data-reveal
          className="inline-flex items-center gap-2 rounded-full bg-bg-2 px-3.5 py-1.5 text-[13px] text-fg-1"
        >
          <span className="rounded-full bg-ink px-2 py-0.5 text-[11px] font-medium text-white">
            NEW
          </span>
          Realtime check-in is here
        </span>

        <h1
          data-reveal
          className="mt-6 text-[46px] leading-[1.03] font-semibold text-fg sm:text-[68px]"
          style={{ letterSpacing: "-0.035em" }}
        >
          Ministry-first
          <br />
          church management.
        </h1>

        <p data-reveal className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-fg-1">
          Selah gives your church one place to know every member, track attendance
          and engagement in realtime, and see the moments that matter — before you
          miss them.
        </p>

        <div data-reveal className="mt-9 flex items-center justify-center gap-3">
          <a
            href="#cta"
            className="rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Start 14 day free trial
          </a>
          <a
            href="#live"
            className="rounded-full bg-bg-2 px-6 py-3 text-[14px] font-medium text-fg transition-colors hover:bg-bg-3"
          >
            See demo
          </a>
        </div>
      </div>

      <LogoStrip />

      <div data-reveal className="relative mt-16">
        <div className="relative overflow-hidden py-16 sm:py-20">
          <GradientBlobs />
          <div className="relative z-10 mx-auto max-w-6xl px-6">
            <div className="overflow-hidden border border-border bg-bg-1">
              <img
                src={membersScreenshot}
                alt="Selah members dashboard"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

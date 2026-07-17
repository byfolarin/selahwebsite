import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useReveal } from "../hooks/useReveal";
import GradientBlobs from "./GradientBlobs";
import dashboardScreenshot from "../assets/screenshots/dashboard.png";
import membersScreenshot from "../assets/screenshots/members.png";
import eventsScreenshot from "../assets/screenshots/events.png";
import testimoniesScreenshot from "../assets/screenshots/testimonies.png";
import messagesScreenshot from "../assets/screenshots/messages.png";
import groupsScreenshot from "../assets/screenshots/groups.png";

const tabs = [
  { id: "dashboard", label: "Dashboard", num: "01" },
  { id: "members", label: "Members", num: "02" },
  { id: "events", label: "Events & Services", num: "03" },
  { id: "testimonies", label: "Testimonies", num: "04" },
  { id: "messages", label: "Messages", num: "05" },
  { id: "groups", label: "Groups", num: "06" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const screenshots: Record<TabId, { src: string; alt: string }> = {
  dashboard: { src: dashboardScreenshot, alt: "Selah admin dashboard" },
  members: { src: membersScreenshot, alt: "Selah members dashboard" },
  events: { src: eventsScreenshot, alt: "Selah events and services" },
  testimonies: { src: testimoniesScreenshot, alt: "Selah testimonies" },
  messages: { src: messagesScreenshot, alt: "Selah messages" },
  groups: { src: groupsScreenshot, alt: "Selah groups" },
};

const TAB_DURATION = 5000;

export default function Hero() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<TabId>("members");
  const [displayed, setDisplayed] = useState<TabId>("members");
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const i = tabs.findIndex((t) => t.id === active);
      setActive(tabs[(i + 1) % tabs.length].id);
    }, TAB_DURATION);
    return () => clearTimeout(timer);
  }, [active]);

  useEffect(() => {
    if (active === displayed) return;
    const el = imageRef.current;
    if (!el) {
      setDisplayed(active);
      return;
    }
    gsap.to(el, {
      y: 40,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => setDisplayed(active),
    });
  }, [active, displayed]);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" }
    );
  }, [displayed]);

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

      <div data-reveal className="mx-auto mt-16 max-w-6xl px-6">
        <div className="flex max-w-full items-center justify-center gap-6 overflow-x-auto py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`shrink-0 whitespace-nowrap pb-2 text-[14px] font-medium transition-colors ${
                active === tab.id ? "text-fg" : "text-fg-2 hover:text-fg-1"
              }`}
            >
              <span>
                {tab.label} <span className="text-[11px] text-fg-3">{tab.num}</span>
              </span>
              <span className="relative mt-1.5 block h-[2px] w-full overflow-hidden bg-border">
                {active === tab.id && (
                  <span
                    key={tab.id}
                    className="absolute inset-y-0 left-0 block bg-ink"
                    style={{
                      animation: `tab-fill ${TAB_DURATION}ms linear forwards`,
                    }}
                  />
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div data-reveal className="relative mt-4">
        <div className="relative overflow-hidden pb-24">
          <GradientBlobs />

          <div className="relative z-10 mx-auto max-w-6xl px-6 pt-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-bg-1">
              <div ref={imageRef}>
                <img
                  src={screenshots[displayed].src}
                  alt={screenshots[displayed].alt}
                  className="block w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

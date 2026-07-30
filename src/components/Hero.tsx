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
  { id: "dashboard", label: "Dashboard" },
  { id: "members", label: "Members" },
  { id: "events", label: "Events & Services" },
  { id: "testimonies", label: "Testimonies" },
  { id: "messages", label: "Messages" },
  { id: "groups", label: "Groups" },
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

export default function Hero() {
  const ref = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<TabId>("members");
  const [displayed, setDisplayed] = useState<TabId>("members");
  const imageRef = useRef<HTMLDivElement>(null);

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
    <section id="top" className="hero-open-sans relative bg-[#F8F8F6] pt-32 pb-0">
      <div ref={ref} className="relative mx-auto w-full max-w-4xl px-3 text-center sm:px-6">
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
          className="mt-6 text-[40px] leading-[1.03] font-semibold tracking-[-0.055em] text-fg sm:text-[68px] sm:tracking-[-0.045em]"
        >
          Ministry-first
          <br />
          church management.
        </h1>

        <p data-reveal className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-fg-1">
          Selah gives your church one place to know every member, track
          attendance, and catch what matters — in realtime.
        </p>

        <div data-reveal className="mt-9 flex items-center justify-center gap-3">
          <a
            href="#cta"
            className="rounded-full bg-ink px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Start your 14-day free trial
          </a>
          <a
            href="#live"
            className="rounded-full bg-bg-2 px-6 py-3 text-[14px] font-medium text-fg transition-colors hover:bg-bg-3"
          >
            See demo
          </a>
        </div>
      </div>

      <div data-reveal className="relative mt-16">
        <div className="relative overflow-hidden pt-24 pb-24 sm:pt-28">
          <GradientBlobs />

          <div className="absolute inset-x-0 -top-px z-20 mx-auto flex h-[53px] w-fit max-w-[calc(100vw-64px)] items-start rounded-b-[32px] bg-[#F8F8F6] px-5">
            <div
              aria-hidden
              className="absolute top-0 -left-[31px] h-8 w-8"
              style={{
                background:
                  "radial-gradient(circle at 0% 100%, transparent 32px, #F8F8F6 32.5px)",
              }}
            />
            <div
              aria-hidden
              className="absolute top-0 -right-[31px] h-8 w-8"
              style={{
                background:
                  "radial-gradient(circle at 100% 100%, transparent 32px, #F8F8F6 32.5px)",
              }}
            />

            <div className="flex max-w-full items-center overflow-x-auto sm:justify-center">
              {tabs.map((tab) => {
                const isActive = active === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className={`relative h-9 shrink-0 whitespace-nowrap px-3 text-[14px] font-medium transition-colors ${
                      isActive ? "text-fg" : "text-fg-2 hover:text-fg"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute inset-0 rounded-full bg-black/[0.055]" />
                    )}
                    <span className="relative">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
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

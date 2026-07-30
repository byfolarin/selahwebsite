import { Fragment, useEffect, useRef, useState } from "react";
import dashboard from "../assets/screenshots/dashboard.png";
import events from "../assets/screenshots/events.png";
import groups from "../assets/screenshots/groups.png";
import members from "../assets/screenshots/members.png";
import messages from "../assets/screenshots/messages.png";
import testimonies from "../assets/screenshots/testimonies.png";
import communityBanner from "../assets/church-community-banner.png";

const categories = [
  {
    id: "know",
    label: "Know",
    heading: "Know.",
    intro: "One clear, living picture of every person in your church.",
    features: [
      {
        title: "People.",
        body: "Bring members, families, guests, and their history into one place. Find the person you need without hunting through lists.",
        image: members,
        alt: "Selah member directory",
      },
      {
        title: "A church-wide view.",
        body: "See what is happening across attendance, care, groups, and engagement the moment you sign in.",
        image: dashboard,
        alt: "Selah church dashboard",
      },
    ],
  },
  {
    id: "gather",
    label: "Gather",
    heading: "Gather.",
    intro: "Plan every service and know who showed up.",
    features: [
      {
        title: "Events & services.",
        body: "Create services, meetings, and special events in seconds. Keep schedules and attendance connected from the start.",
        image: events,
        alt: "Selah events and services",
      },
    ],
  },
  {
    id: "connect",
    label: "Connect",
    heading: "Connect.",
    intro: "Help people find their place and stay part of the conversation.",
    features: [
      {
        title: "Groups.",
        body: "Give every community a home. Leaders can manage people, meetings, and attendance without another spreadsheet.",
        image: groups,
        alt: "Selah groups",
      },
      {
        title: "Messages.",
        body: "Reach the whole church or the exact people who need to hear from you, from the same place you manage them.",
        image: messages,
        alt: "Selah messages",
      },
    ],
  },
  {
    id: "care",
    label: "Care",
    heading: "Care.",
    intro: "Make every story visible, so care can happen at the right time.",
    features: [
      {
        title: "Testimonies.",
        body: "Capture what God is doing across your church. Review, organise, and share the stories that would otherwise be lost.",
        image: testimonies,
        alt: "Selah testimonies",
      },
    ],
  },
  {
    id: "grow",
    label: "Grow",
    heading: "Grow.",
    intro: "Turn everyday ministry activity into a clearer next step.",
    features: [
      {
        title: "Insights.",
        body: "See the patterns behind attendance and engagement. Know where people are thriving and where your team should pay attention.",
        image: dashboard,
        alt: "Selah ministry insights",
      },
    ],
  },
] as const;

function CategoryIcon({ id }: { id: (typeof categories)[number]["id"] }) {
  const paths = {
    know: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 19c.5-4 2.7-6 6.5-6s6 2 6.5 6" />
      </>
    ),
    gather: (
      <>
        <rect x="4" y="5.5" width="16" height="14" rx="1.5" />
        <path d="M8 3.5v4M16 3.5v4M4 10h16M8 14h3M13 14h3" />
      </>
    ),
    connect: (
      <>
        <circle cx="8" cy="9" r="3" />
        <circle cx="17" cy="8" r="2.5" />
        <path d="M2.5 19c.4-3.6 2.2-5.5 5.5-5.5s5.1 1.9 5.5 5.5M14 13c3.8 0 5.8 2 6.2 5" />
      </>
    ),
    care: (
      <path d="M12 20s-7-4.2-7-9.3A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 7 3.7C19 15.8 12 20 12 20Z" />
    ),
    grow: (
      <>
        <path d="M5 19V13M12 19V9M19 19V4" />
        <path d="m4 8 5-3 4 1 6-4" />
      </>
    ),
  } as const;

  return (
    <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {paths[id]}
    </svg>
  );
}

export default function FeatureShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState<(typeof categories)[number]["id"]>("know");

  useEffect(() => {
    const nodes = categories
      .map(({ id }) => document.getElementById(`feature-${id}`))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id.replace("feature-", "") as typeof active);
      },
      { rootMargin: "-28% 0px -52% 0px", threshold: [0, 0.2, 0.5] }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f8f8f6] pl-5 text-[#171712] sm:pl-8">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(180px,1fr)_minmax(0,3fr)] lg:gap-0">
          <aside className="relative pt-20 sm:pt-28 lg:py-0">
            <nav className="sticky top-0 z-30 flex overflow-x-auto border-b border-black/15 pb-4 lg:h-screen lg:items-center lg:overflow-visible lg:border-0 lg:pb-0 lg:pl-[clamp(1rem,5vw,5rem)]">
              <div className="flex gap-3 lg:flex-col lg:gap-1.5 lg:rounded-xl lg:border lg:border-black/10 lg:bg-[#f8f8f6]/90 lg:p-2 lg:shadow-[0_12px_32px_rgba(23,23,18,0.08)] lg:backdrop-blur-md">
                {categories.map((c) => {
                  const isActive = active === c.id;
                  return (
                    <a
                      key={c.id}
                      href={`#feature-${c.id}`}
                      title={c.label}
                      aria-label={c.label}
                      className={`group relative flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-[14px] transition-colors lg:h-9 lg:w-9 lg:justify-center lg:p-0 ${
                        isActive
                          ? "bg-[#171712] text-white"
                          : "bg-black/[0.045] text-black/45 hover:bg-black/[0.08] hover:text-black"
                      }`}
                    >
                      <CategoryIcon id={c.id} />
                      <span className="lg:hidden">{c.label}</span>
                      <span className="pointer-events-none absolute left-12 hidden whitespace-nowrap rounded bg-[#171712] px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100 lg:block">
                        {c.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </aside>

          <div className="min-w-0 bg-[#CCF88E] pb-20 sm:pb-28 lg:border-l lg:border-black/15 lg:py-28 lg:pl-12">
            {categories.map((category, categoryIndex) => (
              <Fragment key={category.id}>
                {categoryIndex === 2 && (
                  <div className="feature-image-break mb-28 overflow-hidden sm:mb-40">
                    <img
                      src={communityBanner}
                      alt="Church community connecting after a service"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <article
                  id={`feature-${category.id}`}
                  className={`${categoryIndex ? "border-t border-black/15 pt-24 sm:pt-32 lg:-ml-12 lg:pl-12" : ""} mb-28 scroll-mt-28 last:mb-0 sm:mb-40`}
                >
                <h2 className="text-[42px] font-medium leading-[0.98] tracking-[-0.04em] sm:text-[60px] lg:text-[72px]">
                  {category.heading}
                </h2>
                <p className="mt-5 max-w-2xl text-[17px] leading-[1.5] tracking-[-0.01em] text-black/58 sm:text-[19px]">
                  {category.intro}
                </p>

                <div className="mt-16 space-y-24 sm:mt-24 sm:space-y-32">
                  {category.features.map((feature) => (
                    <section key={feature.title}>
                      <div className="mb-8 grid gap-4 border-t border-black/20 pt-5 sm:grid-cols-2 sm:gap-10 lg:-ml-12 lg:pl-12">
                        <h3 className="text-[21px] font-medium tracking-[-0.02em] sm:text-[22px]">
                          {feature.title}
                        </h3>
                        <p className="max-w-xl text-[15px] leading-[1.6] text-black/55">
                          {feature.body}
                        </p>
                      </div>
                      <div className="product-grid-panel overflow-hidden p-4 sm:p-8 lg:px-10 lg:py-12">
                        <div className="ml-auto w-[94%] overflow-hidden rounded-[6px] border border-black/10 bg-white shadow-[0_28px_80px_rgba(20,19,55,0.24)] sm:w-[88%]">
                          <img src={feature.image} alt={feature.alt} className="block h-auto w-full" />
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
                </article>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

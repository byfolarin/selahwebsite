import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";

const items = [
  "Member Directory",
  "Attendance Tracking",
  "Event Scheduling",
  "Small Groups",
  "Broadcast Messaging",
  "Testimony Review",
  "Volunteer Scheduling",
  "Check-in Kiosk",
];

const ITEM_HEIGHT = 84;
const VISIBLE_HEIGHT = ITEM_HEIGHT * 5;

function FadingList() {
  const [focused, setFocused] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timer.current = setInterval(() => {
      setFocused((i) => (i + 1) % items.length);
    }, 1700);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  const offset = VISIBLE_HEIGHT / 2 - ITEM_HEIGHT / 2 - focused * ITEM_HEIGHT;

  return (
    <div
      className="relative overflow-hidden"
      style={{
        height: VISIBLE_HEIGHT,
        maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
      }}
    >
      <div
        className="transition-transform duration-700 ease-in-out"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {items.map((item, i) => {
          const distance = Math.abs(i - focused);
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.35 : distance === 2 ? 0.12 : 0.04;
          return (
            <div
              key={item}
              className="flex items-center whitespace-nowrap font-sans text-[52px] transition-all duration-700"
              style={{
                height: ITEM_HEIGHT,
                opacity,
                color: distance === 0 ? "var(--color-ink)" : "var(--color-fg-2)",
                fontWeight: distance === 0 ? 500 : 400,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function PlatformOverview() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-24">
      <div ref={ref} data-reveal className="mx-auto flex max-w-5xl justify-center">
        <FadingList />
      </div>
    </section>
  );
}

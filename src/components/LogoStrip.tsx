import { useReveal } from "../hooks/useReveal";

const churches = [
  "Grace Fellowship",
  "New Life Chapel",
  "Cornerstone Church",
  "The Gathering",
  "Faith Community",
  "Harbor City Church",
];

export default function LogoStrip() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-16">
      <div ref={ref} className="mx-auto max-w-5xl">
        <p data-reveal className="text-center text-[13px] text-fg-2">
          Trusted by growing churches everywhere
        </p>
        <div
          data-reveal
          className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {churches.map((name) => (
            <span
              key={name}
              className="text-[16px] font-medium tracking-tight text-fg-2/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

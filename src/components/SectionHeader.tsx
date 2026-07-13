export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  const badgeAlign = align === "center" ? "mx-auto" : "";

  return (
    <div data-reveal className={`max-w-xl ${alignClass}`}>
      <span
        className={`inline-block rounded-full bg-bg-2 px-3 py-1 text-[12.5px] text-fg-1 ${badgeAlign}`}
      >
        {eyebrow}
      </span>
      <h2 className="mt-4 text-[30px] font-medium tracking-tight text-fg sm:text-[36px]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[15.5px] leading-relaxed text-fg-1">{subtitle}</p>
      )}
    </div>
  );
}

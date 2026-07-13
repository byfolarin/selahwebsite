import { useReveal } from "../hooks/useReveal";

const items = [
  {
    title: "Private by design",
    body: "Member data stays with your church. No selling data, no ad networks, ever.",
  },
  {
    title: "Works with your stack",
    body: "Sync with Planning Center, Mailchimp, QuickBooks, and 20+ other tools.",
  },
  {
    title: "Role-based access",
    body: "Give staff and volunteers exactly the access they need — nothing more.",
  },
];

export default function PrivacyIntegrations() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="px-6 py-24">
      <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            data-reveal
            className="rounded-2xl border border-border bg-bg-1 p-6"
          >
            <div className="text-[15px] font-medium text-fg">{item.title}</div>
            <p className="mt-2 text-[13.5px] leading-relaxed text-fg-1">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

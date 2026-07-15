import { useReveal } from "../hooks/useReveal";
import SectionHeader from "./SectionHeader";

const rows = [
  { feature: "Realtime check-in", selah: true, a: false, b: true, c: false },
  { feature: "Group management", selah: true, a: true, b: false, c: false },
  { feature: "Ministry health score", selah: true, a: false, b: false, c: false },
  { feature: "Unlimited volunteers", selah: true, a: false, b: true, c: true },
  { feature: "No setup fees", selah: true, a: false, b: false, c: true },
];

function Check({ on }: { on: boolean }) {
  return on ? (
    <span className="text-brand-5">✓</span>
  ) : (
    <span className="text-fg-3">–</span>
  );
}

export default function Comparison() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="compare" className="px-6 py-24">
      <div ref={ref} className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Comparison" title="How Selah stacks up." />

        <div
          data-reveal
          className="mt-10 overflow-hidden rounded-2xl border border-border bg-bg-1"
        >
          <table className="w-full text-left text-[13.5px]">
            <thead>
              <tr className="border-b border-border text-fg-2">
                <th className="px-5 py-4 font-normal">Feature</th>
                <th className="px-5 py-4 text-center font-medium text-brand-5">Selah</th>
                <th className="px-5 py-4 text-center font-normal">Planning Center</th>
                <th className="px-5 py-4 text-center font-normal">CCB</th>
                <th className="px-5 py-4 text-center font-normal">Spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-border last:border-0">
                  <td className="px-5 py-3.5 text-fg-1">{row.feature}</td>
                  <td className="px-5 py-3.5 text-center">
                    <Check on={row.selah} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check on={row.a} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check on={row.b} />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check on={row.c} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

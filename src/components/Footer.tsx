const columns = [
  {
    title: "Product",
    links: ["Overview", "Live check-in", "Messages", "Groups", "Pricing"],
  },
  {
    title: "Features",
    links: ["Member profiles", "Ministry health score", "Attendance", "Integrations"],
  },
  {
    title: "Comparison",
    links: ["vs Planning Center", "vs CCB", "vs Spreadsheets"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-[#284C35] px-6 pt-16 text-[#CCF88E]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[16px] font-medium">selah.</span>
            <p className="mt-3 text-[13px] leading-relaxed text-[#CCF88E]/65">
              Ministry-first church management.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[12.5px] font-medium text-[#CCF88E]/55">{col.title}</div>
              <ul className="mt-3 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-[#CCF88E]/85 transition-colors hover:text-[#CCF88E]">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#CCF88E]/25 pt-6 text-[12.5px] text-[#CCF88E]/60 sm:flex-row">
          <span>© {new Date().getFullYear()} Selah. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="transition-colors hover:text-[#CCF88E]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[#CCF88E]">
              Terms
            </a>
          </div>
        </div>

        <div
          aria-label="Selah"
          className="mt-10 select-none text-center text-[34vw] font-semibold leading-[0.68] tracking-[-0.085em] text-[#CCF88E] sm:text-[28vw] lg:text-[400px]"
        >
          Selah
        </div>
      </div>
    </footer>
  );
}

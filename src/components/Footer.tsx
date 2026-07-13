const columns = [
  {
    title: "Product",
    links: ["Overview", "Live check-in", "Giving", "Groups", "Pricing"],
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
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <span className="text-[16px] font-medium text-fg">selah.</span>
            <p className="mt-3 text-[13px] leading-relaxed text-fg-2">
              Ministry-first church management.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="text-[12.5px] font-medium text-fg-2">{col.title}</div>
              <ul className="mt-3 flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-[13px] text-fg-1 hover:text-fg">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-[12.5px] text-fg-3 sm:flex-row">
          <span>© {new Date().getFullYear()} Selah. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-fg-1">
              Privacy
            </a>
            <a href="#" className="hover:text-fg-1">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

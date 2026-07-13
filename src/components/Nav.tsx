const links = [
  { label: "Features", href: "#features" },
  { label: "Live", href: "#live" },
  { label: "Compare", href: "#compare" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-[17px] font-semibold tracking-tight text-fg">
          selah.
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-fg-1 transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href="#login"
            className="hidden text-[14px] text-fg-1 transition-colors hover:text-fg sm:block"
          >
            Log in
          </a>
          <a
            href="#cta"
            className="rounded-full bg-ink px-4 py-2 text-[13.5px] font-medium text-white transition-opacity hover:opacity-85"
          >
            Register
          </a>
        </div>
      </div>
    </header>
  );
}

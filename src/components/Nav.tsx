const links = [
  { label: "Features", href: "#features", dropdown: true },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#faq", dropdown: true },
];

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="text-[17px] font-semibold tracking-tight text-fg">
          selah.
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex items-center gap-1 text-[14px] text-fg-2 transition-colors hover:text-fg"
            >
              {l.label}
              {l.dropdown && <Chevron />}
            </a>
          ))}
        </nav>

        <a href="#login" className="text-[14px] font-medium text-fg transition-colors hover:text-fg-1">
          Sign in
        </a>
      </div>
    </header>
  );
}

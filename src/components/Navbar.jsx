import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Minting", href: "#minting" },
    { label: "Road Map", href: "#roadmap" },
    { label: "Faq", href: "#faq" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header className="pt-6.5">
      <nav className="relative flex justify-between section-container" aria-label="Main Navigation">
        <div className="logo text-white font-semibold text-xl tracking-wide">Logo</div>
        <div className="links">
          <ul className="text-white flex gap-5 lg:gap-12 xl:gap-20 text-lg leading-150 max-md:hidden">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="transition-colors duration-200 hover:text-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="hidden max-md:flex items-center justify-center w-11 h-11 rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-2xl leading-none" aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
      <div
        id="mobile-navigation"
        className={`fixed right-0 top-0 z-40 flex h-dvh w-1/2 flex-col bg-[#031227] px-4 pt-24 shadow-2xl transition-transform duration-300 ease-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full text-3xl text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
          tabIndex={menuOpen ? 0 : -1}
        >
          <span aria-hidden="true">×</span>
        </button>
        <ul className="flex flex-col gap-7 text-lg text-white">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="transition-colors duration-200 hover:text-blue"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

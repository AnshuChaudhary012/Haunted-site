
function Navbar() {
  const navLinks = [
    { label: "Minting", href: "#minting" },
    { label: "Road Map", href: "#roadmap" },
    { label: "Faq", href: "#faq" },
    { label: "Team", href: "#team" },
  ];

  return (
    <header className="pt-6">
      <nav className="relative flex justify-between section-container">
        <div className="text-white font-semibold text-xl">
          Logo
        </div>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-lg text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-blue" >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white text-2xl"
          onClick={() => {
            const menu = document.getElementById("mobile-menu");
            menu.classList.toggle("hidden");
          }}
        >
          ☰
        </button>
      </nav>

      {/* Mobile links */}
      <ul
        id="mobile-menu"
        className="hidden md:hidden flex-col gap-5 bg-dark-blue p-6 text-white"
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Navbar ;

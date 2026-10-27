import { useEffect, useState } from "react";
import { NavbarIcon } from "../common/Icons";
import { NAV_LINKS } from "../utils/helper";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (!isMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function handleKeyDown(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="pt-6.5">
      <nav data-aos="fade-down" className="relative flex justify-between section-container">
        <a href="/" className="text-white font-semibold text-[21.74px] leading-150 cursor-pointer">
          Logo
        </a>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-20 text-lg text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline block font-medium transition-colors hover:text-blue"
                style={{ lineHeight: "27px", height: "27px" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white text-2xl cursor-pointer"
          aria-label="Open navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(true)}
        >
          <NavbarIcon name="menu" />
        </button>
      </nav>
      {isMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu "
          tabIndex={-1}
          className="fixed inset-0 z-40 bg-black/60 md:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 flex w-[80vw] max-w-100 flex-col bg-dark-blue p-6 text-white shadow-2xl transition-transform duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
      >
        <div className="mb-10 flex items-center justify-between">
          <a
            href="/"
            className="text-[21.74px] leading-150 font-semibold cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            
          </a>
          <button
            type="button"
            className="text-white cursor-pointer"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <NavbarIcon name="close" />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          <ul className="flex flex-col gap-5 items-center mt-22">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  className="link-underline block font-medium"
                  style={{ lineHeight: "27px", height: "27px" }}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;

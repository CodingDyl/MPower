import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

const primaryLinks = navLinks.filter((l) =>
  ["About", "Accreditation", "Verification"].includes(l.title)
);
const secondaryLinks = navLinks.filter((l) =>
  ["Get Assistance", "Contact Us"].includes(l.title)
);

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  const openQuote = () => {
    setActive("Get a quote");
    setToggle(false);
    window.dispatchEvent(new Event("mpower:open-quote"));
  };

  const linkMuted = scrolled
    ? "text-tertiary/80 hover:text-tertiary"
    : "text-white/80 hover:text-white";
  const linkActive = scrolled ? "text-tertiary" : "text-white";

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full fixed top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-tertiary/10 bg-white/90 py-3 shadow-[0_1px_24px_rgba(51,67,103,0.10)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent py-4 backdrop-blur-[2px]"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4">
          {/* Left: logo + primary pill */}
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <Link
              to="/"
              className="shrink-0"
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                src={logo}
                alt="mPowerRatings logo"
                className={`h-9 object-contain transition sm:h-10 ${
                  scrolled ? "" : "brightness-0 invert"
                }`}
              />
            </Link>

            <ul
              className={`list-none hidden items-center gap-1 rounded-full px-1.5 py-1 md:flex ${
                scrolled
                  ? "border border-tertiary/10 bg-tertiary/[0.06]"
                  : "border border-white/15 bg-white/10 backdrop-blur-md"
              }`}
            >
              {primaryLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`${link.id}`}
                    onClick={() => setActive(link.title)}
                    className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide transition-colors duration-200 lg:px-4 lg:text-[14px] ${
                      active === link.title ? linkActive : linkMuted
                    }`}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: secondary + CTA */}
          <div className="hidden items-center gap-5 md:flex lg:gap-6">
            {secondaryLinks.map((link) => (
              <a
                key={link.id}
                href={`${link.id}`}
                onClick={() => setActive(link.title)}
                className={`text-[13px] font-medium tracking-wide transition-colors duration-200 lg:text-[14px] ${
                  active === link.title ? linkActive : linkMuted
                }`}
              >
                {link.title === "Contact Us" ? "Contact" : link.title}
              </a>
            ))}
            <button
              type="button"
              onClick={openQuote}
              className={`inline-flex items-center gap-1.5 rounded-full px-5 py-2 text-[13px] font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 lg:text-[14px] ${
                scrolled
                  ? "bg-tertiary text-white hover:bg-brand-deep focus-visible:ring-tertiary/60"
                  : "bg-white text-brand-deep shadow-md shadow-black/20 hover:-translate-y-0.5 hover:bg-[#f4f7ff] focus-visible:ring-white focus-visible:ring-offset-black/40"
              }`}
            >
              Get a quote
              <span aria-hidden className="text-[15px] leading-none">
                →
              </span>
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex flex-1 justify-end md:hidden">
            <button
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              className={`rounded-md p-1.5 focus-visible:outline-none focus-visible:ring-2 ${
                scrolled
                  ? "text-tertiary focus-visible:ring-tertiary/60"
                  : "text-white focus-visible:ring-white/70"
              }`}
              onClick={() => setToggle(!toggle)}
            >
              <MenuToggleIcon open={toggle} className="h-8 w-8" duration={450} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`${
          toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } fixed inset-0 z-30 bg-[rgba(26,45,82,0.97)] backdrop-blur-md transition-opacity duration-300 md:hidden`}
      >
        <div className="relative flex h-full w-full items-center justify-center px-8">
          <button
            aria-label="Close menu"
            className="absolute right-6 top-6 rounded-md p-1.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={() => setToggle(false)}
          >
            <MenuToggleIcon open className="h-9 w-9" duration={450} />
          </button>
          <ul className="flex list-none flex-col items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`cursor-pointer font-lexend text-[24px] font-semibold tracking-wide transition-colors duration-200 ${
                  active === link.title ? "text-[#8fa8da]" : "text-white hover:text-[#8fa8da]"
                }`}
                onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                }}
              >
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="cursor-pointer rounded-full bg-white px-8 py-3 font-lexend text-[16px] font-semibold text-brand-deep transition-colors duration-200 hover:bg-[#f4f7ff]"
                onClick={openQuote}
              >
                Get a quote →
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

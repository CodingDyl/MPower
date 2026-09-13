import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

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

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_24px_rgba(51,67,103,0.10)] border-b border-tertiary/10"
            : "bg-white-100"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="mPowerRatings logo" className="h-10 object-contain" />
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-7 items-center">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="relative"
                onClick={() => setActive(link.title)}
              >
                <a
                  href={`${link.id}`}
                  className={`text-[15px] font-medium cursor-pointer transition-colors duration-200 pb-1 ${
                    active === link.title
                      ? "text-tertiary"
                      : "text-primary hover:text-tertiary"
                  }`}
                >
                  {link.title}
                </a>
                {active === link.title && (
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-tertiary rounded-full" />
                )}
              </li>
            ))}
            <li>
              <button
                type="button"
                className="bg-tertiary text-white text-[14px] font-semibold px-5 py-2 rounded-full hover:bg-brand-deep transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary/60 focus-visible:ring-offset-2"
                onClick={() => {
                  setActive("Get a quote");
                  window.dispatchEvent(new Event("mpower:open-quote"));
                }}
              >
                Get a quote
              </button>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <button
              aria-label={toggle ? "Close menu" : "Open menu"}
              aria-expanded={toggle}
              className="rounded-md p-1.5 text-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary/60"
              onClick={() => setToggle(!toggle)}
            >
              <MenuToggleIcon open={toggle} className="h-8 w-8" duration={450} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={`${
          toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } sm:hidden fixed inset-0 z-30 bg-[rgba(26,45,82,0.97)] backdrop-blur-md transition-opacity duration-300`}
      >
        <div className="relative flex h-full w-full items-center justify-center px-8">
          <button
            aria-label="Close menu"
            className="absolute top-6 right-6 rounded-md p-1.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            onClick={() => setToggle(false)}
          >
            <MenuToggleIcon open className="h-9 w-9" duration={450} />
          </button>
          <ul className="list-none flex flex-col items-center gap-9">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-lexend text-[26px] font-semibold tracking-wide cursor-pointer transition-colors duration-200 ${
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
                className="font-lexend text-[16px] font-semibold bg-white text-brand-deep px-8 py-3 rounded-full hover:bg-[#f4f7ff] transition-colors duration-200 cursor-pointer"
                onClick={() => {
                  setToggle(false);
                  setActive("Get a quote");
                  window.dispatchEvent(new Event("mpower:open-quote"));
                }}
              >
                Get a quote
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;

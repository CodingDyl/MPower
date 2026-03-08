import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

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
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-40 bg-white-100`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={logo} alt="logo" className="h-10 object-contain" />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-tertiary" : "text-primary"} hover:text-tertiary text-[18px] font-medium cursor-pointer`} onClick={() => setActive(link.title)}>
              <a href={`${link.id}`}>
                {link.title}
              </a>
            </li>
          ))}
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

    <div
      className={`${toggle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} sm:hidden fixed inset-0 z-30 bg-[rgba(4,10,24,0.84)] backdrop-blur-md transition-opacity duration-300`}
    >
      <div className="relative flex h-full w-full items-center justify-center px-8">
        <button
          aria-label="Close menu"
          className="absolute top-6 right-6 rounded-md p-1.5 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          onClick={() => setToggle(false)}
        >
          <MenuToggleIcon open className="h-9 w-9" duration={450} />
        </button>
        <ul className="list-none flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-[#9cb3e2]" : "text-white"} text-[28px] font-semibold tracking-wide`}
                  onClick={() => {
                    setToggle(false);
                    setActive(link.title);
                  }}
                >
                  <a href={`${link.id}`}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
      </div>
    </div>
    </>
  )
}

export default Navbar

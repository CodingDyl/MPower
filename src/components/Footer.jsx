import React from 'react';
import { logo } from '../assets';
import { footerLinks } from '../constants';
import { IconBrandTwitter, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-white-100 border-t border-tertiary/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-16 pt-16 pb-10">

        {/* Top section */}
        <div className="flex flex-col sm:flex-row justify-between gap-10">

          {/* Brand column */}
          <div className="shrink-0 sm:max-w-[200px]">
            <img src={logo} alt="mPowerRatings" className="h-10 object-contain" />
            <p className="mt-4 text-[14px] text-primary/70 leading-relaxed font-source">
              Ensuring change through empowerment.
            </p>
            <p className="mt-2 text-[12px] text-tertiary/60 font-semibold font-source tracking-wide uppercase">
              SANAS Accredited · BVA No. 204
            </p>
          </div>

          {/* Link groups — 2-col on mobile, flex row on sm+ */}
          <div className="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-12">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h4 className="font-lexend text-[11px] font-bold text-tertiary uppercase tracking-[0.14em] mb-3">
                  {group.title}
                </h4>
                <ul className="space-y-2">
                  {group.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.link}
                        target={link.link.startsWith('http') ? '_blank' : undefined}
                        rel={link.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="font-source text-[13px] text-primary/70 hover:text-tertiary transition-colors duration-200 cursor-pointer"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-tertiary/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-source text-[13px] text-primary/50">
            © {new Date().getFullYear()} mPowerRatings (Pty) Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <a
              href="#"
              aria-label="Twitter / X"
              className="p-2 rounded-lg text-primary/45 hover:text-tertiary hover:bg-tertiary/8 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary/40"
            >
              <IconBrandTwitter size={18} stroke={1.5} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="p-2 rounded-lg text-primary/45 hover:text-tertiary hover:bg-tertiary/8 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary/40"
            >
              <IconBrandLinkedin size={18} stroke={1.5} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded-lg text-primary/45 hover:text-tertiary hover:bg-tertiary/8 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary/40"
            >
              <IconBrandInstagram size={18} stroke={1.5} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

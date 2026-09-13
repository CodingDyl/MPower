import React from "react";
import { iss, pwc, rhb, spar, mpact, deloitte } from "../../assets";

const logos = [
  { src: mpact, alt: "Mpact" },
  { src: deloitte, alt: "Deloitte" },
  { src: rhb, alt: "Royal Bafokeng Holdings" },
  { src: pwc, alt: "PwC" },
  { src: spar, alt: "SPAR" },
  { src: iss, alt: "ISS" },
];

/** Seamless infinite logo marquee for the hero — always moving, no hover pause. */
const Customers = () => {
  const track = [...logos, ...logos];

  return (
    <div className="client-marquee" aria-label="Trusted by leading organisations">
      <p className="mb-4 text-center font-source text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 sm:text-[12px]">
        Trusted by leading organisations
      </p>
      <div className="client-marquee__viewport">
        <div className="client-marquee__track">
          {track.map((logo, i) => (
            <div className="client-marquee__item" key={`${logo.alt}-${i}`}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import QuoteModal from "./modals/QuoteModal.jsx";
import Customers from "./slider/Customers.jsx";

const trustItems = [
  {
    label: "SANAS accredited",
    detail: "BVA 204 verification agency",
  },
  {
    label: "Level 2 · 51% Black Female Owned",
    detail: "Established 2004",
  },
  {
    label: "Sector codes covered",
    detail: "DTI, ICT, Construction, Legal & more",
  },
];

const Home = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpenQuote = () => setOpen(true);
    window.addEventListener("mpower:open-quote", onOpenQuote);
    return () => window.removeEventListener("mpower:open-quote", onOpenQuote);
  }, []);

  const openQuote = () => setOpen(true);

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden">
      {/* Atmospheric dark overlay: keeps brand photo, raises contrast like refs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(200,149,47,0.22)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/35 sm:from-black/80 sm:via-black/55 sm:to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col">
        {/* Main hero copy — fills space above the pinned ticker */}
        <div className="mx-auto flex w-full max-w-[1280px] flex-1 flex-col justify-center px-5 pb-6 pt-28 sm:px-8 sm:pt-32 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="max-w-2xl text-left"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#e8eefc] backdrop-blur-sm sm:text-[12px]">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold"
                aria-hidden
              />
              SANAS · BVA 204 · HSA-ready process support
            </p>

            <h1 className="mt-5 font-lexend text-[2.15rem] font-bold leading-[1.12] tracking-tight text-white xs:text-[2.5rem] sm:text-[3.25rem] sm:leading-[1.08] lg:text-[4rem]">
              Get B-BBEE verified
              <span className="block text-[#c8d6f0]">
                with a team you can call.
              </span>
            </h1>

            <p className="mt-4 max-w-xl font-source text-[15px] leading-relaxed text-[#d5ddf0]/90 sm:text-[17px] sm:leading-[1.7]">
              Credible, independent B-BBEE verification and advisory for South
              African businesses. Tell us your sector, and we&apos;ll scope your
              verification and get a human back to you.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={openQuote}
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-7 text-[15px] font-semibold text-brand-deep shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#f4f7ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/40 sm:w-auto"
              >
                Get a quote
              </button>
              <a
                href="#verification"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/35 bg-white/0 px-7 text-[15px] font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 sm:w-auto"
              >
                See what we verify
              </a>
            </div>

            <p className="mt-4 text-[13px] text-[#d5ddf0]/70">
              Prefer to talk?{" "}
              <a
                href="tel:0118800060"
                className="font-semibold text-white underline decoration-white/35 underline-offset-2 hover:decoration-white"
              >
                011-880-0060
              </a>
              {" · "}
              <a
                href="mailto:info@mpowerratings.co.za"
                className="font-semibold text-white underline decoration-white/35 underline-offset-2 hover:decoration-white"
              >
                info@mpowerratings.co.za
              </a>
            </p>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="mt-10 grid grid-cols-1 gap-3 border-t border-white/15 pt-6 sm:mt-12 sm:grid-cols-3 sm:gap-6"
          >
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-sm sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0"
              >
                <p className="font-lexend text-[14px] font-semibold text-white sm:text-[15px]">
                  {item.label}
                </p>
                <p className="mt-1 font-source text-[13px] leading-snug text-[#d5ddf0]/75">
                  {item.detail}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Logo marquee pinned to bottom of the full-viewport hero */}
        <div className="mt-auto w-full shrink-0 border-t border-white/10 bg-black/25 pb-5 pt-4 backdrop-blur-[2px] sm:pb-6 sm:pt-5">
          <Customers />
        </div>
      </div>

      <QuoteModal opened={open} close={() => setOpen(false)} />
    </section>
  );
};

export default Home;

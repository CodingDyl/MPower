import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles.js";
import { motion, AnimatePresence } from "framer-motion";
import { textVariant } from "../utils/motion.js";

const steps = [
  {
    title: "Admin",
    items: [
      "Onboarding and signing of relevant documents",
      "50% deposit payment",
      "Verification Analyst and Technical Signatory appointment",
    ],
  },
  {
    title: "Pre-Verification",
    items: [
      "Verification Analyst Introduction",
      "Pre-Verification meeting",
      "Verification Documentation checklist",
    ],
  },
  {
    title: "Verification Commencement",
    items: [
      "Data schedules sent to client",
      "Processing/Capturing data received from client",
      "Sample selection and sending sample to client",
    ],
  },
  {
    title: "Onsite Verification Preparation",
    items: [
      "Receiving and processing of sampled evidence",
      "Sending out Verification Plan",
    ],
  },
  {
    title: "Onsite Verification",
    items: [
      "Onsite",
      "Verification Commencement",
      "Opening Meeting",
      "Interviews",
      "Any known differences discussed",
      "Preliminary score discussion",
      "Signing off on any outstanding documentation",
    ],
  },
  {
    title: "Review Process",
    items: [
      "File prepared and handed over to Technical Signatory within 5 working days after onsite verification",
      "File review",
      "Addressing of review notes",
      "File finalization",
    ],
  },
  {
    title: "Preliminary Report and Appeal Process",
    items: [
      "Preliminary Report and Final invoice sent to client with detailed scoring",
      "Client has 5 business days to appeal/dispute or accept the score",
      "If score is appealed/disputed, this process is managed and resolution finalized by Independent Team to those who carried out the verification",
    ],
  },
  {
    title: "B-BBEE Certification",
    items: [
      "Once the final payment is made the B-BBEE Certificate is issued",
      "The client satisfaction survey is sent to client to rate service received from mPowerRatings",
      "Once the satisfaction survey has been received the verification file is archived",
    ],
  },
];

const Verification = () => {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText} !text-[#8fa8da]`}>
          Verification
        </p>
        <h2 className={styles.sectionHeadTextContact}>
          Step by Step Verification Approach
        </h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-[minmax(240px,320px)_1fr] lg:gap-8">
        {/* Left: vertical step tabs (horizontal scroll on mobile) */}
        <div
          role="tablist"
          aria-label="Verification steps"
          className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {steps.map((step, index) => {
            const selected = index === active;
            const num = String(index + 1).padStart(2, "0");
            return (
              <button
                key={step.title}
                type="button"
                role="tab"
                id={`verification-tab-${index}`}
                aria-selected={selected}
                aria-controls="verification-panel"
                onClick={() => setActive(index)}
                className={`group flex shrink-0 items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 lg:w-full ${
                  selected
                    ? "border-white/25 bg-white/[0.1] shadow-card"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                }`}
              >
                <span
                  className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full font-lexend text-[13px] font-bold ring-2 transition ${
                    selected
                      ? "bg-white text-brand-deep ring-white/30"
                      : "bg-tertiary text-white ring-white/15 group-hover:ring-white/25"
                  }`}
                >
                  {num}
                </span>
                <span
                  className={`font-lexend text-[14px] font-semibold leading-snug sm:text-[15px] ${
                    selected ? "text-white" : "text-white/70"
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: selected step details */}
        <div
          role="tabpanel"
          id="verification-panel"
          aria-labelledby={`verification-tab-${active}`}
          className="min-h-[280px] rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-card backdrop-blur-sm sm:p-8"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
            >
              <div className="mb-5 flex items-center gap-3 border-b border-white/10 pb-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white font-lexend text-[14px] font-bold text-brand-deep">
                  {String(active + 1).padStart(2, "0")}
                </span>
                <h3 className="font-lexend text-[20px] font-semibold leading-snug text-white sm:text-[22px]">
                  {current.title}
                </h3>
              </div>
              <ul className="space-y-3.5">
                {current.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 font-source text-[15px] leading-relaxed text-white/75 sm:text-[16px]"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Verification, "verification");

import React from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles.js";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.js";

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

const StepCard = ({ index, title, items }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.08, 0.55)}
    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 sm:p-6 shadow-card backdrop-blur-sm transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.06]"
  >
    <div className="mb-4 flex items-center gap-3">
      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tertiary text-[13px] font-lexend font-bold text-white ring-2 ring-white/15">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="font-lexend text-[16px] sm:text-[17px] font-semibold text-white leading-snug">
        {title}
      </h3>
    </div>
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="font-source text-[14px] sm:text-[15px] text-white/65 leading-relaxed pl-3 border-l border-white/15"
        >
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Verification = () => {
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

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
        {steps.map((step, index) => (
          <StepCard key={step.title} index={index} {...step} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Verification, "verification");

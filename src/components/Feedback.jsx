import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Customers from "./slider/Customers.jsx";
import React from "react";

const Feedback = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Our clients</p>
        <h2 className={styles.sectionHeadTextContact}>
          Trusted by Leading Organisations.
        </h2>
      </motion.div>

      <div className="mt-8">
        <Customers />
      </div>

      <motion.div
        variants={textVariant}
        className="mt-14 flex justify-center items-center text-center"
      >
        <h2 className={styles.sectionHeadTextContact}>
          Impartiality &amp; Confidentiality.
        </h2>
      </motion.div>

      <div className="flex mt-6 gap-6 flex-col justify-center text-center items-center">
        <motion.p
          variants={fadeIn("left", "tween", 0.1, 1)}
          className="font-source text-white/80 font-semibold md:text-[18px] xs:text-[15px] max-w-3xl leading-[1.8]"
        >
          MPowerRatings (Pty) Ltd is governed by several principles as
          stipulated by the SANAS R47-03. One of which carries significant
          weighting is the principle of Impartiality and Confidentiality.
        </motion.p>

        <motion.p
          variants={fadeIn("left", "tween", 0.12, 1)}
          className="font-source text-[#8fa8da] font-semibold md:text-[13px] xs:text-[12px] max-w-xl leading-relaxed uppercase tracking-[0.15em]"
        >
          Impartiality can be defined as:
        </motion.p>

        <motion.p
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="font-source text-white/75 md:text-[17px] max-w-3xl xs:text-[15px] leading-[1.85]"
        >
          The actual and perceived presence of objectivity. Being impartial is
          essential for a B-BBEE Verification Agency to deliver a verification
          that inspires confidence in the process. MPowerRatings demonstrates
          that its decisions are based on verifying objective evidence and have
          not been improperly influenced by other interests or parties. We
          maintain our objectivity in respect of each verification while being
          professional, responsible, transparent and maintaining
          confidentiality.
        </motion.p>
      </div>
    </>
  );
};

export default SectionWrapper(Feedback, "impartiality");

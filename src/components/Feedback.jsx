import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import React from "react";

const Feedback = () => {
  return (
    <>
      <motion.div
        variants={textVariant}
        className="flex justify-center items-center text-center"
      >
        <h2 className={styles.sectionHeadTextContact}>
          Impartiality &amp; Confidentiality.
        </h2>
      </motion.div>

      <div className="mt-6 flex flex-col items-center justify-center gap-5 text-center">
        <motion.p
          variants={fadeIn("left", "tween", 0.1, 1)}
          className="max-w-3xl font-source text-[15px] font-semibold leading-[1.85] text-white/80 xs:text-[15px] md:text-[18px]"
        >
          MPowerRatings (Pty) Ltd is governed by several principles as
          stipulated by the SANAS R47-03. One of which carries significant
          weighting is the principle of Impartiality and Confidentiality.
        </motion.p>

        <motion.p
          variants={fadeIn("left", "tween", 0.12, 1)}
          className="max-w-xl font-source text-[12px] font-semibold uppercase leading-relaxed tracking-[0.15em] text-[#8fa8da] md:text-[13px]"
        >
          Impartiality can be defined as:
        </motion.p>

        <motion.p
          variants={fadeIn("right", "tween", 0.2, 1)}
          className="max-w-3xl font-source text-[15px] leading-[1.85] text-white/75 md:text-[17px]"
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

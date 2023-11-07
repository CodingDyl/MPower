import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Customers from "./slider/Customers.jsx";
import React from "react";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-secondary p-10 rounded-3xl xs:w-[320px] w-full'
  >
    <p className='text-tertiary font-black text-[48px]'>"</p>

    <div className='mt-1'>
      <p className='text-tertiary tracking-wider text-[18px]'>{testimonial}</p>

      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-tertiary font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-white text-[12px]'>
            {designation} | {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
        />
      </div>
    </div>
  </motion.div>
);

const Feedback = () => {
  return (
      <>
        <div className="mt-10">
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>mpower family</p>
                <h2 className={styles.sectionHeadTextContact}>Our Customers.
                </h2>
            </motion.div>
            <Customers />

            <motion.div variants={textVariant} className='mt-10 my-auto flex justify-center items-center text-center'>
                <h2 className={styles.sectionHeadTextContact}>Impartiality and Confidentiality.
                </h2>
            </motion.div>

            <div className="flex my-4 gap-6 flex-col justify-center text-center items-center">
            <motion.p variants={fadeIn("left", "tween", 0.1, 1)} className="text-white font-bold md:text-[20px] xs:text-[15px] max-w-3xl leading-[30px]">
                MPowerRatings (Pty) Ltd is governed by several principles as stipulated by the SANAS R47 - 03. One of which carries significant weighting is the principle of Impartiality and Confidentiality.
            </motion.p>

                <motion.p variants={fadeIn("left", "tween", 0.1, 1)} className="text-white font-extrabold md:text-[17px] xs:text-[12px] max-w-3xl leading-[30px]">
                    Impartiality can be defined as:
                </motion.p>

            <motion.p variants={fadeIn("right", "tween", 0.2, 1)} className="text-white font-bold md:text-[20px] max-w-3xl xs:text-[15px] leading-[30px]">
                The actual and perceived presence of objectivity. Being impartial is essential for a B-BBEE Verification Agency to be able to deliver a verification that results in a level which inspires confidence in the process. MPowerRatings comprehends that in order to obtain and maintain such confidence, MPowerRatings has to be able to demonstrate that its decisions are based on verifying objective evidence and that its decisions have not been improperly influenced by other interests or parties. We continue to endeavour to maintain our objectivity in respect of each verification that is held all while being professional, responsible, transparent and maintaining confidentiality.
            </motion.p>
            </div>
        </div>
  </>
  );
};

export default SectionWrapper(Feedback, "impartiality");
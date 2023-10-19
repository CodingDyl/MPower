import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import Customers from "./slider/Customers.jsx";

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
    <div className={`mt-12 bg-primary rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={`${styles.sectionHeadText} text-white`}>Client References.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-20 ${styles.paddingX} flex flex-wrap gap-7 sm:justify-center sm:align-center sm:items-center`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
        <div className="mt-10">
          <div className="mb-2">
            <h2 className={`${styles.sectionHeadText} text-white`}>Our Customers.</h2>
          </div>
          <Customers />
        </div>
  </>
  );
};

export default SectionWrapper(Feedback, "");
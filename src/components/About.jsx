import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';
import { logo } from '../assets';

const About = () => {
  const ServiceCard = ({ index, title }) => (
    <Tilt
      className="w-full sm:w-[240px]"
      options={{ max: 12, scale: 1.02, speed: 400 }}
    >
      <motion.div
        variants={fadeIn("right", "spring", index * 0.4, 0.7)}
        className="w-full brand-gradient p-[1px] rounded-2xl shadow-card hover:shadow-card-hover transition-shadow duration-300 cursor-pointer"
      >
        <div className="bg-white rounded-2xl py-5 px-4 sm:py-7 sm:px-8 min-h-[150px] sm:min-h-[200px] flex flex-col justify-center items-center gap-3 sm:gap-5">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-tertiary/10 flex items-center justify-center ring-2 ring-tertiary/15">
            <img
              src={logo}
              alt={title}
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain"
            />
          </div>
          <h3 className="font-lexend text-tertiary text-[14px] sm:text-[16px] font-semibold text-center leading-snug">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          About <span className="text-brand-deep">mPower</span>Ratings
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-primary text-[17px] max-w-3xl leading-[1.85]"
      >
        mPowerRatings is a SANAS Accredited B-BBEE Verification Agency with BVA number 204.
        Established in 2004, we have been at the forefront of transformation for more than a
        decade. Through expert knowledge on B-BBEE, we aim to drive sustainable and meaningful
        transformation to ensure inclusive growth within the South African economy. We are perfectly
        positioned to guide our clients through the transformation landscape.{" "}
        <span className="font-semibold text-tertiary">
          mPowerRatings is a 51% Black Female Owned, Level 2 B-BBEE Contributor.
        </span>{" "}
        To find out more, contact us at{" "}
        <a
          href="tel:0118800060"
          className="text-tertiary underline decoration-tertiary/40 underline-offset-2 hover:decoration-tertiary transition-all duration-200"
        >
          (011) 880-0060
        </a>{" "}
        or{" "}
        <a
          href="mailto:info@mpowerratings.co.za"
          className="text-tertiary underline decoration-tertiary/40 underline-offset-2 hover:decoration-tertiary transition-all duration-200"
        >
          info@mpowerratings.co.za
        </a>
        .
      </motion.p>

      <div className="mt-8 grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

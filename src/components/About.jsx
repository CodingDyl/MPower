import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { services } from '../constants';
import { logo } from '../assets';

const About = () => {
    const ServiceCard = ({ index, title }) => (
        <Tilt className='xs:w-[250px] w-full'>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card hover:cursor-pointer'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-white-100 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img
                src={logo}
                alt='web-development'
                className='w-16 h-16 object-contain bg-white rounded-full p-2'
              />
    
              <h3 className='text-tertiary text-[20px] font-bold text-center'>
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
    )
    
      return (
        <>
          <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionHeadText}>About <span className="text-tertiary">mPower</span>Ratings</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]">
          mPowerRatings is a SANAS Accredited B-BBEE
Verification Agency with BVA number 204.
mPowerRatings was established in 2004 and has been at the forefront of
transformation for more than a decade. Through expert knowledge on B-BBEE,we aim to drive sustainable and meaningful transformation to 
ensure inclusive growth within the South African economy. We are 
therefore perfectly positioned to guide our clientsthrough the 
transformation landscape.
mPowerRatings is a 15% Black Female Owned Level 3 B-BBEE
Contributor using the QSE Scorecard.
To find out more about our range of services compete a contact form or contact us at (011) 880-0060; or at <a href="info@mpowerratings.co.za." className="underline text-blue-60 !important"><span className="text-blue">info@mpowerratings.co.za.</span></a>
          </motion.p>
    
          <div className='mt-20 flex flex-wrap gap-10'>
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </>
      )
    }
    
export default SectionWrapper(About, "about");
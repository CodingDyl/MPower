import React from 'react'
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
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
              className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
              <img
                src={logo}
                alt='web-development'
                className='w-16 h-16 object-contain bg-white rounded-full p-2'
              />
    
              <h3 className='text-secondary text-[20px] font-bold text-center'>
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
            <h2 className={styles.sectionHeadText}>About <span className="text-tertiary">mPower</span> Ratings</h2>
          </motion.div>
          <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
          mPowerRatings was established in 2003 to serve the BEE requirements of South African corporates in a practical and efficient manner. It was the first business of its kind to provide BEE services through the internet when it launched its website www.mpowerratings.co.za in 2004.

          During 2010 we extended our services to include the performing of BEE ratings and the awarding of BEE certificates. Due to the change in the BEE landscape, it became a requirement to have BEE scorecards audited by accredited verification agencies. mPowerRatings achieved its SANAS accreditation in 2010. In June 2013, mPowerRatings achieved dual accreditation when it qualified to be appointment as a Registered Auditor by IRBA (The Independent Regulatory Board for Auditors).  mPowerRatings offers clients BEE audits across all the gazetted Sector Codes.

Our senior management are South African Chartered Accountants with a BEE knowledge base built up over many years. We remain at the forefront in terms of software development, and pride ourselves in the professionalism we offer our clients.

To find out more about our range of services compete a contact form or contact us at (011)880-0060; or at <a href="info@mpowerratings.co.za." className="underline text-blue-60 !important"><span className="text-blue">info@mpowerratings.co.za.</span></a>
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
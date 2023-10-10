import React from 'react'
import { SectionWrapper } from '../hoc'
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import { SimpleGrid } from '@mantine/core';
import { IconCheck } from "@tabler/icons-react";
import { sector1, sector2 } from '../constants';

const Accredidation = () => {
    const Services1 = ({title}) => (
        <div className="flex gap-1 align-center items-center mb-2">
            <div className="flex justify-center items-center border-solid border-2 align-center rounded-full px-2 py-2 bg-green-400">
                <IconCheck />
            </div>
            <h3 className='text-tertiary text-[20px] font-bold text-center'>
                {title}
            </h3>
        </div>
    );
    const Services2 = ({title}) => (
        <div className="flex gap-1 align-center items-center mb-2">
            <div className="flex justify-center items-center border-solid border-2 align-center rounded-full px-2 py-2 bg-green-400">
                <IconCheck />
            </div>
            <h3 className='text-tertiary text-[20px] font-bold text-center'>
                {title}
            </h3>
        </div>
        
    );
  return (
    <>
        <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Accredidation</p>
                <h2 className={styles.sectionHeadText}>Providing B-BBEE Verification services
                                                        in the following sectors
                </h2>
        </motion.div>

        <SimpleGrid cols={2} verticalSpacing="xl" className="pt-10">
            <div className="flex flex-col justify-center align-left">
            {sector1.map((sector1, index) => (
              <Services1 key={sector1.title} index={index} {...sector1} />
            ))}
            </div>
            <div className="flex flex-col justify-center align-left">
                {sector2.map((sector2, index) => (
                    <Services2 key={sector2.title} index={index} {...sector2} />
                ))}
            </div>
        </SimpleGrid>
    </>
  )
}

export default SectionWrapper(Accredidation, "accredidation")
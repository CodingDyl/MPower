import React, {useEffect, useRef} from 'react'
import { SectionWrapper } from '../hoc'
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";
import {Button, Paper, SimpleGrid, Text, Title} from '@mantine/core';
import {IconCheck, IconDownload} from "@tabler/icons-react";
import { sector1, sector2 } from '../constants';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { documents } from '../constants';

const Accreditation = () => {
    const Services1 = ({title}) => (
        <div className="flex gap-1 align-center items-center mb-2">
            <div className="flex justify-center items-center border-solid border-2 align-center rounded-full px-2 py-2 bg-tertiary">
                <IconCheck />
            </div>
            <h3 className='text-tertiary text-[20px] font-bold text-center'>
                {title}
            </h3>
        </div>
    );
    const Services2 = ({title}) => (
        <div className="flex gap-1 align-center items-center mb-2">
            <div className="flex justify-center items-center border-solid border-2 align-center rounded-full px-2 py-2 bg-tertiary">
                <IconCheck />
            </div>
            <h3 className='text-tertiary text-[20px] font-bold text-center'>
                {title}
            </h3>
        </div>
        
    );

    const DisplayCard = ({image, title, download}) =>  (
            <Paper shadow="md" p="xl" radius="md" style={{backgroundImage: `url(${image})`}} className="h-27 flex flex-col justify-between align-start bg-size-cover bg-position-center" >
                <div>
                    <Title order={3} className="title">
                        {title}
                    </Title>
                </div>
                <a download={download}>
                    <Button variant="white" color="dark">
                        <IconDownload />
                    </Button>
                </a>
            </Paper>
    );

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])
    const divRef = useRef(null);
  return (
    <>
        <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Accreditation</p>
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

        <div className="embla mt-10" ref={emblaRef}>
            <div className="embla__container">
                {documents.map((document, index) => (
                    <div className="embla__slide">
                        <DisplayCard {...document} key={document.title} index={index} />
                    </div>
                    ))}
            </div>
        </div>
    </>
  )
}

export default SectionWrapper(Accreditation, "accredidation")
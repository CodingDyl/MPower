import React from 'react'
import { SectionWrapper } from '../hoc'
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";
import {Button, Paper, rem, SimpleGrid, Title, useMantineTheme} from '@mantine/core';
import {IconCheck, IconDownload} from "@tabler/icons-react";
import { sector1, sector2 } from '../constants';
import { documents } from '../constants';
import {Carousel} from "@mantine/carousel";
import {useMediaQuery} from "@mantine/hooks";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

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

    const DisplayCard = ({image, title, download, text}) =>  (
            <Paper shadow="md" p="xl" radius="md" style={{backgroundImage: `url(${image})`}} className="card bg-blend-normal" >
                <div>
                    <Title order={3} className={`title-card ${text}`}>
                        {title}
                    </Title>
                </div>
                <a href={download} download>
                    <Button variant="white" color="dark" className="rounded bg-tertiary">
                        <IconDownload color="#f1f1f1"/>
                    </Button>
                </a>
            </Paper>
    );
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = documents.map((document) => (
        <Carousel.Slide key={document.title}>
            <DisplayCard {...document} />
        </Carousel.Slide>
    ))
  return (
    <>
        <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Accreditation</p>
                <h2 className={styles.sectionHeadText}>Providing B-BBEE Verification services
                                                        in the following sectors
                </h2>
        </motion.div>

        <SimpleGrid cols={2} verticalSpacing="xl" className="pt-10" breakpoints={[
            { maxWidth: '62rem', cols: 1, spacing: 'md' },
            { maxWidth: '48rem', cols: 1, spacing: 'sm' },
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}>
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

        <Carousel
            slideSize={{ base: '100%', sm: '50%' }}
            slideGap={{ base: rem(2), sm: 'xl' }}
            align="start"
            slidesToScroll={mobile ? 1 : 2}
            className="mt-10"
            nextControlIcon={<IconArrowRight size={16} />}
            previousControlIcon={<IconArrowLeft size={16} />}
            styles={{
                control: {
                    backgroundColor: "#334367",
                    color: '#334367',
                    font: 'bold',
                    border: '4px solid #334367'
                }
            }}
        >
            {slides}
        </Carousel>
    </>
  )
}

export default SectionWrapper(Accreditation, "accredidation")
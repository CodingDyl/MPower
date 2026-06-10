import React, { useRef } from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from "../styles.js";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion.js";
import { Paper, rem, SimpleGrid, Title, useMantineTheme } from '@mantine/core';
import { IconCheck, IconDownload } from "@tabler/icons-react";
import { sector1, sector2 } from '../constants';
import { documents } from '../constants';
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react';
import Autoplay from "embla-carousel-autoplay";

const SectorItem = ({ title }) => (
  <div className="flex gap-3 items-center mb-3">
    <div className="shrink-0 flex justify-center items-center w-7 h-7 rounded-full bg-tertiary">
      <IconCheck size={14} color="#ffffff" strokeWidth={3} />
    </div>
    <h3 className="font-source text-tertiary text-[16px] font-medium leading-snug">
      {title}
    </h3>
  </div>
);

const DisplayCard = ({ image, title, download, text }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 260, damping: 18 }}
  >
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className="card"
    >
      <div>
        <Title order={3} className={`title-card ${text}`}>
          {title}
        </Title>
      </div>
      <a
        href={download}
        download
        className="inline-flex items-center gap-2 bg-white/90 hover:bg-white text-tertiary font-semibold text-[13px] px-4 py-2.5 rounded-lg transition-all duration-200 cursor-pointer shadow-md mt-auto"
      >
        <IconDownload size={15} strokeWidth={2} />
        Download
      </a>
    </Paper>
  </motion.div>
);

const Accreditation = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const autoplay = useRef(
    Autoplay({ delay: 3200, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  const slides = documents.map((document) => (
    <Carousel.Slide key={document.title}>
      <DisplayCard {...document} />
    </Carousel.Slide>
  ));

  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Accreditation</p>
        <h2 className={styles.sectionHeadText}>
          B-BBEE Verification Services{" "}
          <span className="text-brand-deep">Across All Sectors</span>
        </h2>
      </motion.div>

      <SimpleGrid
        cols={2}
        verticalSpacing="xl"
        className="pt-10"
        breakpoints={[
          { maxWidth: '62rem', cols: 1, spacing: 'md' },
          { maxWidth: '48rem', cols: 1, spacing: 'sm' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
      >
        <div className="flex flex-col justify-center">
          {sector1.map((sector, index) => (
            <SectorItem key={sector.title} index={index} {...sector} />
          ))}
        </div>
        <div className="flex flex-col justify-center">
          {sector2.map((sector, index) => (
            <SectorItem key={sector.title} index={index} {...sector} />
          ))}
        </div>
      </SimpleGrid>

      <Carousel
        id="forms"
        slideSize={{ base: '100%', sm: '50%' }}
        slideGap={{ base: rem(2), sm: 'xl' }}
        align="start"
        withIndicators
        loop
        draggable
        controlSize={mobile ? 44 : 52}
        containScroll="trimSnaps"
        slidesToScroll={mobile ? 1 : 2}
        className="mt-10"
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        nextControlIcon={<IconArrowRight size={20} />}
        previousControlIcon={<IconArrowLeft size={20} />}
        styles={{
          control: {
            backgroundColor: "rgba(255,255,255,0.95)",
            color: '#334367',
            border: '1.5px solid rgba(51,67,103,0.2)',
            boxShadow: "0 8px 20px rgba(16, 13, 37, 0.15)",
            opacity: 1,
            backdropFilter: "blur(4px)",
          },
          indicators: {
            bottom: -30,
          },
          indicator: {
            width: mobile ? 9 : 11,
            height: mobile ? 9 : 11,
            backgroundColor: "#d1d5db",
            transition: "all 200ms ease",
            "&[data-active]": {
              opacity: 1,
              transform: "scale(1.2)",
              backgroundColor: "#334367",
            },
          },
        }}
      >
        {slides}
      </Carousel>
    </>
  );
};

export default SectionWrapper(Accreditation, "accredidation");

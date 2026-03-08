import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Lottie from "lottie-react";
import animationData from "../lotties/unity.json";
import QuoteModal from "./modals/QuoteModal.jsx";

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleQuote = () => {
    setOpen(!open);
  };

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,10,20,0.82)_0%,rgba(18,24,43,0.72)_45%,rgba(9,13,25,0.62)_100%)]" />
        <div className="absolute inset-0 backdrop-blur-[2px]" />
        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-[#3f5788]/30 blur-3xl" />
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-[#8f95a9]/25 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#334367]/25 blur-3xl" />
      </div>

      <div className={`${styles.paddingX} relative z-10 mx-auto max-w-[1480px]`}>
        <div className="min-h-[calc(100vh-72px)] grid items-center gap-8 pt-28 pb-16 lg:py-16 lg:grid-cols-3 xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2 text-center lg:text-left rounded-3xl bg-black/35 p-6 sm:p-8 backdrop-blur-md shadow-2xl shadow-black/30"
          >
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-[#dbe6ff] backdrop-blur">
              Accredited B-BBEE Verification Agency
            </span>
            <h1 className={`${styles.heroHeadText} mt-5 text-white lg:text-[72px] xl:text-[80px] lg:leading-[1.06]`}>
              Ensuring Change Through
              <br />
              <span className="text-[#8fa8da]">Empowerment.</span>
            </h1>
            <p className={`${styles.heroSubText} mt-5 max-w-2xl text-[#d5ddf0] lg:mx-0 mx-auto`}>
              mPowerRatings delivers credible, independent B-BBEE verification
              and advisory support to help organizations move forward with
              confidence.
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <a href="#faq">
                <button className="w-full rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-lg shadow-[#334367]/25 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tertiary focus-visible:ring-offset-2">
                  Learn More
                </button>
              </a>
              <button
                onClick={handleQuote}
                className="w-full rounded-xl bg-white/90 px-8 py-3 font-bold text-tertiary shadow-md transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              >
                Get a Quote
              </button>
            </div>
            <p className="mt-4 text-sm font-medium text-[#d5ddf0]">
              Trusted by businesses across South Africa
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="hidden lg:block lg:col-span-1 mx-auto w-full max-w-[620px] xl:max-w-[700px] lg:h-full"
          >
            <div className="h-full lg:min-h-[560px] xl:min-h-[620px] flex items-center justify-center">
              <Lottie animationData={animationData} className="w-full h-full scale-[1.22] xl:scale-[1.28]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-10 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About section">
          <div className="h-[58px] w-[34px] rounded-3xl border-2 border-tertiary/80 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 22, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 rounded-full bg-tertiary"
            />
          </div>
        </a>
      </div>
      <QuoteModal opened={open} close={() => setOpen(false)} />
    </section>
  );
};

export default Home;

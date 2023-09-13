import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import Lottie from 'react-lottie'
import animationData from '../lotties/teamwork.json'

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <section className="relative w-full h-screen mx-auto backdrop-blur-md">
      <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl flex  justify-center align-middle items-start mx-auto flex-row gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <br></br><span className="text-tertiary">MPower Rating</span></h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Your Trusted Partner for Streamlined Verification.
          </p>
          <a href={`#services`}>
          <div className="flex justify-start gap-3 w-full pt-4">
            <button className='btn bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Learn More</button>
            <button className='btn bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary hover:opacity-100 !important'>Get a quote</button>
          </div>
          </a>
        </div>
        <Lottie options={defaultOptions} height={400}
                width={400}/>
        </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href={`#about`}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-tertiary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Home
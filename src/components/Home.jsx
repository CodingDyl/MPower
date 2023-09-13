import {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import Lottie from 'react-lottie'
import animationData from '../lotties/teamwork.json'

const Home = () => {

  const [animationSize, setAnimationSize] = useState({ width: 500, height: 500 });

  useEffect(() => {
    // Adjust the size based on screen width
    if (window.innerWidth <= 768) {
      setAnimationSize({ width: 300, height: 300 });
    } else {
      setAnimationSize({ width: 500, height: 500 });
    }
  }, []);

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
      <div className={`${styles.paddingX} absolute inset-0 xs:top-[100px] md:top-[200px] max-w-7xl md:flex sm:flex-col md:flex-row justify-center xs:items-center md:items-start mx-auto gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <br></br><span className="text-tertiary">MPower Rating</span></h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            Ensuring change through Empowerment.
          </p>
          <a href={`#services`}>
          <div className="flex justify-start gap-3 w-full pt-4">
            <button className='btn bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Learn More</button>
            <button className='btn bg-secondary py-3 px-8 rounded-xl outline-none w-fit text-primary font-bold shadow-md shadow-primary hover:opacity-100 !important'>Get a quote</button>
          </div>
          </a>
        </div>
        <Lottie options={defaultOptions} height={animationSize.height}
                width={animationSize.width}/>
        </div>
      <div className="absolute xs:bottom-5 md:bottom-10 w-full flex justify-center items-center">
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
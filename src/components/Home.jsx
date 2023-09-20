import {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import Lottie from 'react-lottie'
import animationData from '../lotties/teamwork.json'
import QuoteModal from "./modals/QuoteModal.jsx";

const Home = () => {

  const [open, setOpen] = useState(false);

  const [animationSize, setAnimationSize] = useState({ width: 500, height: 500 });

  const handleQuote = () => {
    setOpen(!open);
  }

  useEffect(() => {
    // Adjust the size based on screen width
    if (window.innerWidth <= 768) {
      setAnimationSize({ width: 250, height: 250 });
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
      <div className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl md:flex sm:flex-col md:flex-row justify-center xs:items-center md:items-start mx-auto gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome to <br></br><span className="text-tertiary">mPower Ratings</span></h1>
          <p className={`${styles.heroSubText} mt-4 text-secondary`}>
            Ensuring change through Empowerment.
          </p>
          <div className="flex justify-start gap-3 w-full pt-4">
            <a href={`#faq`}><button className='btn bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Learn More</button></a>
            <button onClick={handleQuote} className='hover:opacity-100btn bg-primary py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary !important'>Get a quote</button>
          </div>
        </div>
        <Lottie options={defaultOptions} height={animationSize.height}
                width={animationSize.width}/>
        </div>
      <div className="absolute xs:bottom-10 md:bottom-20 w-full flex justify-center items-center">
        <a href={`#about`}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-tertiary flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-tertiary mb-1"/>
          </div>
        </a>
      </div>
      <QuoteModal opened={open} close={() => setOpen(false)} />
    </section>
  )
}

export default Home
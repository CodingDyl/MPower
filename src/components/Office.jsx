import React from 'react'
import {SectionWrapper} from "../hoc/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const Office = () => {
    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Find Us</p>
                <h2 className={styles.sectionHeadText}>Head Office</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]">
                We're ready to lead you into the future of B-BBEE.

                You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At mPowerRatings, we provide the exceptional service we'd want to experience ourselves!

                We operate in an industry built on trust. This can only be achieved through communication and experienced support – from the first contact past your tenth verification with us.

                At mPowerRatings, you always talk to a human!
            </motion.p>
        </>
    );
}

export default SectionWrapper(Office, "contact");
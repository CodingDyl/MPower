import React from 'react'
import {SectionWrapper} from "../hoc/index.js";
import {textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const Office = () => {
    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Find Us</p>
                <h2 className={styles.sectionHeadText}>Head Office</h2>
            </motion.div>
        </>
    );
}

export default SectionWrapper(Office, "contact");
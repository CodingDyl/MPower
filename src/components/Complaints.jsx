import {SectionWrapper} from "../hoc/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import {motion} from "framer-motion";

const Complaints = () => {
    return(
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Complaints</p>
                <h2 className={styles.sectionHeadText}>We are here to hear you</h2>
            </motion.div>

            <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]">
                mPowerRatings (Pty) Ltd is committed to ensuring that all complaints and appeals are handled fairly, methodically and timeously to give confidence that the B-BBEE Verification Process is accurate and impartial.An Appeal:
                Complaint:
                To be put in writing and sent to info@mpowerratings.co.za
            </motion.p>

            <div className="flex justify-start gap-3 w-full pt-4">
                <a href={`#contact`}><button className='hover:opacity-100btn bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white-100 font-bold shadow-md shadow-primary !important'>Get in Touch</button></a>
            </div>
        </>
    )
}

export default SectionWrapper(Complaints, "complaints")
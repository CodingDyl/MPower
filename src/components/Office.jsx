import React from 'react'
import {SectionWrapper} from "../hoc/index.js";
import {fadeIn, textVariant} from "../utils/motion.js";
import {IconPhone, IconDialpad, IconMail, IconLocation, IconUser} from "@tabler/icons-react";
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {Typography} from "@mui/material";
import MapComponent from "./MapContainer.jsx";

const Office = () => {
    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Find Us</p>
                <h2 className={styles.sectionHeadText}>Head Office</h2>
            </motion.div>

            <motion.p variants={fadeIn("right", "tween", 0.1, 1)} className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]">
                We're ready to lead you into the future of B-BBEE.

                You're not going to hit a ridiculously long phone menu when you call us. Your email isn't going to the inbox abyss, never to be seen or heard from again. At mPowerRatings, we provide the exceptional service we'd want to experience ourselves!

                We operate in an industry built on trust. This can only be achieved through communication and experienced support – from the first contact past your tenth verification with us.

                At mPowerRatings, you always talk to a human!
            </motion.p>

            <motion.div variants={fadeIn("left", "tween", 0.2, 1)} className="mt-4 mb-4 text-primary text-[22px] md:grid md:grid-cols-2 md:gap-6 xs:flex xs:flex-col xs:justify-start xs:items-start xs:gap-4">
                <div className="flex gap-1 align-center items-center md:px-0 sm:px-2">
                    <div className="flex justify-center items-center border-solid border-2 border-green-pink-gradient align-center rounded-full px-2 py-2 bg-white-100">
                        <IconPhone />
                    </div>
                    <Typography>011-880-0060</Typography>
                </div>
                <div className="flex gap-1 align-center items-center md:px-0 sm:px-2">
                    <div className="flex justify-center items-center border-solid border-2 border-green-pink-gradient align-center rounded-full px-2 py-2 bg-white-100">
                        <IconDialpad />
                    </div>
                    <Typography>1. New Queries</Typography>
                </div>
                <div className="flex gap-1 align-center items-center md:px-0 sm:px-2">
                    <div className="flex justify-center items-center border-solid border-2 border-green-pink-gradient align-center rounded-full px-2 py-2 bg-white-100">
                        <IconMail />
                    </div>
                    <Typography>info@mpowerratings.co.za</Typography>
                </div>
                <div className="flex gap-1 align-center items-center md:px-0 sm:px-2">
                    <div className="flex justify-center items-center border-solid border-2 border-green-pink-gradient align-center rounded-full px-2 py-2 bg-white-100">
                        <IconLocation />
                    </div>
                    <Typography>The Link, 173 Oxford Road, Rosebank, Johannesburg, 2196</Typography>
                </div>
                <div className="flex gap-1 align-center items-center md:px-0 sm:px-2">
                    <div className="flex justify-center items-center border-solid border-2 border-green-pink-gradient align-center rounded-full px-2 py-2 bg-white-100">
                        <IconUser />
                    </div>
                    <Typography>Roxanne Abramson | 082 563 1136</Typography>
                </div>
                <div className="flex gap-1 align-center items-center md:px-0 sm:px-2">
                    <div className="flex justify-center items-center border-solid border-2 border-green-pink-gradient align-center rounded-full px-2 py-2 bg-white-100">
                        <IconUser />
                    </div>
                    <Typography>roxanne@mpowerratings.co.za</Typography>
                </div>
            </motion.div>

            <motion.div variants={fadeIn("", "tween", 0.8, 1)} className="xs:hidden md:block">
                <MapComponent />
            </motion.div>

        </>
    );
}

export default SectionWrapper(Office, "contact");
import React from 'react';
import { SectionWrapper } from "../hoc/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { IconPhone, IconDialpad, IconMail, IconMapPin, IconUser } from "@tabler/icons-react";
import { styles } from "../styles.js";
import { motion } from "framer-motion";
import MapComponent from "./MapContainer.jsx";

const ContactItem = ({ icon: Icon, children }) => (
  <div className="flex gap-3 items-start">
    <div className="shrink-0 flex justify-center items-center w-10 h-10 rounded-full bg-tertiary/10 border border-tertiary/20 text-tertiary">
      <Icon size={17} strokeWidth={1.75} />
    </div>
    <span className="font-source text-primary text-[16px] leading-relaxed self-center">
      {children}
    </span>
  </div>
);

const Office = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Find Us</p>
        <h2 className={styles.sectionHeadText}>Our Offices</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("right", "tween", 0.1, 1)}
        className="mt-5 font-source text-primary text-[17px] max-w-3xl leading-[1.85]"
      >
        We're ready to lead you into the future of B-BBEE. You're not going to hit a
        ridiculously long phone menu when you call us. Your email isn't going to the inbox
        abyss, never to be seen or heard from again. At mPowerRatings, we provide the
        exceptional service we'd want to experience ourselves!
        <br /><br />
        We operate in an industry built on trust, from the first contact past your tenth
        verification with us.{" "}
        <span className="font-semibold text-tertiary">
          At mPowerRatings, you always talk to a human!
        </span>
      </motion.p>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="mt-8 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <ContactItem icon={IconPhone}>011-880-0060</ContactItem>
        <ContactItem icon={IconDialpad}>1. New Queries</ContactItem>
        <ContactItem icon={IconMail}>
          <a
            href="mailto:info@mpowerratings.co.za"
            className="hover:text-tertiary transition-colors duration-200"
          >
            info@mpowerratings.co.za
          </a>
        </ContactItem>
        <ContactItem icon={IconMapPin}>
          The Link, 173 Oxford Road, Rosebank, Johannesburg, 2196
        </ContactItem>
        <ContactItem icon={IconUser}>
          <div className="flex flex-col gap-0.5">
            <span className="font-semibold text-tertiary">Ownership &amp; leadership</span>
            <span>Lizelle de Jager · Magret Mothibi · Jeanet Mahlalela · Jaques Koekemoer</span>
            <span className="text-[14px] text-primary/80">Verification Managers / SANAS Technical Signatories: Jeanet Mahlalela &amp; Magret Mothibi · Jaques Koekemoer (SANAS Approved Technical Signatory) · Head of Sales &amp; Marketing (TBA)</span>
            <span className="mt-1">Lizelle de Jager: 082 784 0123</span>
          </div>
        </ContactItem>
        <ContactItem icon={IconMail}>
          <a
            href="mailto:lizelle@mpowerratings.co.za"
            className="hover:text-tertiary transition-colors duration-200"
          >
            lizelle@mpowerratings.co.za
          </a>
        </ContactItem>
      </motion.div>

      <motion.div
        variants={fadeIn("", "tween", 0.8, 1)}
        className="xs:hidden md:block"
      >
        <MapComponent />
      </motion.div>
    </>
  );
};

export default SectionWrapper(Office, "contact");

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";
import { Accordion } from "@mantine/core";
import { SectionWrapper } from "../hoc";
import Complaints from "./Complaints.jsx";

const faqItems = [
  {
    value: "bee-definition",
    question: "What is Broad-Based Economic Empowerment?",
    answer: (
      <p className="font-source text-primary text-[15px] leading-relaxed">
        Black Economic Empowerment (BEE) or Broad-Based Economic Empowerment (BBBEE) is a programme initiated by the South African government to remedy the inequalities of the past, thus giving previously disadvantaged groups, which are South African citizens, economic inclusion – previously not available to them.
      </p>
    ),
  },
  {
    value: "rating-types",
    question: "What are the different BEE rating types?",
    answer: (
      <ul className="font-source text-primary text-[15px] leading-relaxed space-y-2 list-none">
        <li>Exempt Micro Enterprise</li>
        <li>Qualifying Small Enterprises</li>
        <li>Generic Enterprises</li>
      </ul>
    ),
  },
  {
    value: "verification-time",
    question: "How long does the verification process take?",
    answer: (
      <p className="font-source text-primary text-[15px] leading-relaxed">
        Standard verifications are completed in 4–12 weeks, depending on data submitted. A fast-track option is available for clients who require a quicker turnaround. This is concluded in a shorter timeframe at a 50% premium on the standard verification invoice.
      </p>
    ),
  },
  {
    value: "pdf-certificate",
    question: "Can I obtain a PDF version of my certificate to upload on my website?",
    answer: (
      <p className="font-source text-primary text-[15px] leading-relaxed">Yes.</p>
    ),
  },
  {
    value: "products",
    question: "What are the different products you offer?",
    answer: (
      <ul className="font-source text-primary text-[15px] leading-relaxed space-y-2 list-none">
        <li>Exempt Micro Enterprise</li>
        <li>Qualifying Small Enterprises</li>
        <li>Generic Enterprises</li>
      </ul>
    ),
  },
  {
    value: "location",
    question: "Where can we find you?",
    answer: (
      <p className="font-source text-primary text-[15px] leading-relaxed">
        The Link, 173 Oxford Road, Rosebank, Johannesburg, 2196
      </p>
    ),
  },
];

const FAQ = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>Frequently Asked Questions</p>
        <h2 className={styles.sectionHeadText}>FAQ</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("right", "tween", 0.1, 1)}
        className="mt-5 font-source text-primary text-[17px] max-w-3xl leading-[1.85]"
      >
        At our mPower Ratings, we understand that navigating the intricacies of
        B-BBEE can be both challenging and crucial for businesses in South
        Africa. In this FAQ section, we aim to provide you with clear and
        concise answers to common questions about B-BBEE. Whether you&apos;re
        new to the concept or looking for specific insights, our goal is to help
        you better understand why B-BBEE is important and how it can positively
        impact your organization.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "tween", 0.15, 1)}
        className="mt-10 mb-16"
      >
        <Accordion
          variant="separated"
          radius="lg"
          chevronPosition="right"
          classNames={{
            item: "bg-white border border-tertiary/10 rounded-2xl shadow-card mb-3 overflow-hidden",
            control:
              "font-lexend text-tertiary font-semibold text-[15px] sm:text-[16px] px-5 py-4 hover:bg-tertiary/[0.03]",
            panel: "px-5 pb-5 pt-0",
            content: "pt-0",
            chevron: "text-tertiary",
          }}
        >
          {faqItems.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Control>{item.question}</Accordion.Control>
              <Accordion.Panel>{item.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </motion.div>

      <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
        <Complaints />
      </motion.div>
    </>
  );
};

export default SectionWrapper(FAQ, "faq");

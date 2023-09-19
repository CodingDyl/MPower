import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import { Grid, Accordion } from '@mantine/core';
import { SectionWrapper } from '../hoc';


const FAQ = () => {
    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Frequently Asked Questions</p>
                <h2 className={styles.sectionHeadText}>FAQ</h2>
            </motion.div>

            <motion.p variants={fadeIn("right", "tween", 0.1, 1)} className="mt-4 text-primary text-[17px] max-w-3xl leading-[30px]">
                At our mPower Ratings, we understand that navigating the intricacies of B-BBEE can be both challenging and crucial for businesses in South Africa. In this FAQ section, we aim to provide you with clear and concise answers to common questions about B-BBEE. Whether you're new to the concept or looking for specific insights, our goal is to help you better understand why B-BBEE is important and how it can positively impact your organization.
            </motion.p>

            <motion.div className="mt-10">
                <Grid>
                    <Grid.Col span={12} md={6}>
                        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                            <Accordion label="What is Broad-Based Economic Empowerment?">
                                <Accordion.Item value="What is Broad-Based Economic Empowerment?">
                                    <Accordion.Control className="text-primary font-extrabold">What is Broad-Based Economic Empowerment?</Accordion.Control>
                                    <Accordion.Panel>
                                        <p className="text-primary">Black Economic Empowerment (BEE) or Broad-Based Economic Empowerment (BBBEE) is a programme initiated by the South African government to remedy the inequalities of the past, thus giving previously disadvantaged groups, which are South African citizens, economic inclusion – previously not available to them.</p>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </motion.div>
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                            <Accordion label="What are the different BEE rating types?">
                                <Accordion.Item value="What are the different BEE rating types?">
                                    <Accordion.Control className="text-primary font-extrabold">What are the different BEE rating types?</Accordion.Control>
                                    <Accordion.Panel className="flex flex-col gap-4">
                                        <p className="text-primary">Exempt Micro Enterprise</p>
                                        <p className="text-primary">Qualifying Small Enterprises</p>
                                        <p className="text-primary">Generic Enterprises</p>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </motion.div>
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                            <Accordion label="How long does the verification process take?">
                                <Accordion.Item value="How long does the verification process take?">
                                    <Accordion.Control className="text-primary font-extrabold">How long does the verification process take?</Accordion.Control>
                                    <Accordion.Panel>
                                        <p className="text-primary">Ideally 4-6 weeks (dependent on data submitted).
                                            There is an ability to do urgent verifications in just 2-3 weeks if required.</p>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </motion.div>
                    </Grid.Col>
                    <Grid.Col span={12} md={6}>
                        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
                            <Accordion label="Can I obtain a PDF version of my certificate to upload on my website?">
                                <Accordion.Item value="Can I obtain a PDF version of my certificate to upload on my website?">
                                    <Accordion.Control className="text-primary font-extrabold">Can I obtain a PDF version of my certificate ?</Accordion.Control>
                                    <Accordion.Panel>
                                        <p className="text-primary">Yes.</p>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </motion.div>
                    </Grid.Col>
                </Grid>
            </motion.div>
        </>
    )
}

export default SectionWrapper(FAQ, "faq");
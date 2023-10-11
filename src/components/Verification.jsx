import React from 'react';
import { SectionWrapper } from '../hoc';
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {fadeIn, textVariant} from "../utils/motion.js";
import { Timeline, Text } from '@mantine/core';
import { root } from 'postcss';

const Verification = () => {
  return (
    <>
        <motion.div variants={textVariant}>
            <p className={styles.sectionSubText}>Verification</p>
            <h2 className={styles.sectionHeadTextContact}>Step by Step Verification Approach</h2>
        </motion.div>

        <Timeline active={1} bulletSize={24} lineWidth={2} className="mt-4 pt-4">
            <Timeline.Item title="Admin" className="text-white">
                <Text c="dimmed" size="sm">Onboarding and signing of relevant documents</Text>
                <Text c="dimmed" size="sm" mt={4}>50% deposit payment</Text>
                <Text c="dimmed" size="sm" mt={4}>Verification Analyist and Technical Signatory appointment</Text>
            </Timeline.Item>

            <Timeline.Item title="Pre-Verification" className="text-white">
                <Text c="dimmed" size="sm">Verification Analyst Introduction</Text>
                <Text c="dimmed" size="sm" mt={4}>Pre-Verification meeting</Text>
                <Text c="dimmed" size="sm" mt={4}>Verification Documentation checklist</Text>
            </Timeline.Item>

            <Timeline.Item title="Verification Commencement" className="text-white">
                <Text c="dimmed" size="sm">Data schedulessentto client</Text>
                <Text c="dimmed" size="sm" mt={4}>Processing/Capturing data received from client</Text>
                <Text c="dimmed" size="sm" mt={4}>Sample selectionand sending sampleto client</Text>
            </Timeline.Item>

            <Timeline.Item title="Onsite Verification Preparation" className="text-white">
                <Text c="dimmed" size="sm">Receiving and procesing of sampled evidence</Text>
                <Text c="dimmed" size="sm" mt={4}>Sending out Verification Plan</Text>
            </Timeline.Item>
        </Timeline>

        <Timeline active={1} bulletSize={24} lineWidth={2} align='right' className="mt-4 pt-4">
            <Timeline.Item title="Onsite Verification" className="text-white">
                <Text c="dimmed" size="sm">Onsite</Text>
                <Text c="dimmed" size="sm" mt={4}>Verification Commencement</Text>
                <Text c="dimmed" size="sm" mt={4}>Opening Meeting</Text>
                <Text c="dimmed" size="sm" mt={4}>Interviews</Text>
                <Text c="dimmed" size="sm" mt={4}>Any known differences discussed</Text>
                <Text c="dimmed" size="sm" mt={4}>Preliminary score discussion</Text>
                <Text c="dimmed" size="sm" mt={4}>Signing off on any outstanding documentation</Text>
            </Timeline.Item>

            <Timeline.Item title="Review Process" className="text-white">
                <Text c="dimmed" size="sm">File prepared and handed over to Technical Signatory within 5 working days after onsite verification</Text>
                <Text c="dimmed" size="sm" mt={4}>File review</Text>
                <Text c="dimmed" size="sm" mt={4}>Addressing of review notes</Text>
                <Text c="dimmed" size="sm" mt={4}>File finalization</Text>
            </Timeline.Item>

            <Timeline.Item title="Preliminary Report and Appeal Process" className="text-white">
                <Text c="dimmed" size="sm">Preliminary Report and Final invoice sent to client with detailed scoring</Text>
                <Text c="dimmed" size="sm" mt={4}>Client has 5 business days to appeal/dispute or accept the score</Text>
                <Text c="dimmed" size="sm" mt={4}>If score is appealed/disputed,this process is managed and resolution finalized by Independent Team to those who carried out the verification</Text>
            </Timeline.Item>

            <Timeline.Item title="B-BBEE Certification" className="text-white">
                <Text c="dimmed" size="sm">Once the final paymentismade the B-BBEE Certificateisissued</Text>
                <Text c="dimmed" size="sm" mt={4}>The client satisfaction survey is sent to client to rate service received from mPowerRatings</Text>
                <Text c="dimmed" size="sm" mt={4}>Once the satisfaction survey has been received the verification file is archived</Text>
            </Timeline.Item>
        </Timeline>
    </>
  )
}

export default SectionWrapper(Verification, "verification")
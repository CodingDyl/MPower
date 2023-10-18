import {Button, TextInput, Title, Text} from "@mantine/core";
import Lottie from "lottie-react";
import animationData from "../lotties/unity.json";

const Complaints = () => {
    return(
        <div className="wrapper">
                <div className="body">
                    <Title className="title">Complaints</Title>
                    <Text fw={500} fz="lg" mb={5}>
                        We are here to hear you
                    </Text>
                    <Text fz="sm" c="dimmed">
                        mPowerRatings (Pty) Ltd is committed to ensuring that all complaints and appeals are handled fairly, methodically and timeously to give confidence that the B-BBEE Verification Process is accurate and impartial.An Appeal:
                        Complaint:
                        To be put in writing and sent to info@mpowerratings.co.za
                    </Text>

                    <div className="controls">
                        <a href={`#contact`}><Button className="hover:opacity-100 hover:bg-transparent hover:b-2 hover:border-white hover:text-white-100 btn bg-white py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary !important">Get In Touch</Button></a>
                    </div>
                </div>
                <Lottie animationData={animationData} className="image" />
        </div>
    )
}

export default Complaints;
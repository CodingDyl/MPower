import {Button, TextInput, Title, Text} from "@mantine/core";
import Lottie from "lottie-react";
import animationData from "../lotties/unity.json";
import ComplaintModal from "./modals/ComplaintModal.jsx";
import {useState} from "react";

const Complaints = () => {
    const [open, setOpen] = useState(false);
    const handleComplaint = () => {
        setOpen(!open);
    }
    return(
        <div className="wrapper" id="complaints">
                <div className="body">
                    <Title className="title">Complaints</Title>
                    <Text fw={500} fz="lg" mb={5}>
                        We are here to hear you
                    </Text>
                    <Text fz="sm">
                        mPowerRatings (Pty) Ltd is committed to ensuring that all complaints and appeals are handled fairly, methodically and timeously to give confidence that the B-BBEE Verification Process is accurate and impartial. An Appeal/Complaint:
                        To be put in writing and sent to info@mpowerratings.co.za
                    </Text>

                    <div className="controls">
                        <Button className="hover:opacity-100 hover:bg-transparent hover:b-2 hover:border-white hover:text-white-100 btn bg-white py-3 px-8 rounded-xl outline-none w-fit text-tertiary font-bold shadow-md shadow-primary !important" onClick={handleComplaint}>Report Incident</Button>
                    </div>
                </div>
                <Lottie animationData={animationData} className="image" />
            <ComplaintModal opened={open} close={() => setOpen(false)} />
        </div>
    )
}

export default Complaints;
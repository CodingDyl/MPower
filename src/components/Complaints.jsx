import { Title, Text } from "@mantine/core";
import Lottie from "lottie-react";
import animationData from "../lotties/unity.json";
import ComplaintModal from "./modals/ComplaintModal.jsx";
import { useState } from "react";

const Complaints = () => {
  const [open, setOpen] = useState(false);
  const handleComplaint = () => {
    setOpen(!open);
  };

  return (
    <div className="wrapper" id="complaints">
      <div className="body">
        <Title className="title font-lexend font-bold tracking-tight">
          Complaints
        </Title>
        <Text
          fw={600}
          fz="lg"
          mb={8}
          className="font-source text-white/90 tracking-wide"
        >
          We are here to hear you
        </Text>
        <Text fz="sm" className="font-source text-white/80 leading-relaxed max-w-xl mx-auto">
          mPowerRatings (Pty) Ltd is committed to ensuring that all complaints
          and appeals are handled fairly, methodically and timeously to give
          confidence that the B-BBEE Verification Process is accurate and
          impartial. An Appeal/Complaint: To be put in writing and sent to{" "}
          <a
            href="mailto:info@mpowerratings.co.za"
            className="underline decoration-white/40 underline-offset-2 hover:decoration-white transition-colors"
          >
            info@mpowerratings.co.za
          </a>
        </Text>

        <div className="controls">
          <button
            type="button"
            onClick={handleComplaint}
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 font-lexend text-[14px] font-semibold text-tertiary shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4f7ff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 cursor-pointer"
          >
            Report Incident
          </button>
        </div>
      </div>
      <Lottie animationData={animationData} className="image" />
      <ComplaintModal opened={open} close={() => setOpen(false)} />
    </div>
  );
};

export default Complaints;

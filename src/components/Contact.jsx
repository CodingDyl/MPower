import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { notifications } from "@mantine/notifications";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const inputClass =
  "w-full bg-white/10 border border-white/20 py-4 px-5 placeholder:text-white/35 text-white rounded-xl outline-none focus:border-white/45 focus:bg-white/15 focus-visible:ring-2 focus-visible:ring-white/20 transition-all duration-200 font-source text-[16px]";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^\S+@\S+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      notifications.show({
        title: "Validation Error",
        message: "Name is required",
        color: "red",
      });
      return;
    }
    if (!form.email) {
      notifications.show({
        title: "Validation Error",
        message: "Email is required",
        color: "red",
      });
      return;
    }
    if (!validateEmail(form.email)) {
      notifications.show({
        title: "Validation Error",
        message: "Invalid email format",
        color: "red",
      });
      return;
    }
    if (!form.message) {
      notifications.show({
        title: "Validation Error",
        message: "Message is required",
        color: "red",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_9pvw52e",
        "template_li79xnj",
        {
          from_name: form.name,
          to_name: "mPowerRatings",
          from_email: form.email,
          to_email: "info@mpowerratings.co.za",
          message: form.message,
        },
        "Oey1QJ3g-VzBNrF_V"
      )
      .then(() => {
        setLoading(false);
        notifications.show({
          title: "Message sent",
          message: "Thank you. We will get back to you as soon as possible.",
          color: "green",
        });
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        notifications.show({
          title: "Error",
          message: "Something went wrong. Please try again.",
          color: "red",
        });
      });
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] p-7 sm:p-8 rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-md shadow-card"
      >
        <p className={`${styles.sectionSubText} !text-[#8fa8da]`}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadTextContact}>Contact Us.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <label className="flex flex-col gap-2">
            <span className="text-[#8fa8da] font-semibold text-[15px] font-source tracking-wide">
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[#8fa8da] font-semibold text-[15px] font-source tracking-wide">
              Email Address
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className={inputClass}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-[#8fa8da] font-semibold text-[15px] font-source tracking-wide">
              Message
            </span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className={`${inputClass} resize-none`}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="self-start inline-flex items-center justify-center bg-tertiary hover:bg-brand-deep disabled:opacity-60 disabled:cursor-not-allowed py-3.5 px-10 rounded-full text-white font-lexend font-semibold text-[15px] shadow-lg shadow-tertiary/30 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");

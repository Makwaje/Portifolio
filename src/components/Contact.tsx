"use client";

import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { LuCheck, LuCheckCircle, LuCheckCircle2 } from "react-icons/lu";
import SubmitButton from "./Submit-btn";
import { toast } from "react-hot-toast";

function Contact() {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="w-[min(100%,38rem) mb-20 scroll-mt-28 text-center sm:mb-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="-mt-6 text-sm text-gray-700 dark:text-white/80">
        Please contact me directly at{" "}
        <a href="mailto:" className="underline">
          Makwaje999@gmail.com{" "}
          <LuCheckCircle2
            size={16}
            fill="white"
            stroke="black"
            className="mb-1.5 inline"
          />
        </a>{" "}
        or through this form
      </p>

      <form
        className="mt-10 flex flex-col justify-center dark:text-black "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          // if (data?.error?.message) {
          //   toast.error(data?.error?.message);

          //   return;
          // }
          toast.error("This feature is currently not working");
          setTimeout(function () {
            toast.error("Please contact me directly at Makwaje999@gmail.com");
            return;
          }, 1500);

          // toast.success("Email sent successfully!");
          // console.log(data);
        }}
      >
        <input
          className="borderBlack h-14 rounded-xl
            p-4 outline-2 outline-black transition-all dark:bg-white/80 dark:outline-none dark:placeholder:text-black/50 dark:focus:bg-white"
          type="email"
          name="senderEmail"
          placeholder="Your email"
          required
          maxLength={500}
        />
        <textarea
          name="message"
          className="borderBlack my-3 h-52 rounded-xl
            p-4 
            outline-2 outline-black dark:bg-white/80 dark:outline-none dark:placeholder:text-black/50 dark:focus:bg-white
            "
          placeholder="Your message"
          maxLength={5000}
          required
        />
        <SubmitButton />
      </form>
    </motion.section>
  );
}

export default Contact;

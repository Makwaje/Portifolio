"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

import { useSectionInView } from "../lib/hooks";
import { useActiveSectionContext } from "@/context/active-sections";

function Intro() {
  const { ref, inView } = useSectionInView("Home", 0.75);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-96 text-center sm:mb-0"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center ">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.25 }}
          >
            <Image
              src="/sander.jpg"
              alt="mohamed portrait"
              width={192}
              height={192}
              quality={25}
              priority={true}
              className="object-fit h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        <span className="font-bold">Hello, Im Mohamed.</span> I&apos;m a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.35,
          delay: 0.25,
        }}
        className="flex flex-col justify-center gap-3 px-4 text-lg font-medium sm:flex-row"
      >
        <Link
          href="#contact"
          className="group flex items-center justify-center gap-2 rounded-full bg-gray-900 px-7 py-3 text-white transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 "
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 group-hover:opacity-90" />
        </Link>

        <a
          className="borderBlack group flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-7 py-3 transition-all hover:scale-110 focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/80"
          href="/CV.pdf"
          download={true}
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1 group-hover:opacity-90" />
        </a>

        <a
          className="borderBlack flex w-fit cursor-pointer items-center justify-center gap-2 self-center rounded-full bg-white p-4 transition-all hover:scale-[1.15]  focus:scale-110 active:scale-105 dark:bg-white/10 dark:text-white/80 "
          href="https://linkedin.com/in/makwaje"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="borderBlack flex w-fit cursor-pointer items-center justify-center gap-2 self-center rounded-full bg-white p-4 text-[1.30rem] transition-all hover:scale-[1.15] focus:scale-[1.15] active:scale-105 dark:bg-white/10 dark:text-white/80"
          href="http://github.com/Makwaje"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}

export default Intro;

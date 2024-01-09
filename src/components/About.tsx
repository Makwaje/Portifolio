"use client";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "../lib/hooks";

function About() {
  const { ref, inView } = useSectionInView("About", 1);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175, duration: 0.8 }}
      className="max-w-[45rem] scroll-mt-28 pb-28 text-center leading-8 sm:mb-0 sm:pb-40"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Graduated as <span className="font-semibold">Software engineer</span>{" "}
        from Mashreq University, I decided to pursue my passion for programming.
        and my bachelor is not enough, i started learning about the newest
        technology and decided to become a{" "}
        <span className="font-medium">full-stack web developer</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy making
        music, watching movies or reading a book. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Psychology & Philosophy</span>. I&apos;m
        also learning how to play the piano.
      </p>
    </motion.section>
  );
}

export default About;

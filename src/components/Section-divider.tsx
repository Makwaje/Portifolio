"use client";
import { motion } from "framer-motion";

function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        type: "tween",
      }}
      className="my-24 hidden h-16 w-1 rounded-full bg-gray-200 dark:bg-opacity-20 sm:block"
    ></motion.div>
  );
}

export default SectionDivider;

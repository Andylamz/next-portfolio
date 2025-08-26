"use client";
import { motion } from "framer-motion";

function SkillsDescription() {
  return (
    <motion.p
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-[#d6d6d6] text-center text-lg max-w-[1100px] max-md:text-base"
    >
      Here are some of the core technologies and tools I work with, which I use
      to design, build and deliver modern web applications.
    </motion.p>
  );
}

export default SkillsDescription;

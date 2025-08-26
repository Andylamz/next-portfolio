"use client";

import Image from "next/image";
import SocialContainer from "./SocialContainer";
import { motion } from "framer-motion";

function Introduction() {
  return (
    <section
      id="introduction"
      className="flex min-h-screen justify-center items-center xl:gap-20 xl:mt-0 mt-20 gap-10 xl:flex-row flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="rounded-full overflow-hidden md:min-w-[425px]"
      >
        <Image
          src={"/profile_pic.jpg"}
          width={500}
          height={100}
          alt="Profile Picture of Andy"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-150 text-xl"
      >
        <p>Hi, I am</p>
        <h1
          className="text-6xl font-semibold my-7
    ="
        >
          Andy Lam
        </h1>
        <p className="text-[#ea590b] text-2xl">Fullstack Developer</p>
        <p className="my-2 max-md:text-base">
          I am specialising in React, Next.js, and the MERN stack.
        </p>
        <p className="max-md:text-base">
          I enjoy building responsive, user-friendly applications, working with
          REST APIs, dashboards, and data visualisation.
        </p>
        <p className="my-2.5 text-[#ea590b]">Always curious, Always learning</p>
        <SocialContainer />
      </motion.div>
    </section>
  );
}

export default Introduction;

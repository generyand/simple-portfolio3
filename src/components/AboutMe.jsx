import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/illustration/illustration-2.json";

export default function AboutMe() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className={`about-me | flex gap-8 lg:gap-16 flex-col lg:flex-row text-center lg:text-start pt-20`}
        id="about"
      >
        {/* Illustration or Image */}
        <div className="flex-1 order-1 max-w-lg mx-auto -z-10 lg:max-w-none">
          <Lottie animationData={animationData} />
        </div>

        {/* About Me Description */}
        <div className="about-description | flex-1 lg:order-1">
          <h2 className="mb-6">About Me</h2>
          <p className="mb-4">
            Hey there! 👋 I'm Jhon Carlo Gealon, a 2nd Year IT student deeply
            passionate about coding, programming, and technology. Since I first
            dabbled with computers, I've been fascinated by their potential for
            creativity and problem-solving. Now, I'm on a mission to transform
            this passion into a rewarding career in tech.
          </p>

          <p>
            My journey in IT is driven by an insatiable curiosity and passion
            for navigating technology's ever-evolving landscape. From coding
            intricacies to software development challenges, I'm drawn to
            exploring endless possibilities. Whether crafting intuitive user
            interfaces or delving into Android development, I thrive on pushing
            boundaries and bringing innovative ideas to fruition.
          </p>
        </div>
      </motion.div>
    </>
  );
}

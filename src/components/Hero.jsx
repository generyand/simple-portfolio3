import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets//illustration/illustration-1.json";
import { motion } from "framer-motion";
import avatar from "../assets/illustration/avatar.webp";

export default function Hero() {
  return (
    <div className="hero">
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8 lg:mb-16`}
      >
        <div
          className={`flex flex-col items-center justify-center flex-1 text-center`}
        >
          {/* AVATAR, NAME, AND TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: "40px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-500 aspect-square w-[30%] mx-auto mb-4">
              <div
                className="w-full h-full bg-center bg-no-repeat bg-contain outlined bg-red"
                style={{ backgroundImage: `url(${avatar})` }}
              ></div>
            </div>
            <h1 className="mb-4 lg:mb-8">
              Renz Ivan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
                Polancos
              </span>
            </h1>
            <p className="max-w-lg mx-auto mb-4 text-base lg:mb-8 lg:text-lg">
              I am a dedicated IT student with a passion for learning. While I'm
              still in college, I am actively learning and growing every day. My
              enthusiasm for technology drives me to continually seek out new
              knowledge and challenges.
            </p>
          </motion.div>

          {/* CALL TO ACTION */}
          <motion.div
            initial={{ opacity: 0, y: "40px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-[2px] overflow-hidden rounded-md bg-gradient-to-r from-blue-600 to-purple-500"
          >
            <a
              className={`flex items-center gap-2 px-4 py-2 text-center rounded-[calc(0.375rem-2px)] cursor-pointer transition-colors lg:text-start hover:bg-transparent bg-neutral-900`}
              type="button"
              href="#contact"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

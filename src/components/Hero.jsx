import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets//illustration/illustration-1.json";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero">
      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-16 mb-8 lg:mb-16`}
      >
        <div
          className={`flex flex-col items-center justify-center flex-1 text-center`}
        >
          {/* NAME AND TAGLINE */}
          <motion.div
            initial={{ opacity: 0, y: "40px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="mb-4 lg:mb-8">Renz Ivan Polancos</h1>
            <p className="max-w-lg mx-auto mb-4 text-base lg:mb-8 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quasi animi voluptatem dolores magni velit voluptates libero
              asperiores nulla tempora, error voluptatum ipsam, labore quaerat
              rem? Odit cupiditate quia natus?
            </p>
          </motion.div>

          {/* CALL TO ACTION */}
          {/* <motion.a
            initial={{ opacity: 0, y: "40px" }}
            whileInView={{ opacity: 1, y: "0px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex items-center gap-2 px-4 py-2 text-center rounded-md cursor-pointer transition-colors bg-sky-500 lg:text-start hover:bg-sky-400`}
            type="button"
            href="#projects"
          >
            See My Projects
            <i className="hidden fa-solid fa-arrow-right lg:inline"></i>
          </motion.a> */}
        </div>

        {/* ILLUSTRATION */}
        {/* <motion.div
          initial={{ opacity: 0, y: "40px" }}
          whileInView={{ opacity: 1, y: "0px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className={`flex-1 max-w-lg mx-auto lg:max-w-none`}
        >
          <Lottie animationData={animationData} />
        </motion.div> */}
      </div>

      {/* HORIZONTAL LINE */}
      {/* <motion.hr
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      /> */}
    </div>
  );
}

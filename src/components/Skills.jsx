import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    /* SKILLS */
    <motion.div
      initial={{ opacity: 0, y: "40px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="w-full max-w-md pt-20 mx-auto text-center"
      id="skills"
    >
      <h2 className="mb-8">Skills</h2>

      {/* ICONS */}
      <div className="flex justify-around w-full languages">
        <i className="fa-brands fa-java | text-5xl lg:text-6xl hover:text-sky-400 cursor-pointer transition"></i>
        <i className="fa-brands fa-js | text-5xl lg:text-6xl hover:text-sky-400 cursor-pointer transition"></i>
        <i className="fa-brands fa-html5 | text-5xl lg:text-6xl hover:text-sky-400 cursor-pointer transition"></i>
        <i className="fa-brands fa-css3-alt | text-5xl lg:text-6xl hover:text-sky-400 cursor-pointer transition"></i>
        <i className="fa-brands fa-php | text-5xl lg:text-6xl hover:text-sky-400 cursor-pointer transition"></i>
      </div>
    </motion.div>
  );
}

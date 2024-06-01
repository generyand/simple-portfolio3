// import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({
  projectTitle,
  projectImage,
  projectLink,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: "40px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-4 bg-neutral-800"
    >
      <img
        className="object-contain aspect-square w-[80%]"
        src={projectImage}
        alt=""
      />
      <p>{projectTitle}</p>
    </motion.div>
  );
}

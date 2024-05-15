import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    /* CONTACT */
    <>
      <motion.div
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="w-full max-w-md mb-4 "
      >
        <h2 className="mb-4">Get in Touch</h2>
        <p className="mb-12">
          I'd love to connect and discuss potential collaborations, projects, or
          opportunities. Feel free to reach out to me through any of the
          following channels:
        </p>

        {/* ICONS */}
        <div className="flex w-full gap-[5%] languages">
          <a href="https://github.com/KaruSensie" target="_blank">
            <i className="fa-brands fa-square-github | text-4xl lg:text-5xl hover:text-sky-400 cursor-pointer transition"></i>
          </a>
          <a href="https://www.linkedin.com/" target="_blank">
            <i className="fa-brands fa-linkedin | text-4xl lg:text-5xl hover:text-sky-400 cursor-pointer transition"></i>
          </a>
          <a
            href="https://www.facebook.com/jhoncarlo.pugadogealon"
            target="_blank"
          >
            <i className="fa-brands fa-square-facebook | text-4xl lg:text-5xl hover:text-sky-400 cursor-pointer transition"></i>
          </a>
        </div>
      </motion.div>

      {/* Footer Cards */}
      <div className="flex flex-col items-center justify-center flex-1 md:flex-row ">
        <motion.div
          initial={{ opacity: 0, y: "40px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center flex-1 w-full gap-2 p-12 m-4 bg-slate-800 rounded-xl min-w-24"
        >
          <i className="fa-solid fa-phone | text-3xl lg:text-4xl cursor-pointer transition"></i>
          <p>+639630541662</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: "40px" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center flex-1 w-full gap-2 p-12 m-4 bg-slate-800 rounded-xl min-w-24"
        >
          <i className="fa-solid fa-envelope | text-3xl lg:text-4xl cursor-pointer transition"></i>
          <p>gealonjhoncarlo@gmail.com</p>
        </motion.div>
      </div>
    </>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function CertificateCard({
  certImage,
  certTitle,
  certPlatform,
}) {
  return (
    /* CERTIFICATE CARD */
    <motion.div
      initial={{ opacity: 0, y: "40px" }}
      whileInView={{ opacity: 1, y: "0px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="col-span-1 p-6 rounded-lg cursor-pointer transition-color md:rounded-xl lg:rounded-2xl overflow-clip bg-slate-900 text-slate-50 outline outline-slate-50 outline-1 hover:outline-sky-400"
    >
      <div className="flex flex-col">
        {/* CERTIFICATE IMAGE */}
        <img
          src={certImage}
          alt=""
          className="w-full mb-4 transition border-b-2 rounded-md md:rounded-lg hover:scale-105 border-slate-700"
        />

        {/* CERTIFICATE TITLE AND PLATFORM */}
        <div className="card-info-wrapper | text-center">
          <h4 className="font-bold text-md">{certTitle}</h4>
          <p>{certPlatform}</p>
        </div>
      </div>
    </motion.div>
  );
}

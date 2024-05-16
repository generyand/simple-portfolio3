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
      className="col-span-1 cursor-pointer overflow-clip text-slate-50"
    >
      <div className="flex flex-col">
        {/* CERTIFICATE IMAGE */}
        <img src={certImage} alt="" className="w-full mb-4" />

        {/* CERTIFICATE TITLE AND PLATFORM */}
        <div className="card-info-wrapper">
          <h4 className="font-bold text-md">{certTitle}</h4>
          <p>{certPlatform}</p>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import Cert1 from "../assets/img/cert1.jpg";
import Cert2 from "../assets/img/cert2.jpg";
import Cert3 from "../assets/img/cert3.jpg";
import Cert4 from "../assets/img/cert4.jpg";
import Cert5 from "../assets/img/cert5.jpg";

export default function Certificates() {
  
    const certs = [
      { image: Cert1, title: "Designing Presentation Slides", platform: "DICT" },
      { image: Cert2, title: "Navigating Google Workspace", platform: "DICT" },
      { image: Cert3, title: "Microsoft Productivity Tools", platform: "DICT" },
      { image: Cert4, title: "Programming Basics", platform: "Great Learning Academy" },
      { image: Cert5, title: "Responsive Web Design", platform: "FreeCodeCamp" },
    ];

  return (
    /* CERTIFICATES CONTAINER */
    <div className="pt-20" id="certificates">
      <motion.h2
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: "0px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="mb-8 text-center"
      >
        Certificates
      </motion.h2>
      <div
        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        id="certificates"
      >
        {certs.map((cert) => (
          <CertificateCard
            certImage={cert.image}
            certTitle={cert.title}
            certPlatform={cert.platform}
            key={cert.title}
          />
        ))}
      </div>
    </div>
  );
}

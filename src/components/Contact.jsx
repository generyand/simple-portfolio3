import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    { title: "phone", info: "+639562996075", icon: "fa-solid fa-phone" },
    {
      title: "email",
      info: "polancosivan@gmail.com",
      icon: "fa-solid fa-envelope",
    },
  ];

  const socials = [
    {
      title: "github",
      info: "https://github.com/xxexil",
      icon: "fa-brands fa-github",
    },
    {
      title: "facebook",
      info: "https://www.facebook.com/renzivan.polancos",
      icon: "fa-brands fa-facebook",
    },
    {
      title: "instagram",
      info: "https://www.instagram.com/polancosivan/",
      icon: "fa-brands fa-instagram",
    },
  ];

  return (
    /* CONTACT */
    <>
      <motion.div
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center w-full gap-4 p-8 mx-auto max-w-screen-2xl lg:gap-8 lg:px-24 md:flex-row"
      >
        {/* Social Links */}
        <div className="flex flex-col flex-1 w-full mb-8">
          <div className="logo | flex gap-2 mb-2 lg:mb-4 items-center">
            {/* <img className="w-8 h-8" src="" alt="" /> */}
            {/* <div className="flex items-center justify-center p-1 bg-white rounded-full aspect-square">
            <p className="text-sm italic font-bold text-neutral-800">Renz</p>
          </div> */}
            <p className="font-semibold">Renz Ivan Polancos</p>
          </div>

          {/* Icons */}
          <div className="flex w-full items-center gap-[5%] mx-auto">
            {socials.map((social) => {
              return (
                <a key={social.title} href={social.info} target="_blank">
                  <i className={`${social.icon} | social-link`}></i>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Infos */}
        <div className="flex flex-col justify-center flex-1 w-full gap-2 ">
          <p className="text-lg uppercase">Contact Me</p>
          {contacts.map((contact) => {
            return (
              <div
                key={contact.info}
                className="flex items-center flex-1 w-full gap-4 min-w-24 bg-neutral-800"
              >
                <i
                  className={`${contact.icon} | text-2xl lg:text-3xl cursor-pointer transition`}
                ></i>
                <p className="text-sm truncate md:text-base">{contact.info}</p>
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: "40px",
        }}
        whileInView={{
          opacity: 1,
          y: "0",
        }}
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
        viewport={{
          once: true,
        }}
        className="w-full gap-4 mx-auto max-w-screen-2xl lg:mx-36 lg:px-24"
      >
        <div className="wrapper | border-t py-8 px-4 lg:px-0">
          <p className="text-sm text-center lg:text-end">
            © 2024 Renz Ivan Polancos. All Rights Reserved
          </p>
        </div>
      </motion.div>
    </>
  );
}

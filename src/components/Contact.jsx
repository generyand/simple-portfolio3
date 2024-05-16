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
    <div className="flex flex-col items-center justify-center w-full p-8 mx-auto text-center max-w-screen-2xl lg:gap-8 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: "40px" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center w-full max-w-lg mb-4"
      >
        <h2 className="mb-4">Contact Me</h2>
        <p className="mb-4">
          Feel free to reach out through any of the contact details or social
          media links provided in this section. I'm always open to networking,
          collaborations, and opportunities to connect with others in the tech
          community. Looking forward to hearing from you!
        </p>

        {/* Social Icons */}
        <div className="flex w-full items-center justify-center gap-[5%] mx-auto">
          {socials.map((social) => {
            return (
              <a key={social.title} href={social.info} target="_blank">
                <i
                  className={`${social.icon} | text-4xl lg:text-5xl text-transparent bg-clip-text bg-slate-50 hover:bg-gradient-to-r to-blue-400 from-purple-400 cursor-pointer transition`}
                ></i>
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* Contact Infos */}
      <div className="flex flex-col items-center justify-center flex-1 w-full gap-4">
        {contacts.map((contact) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: "40px" }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              key={contact.title}
              className="rounded-full p-[2px] bg-gradient-to-r from-blue-600 to-purple-500 w-full max-w-md"
            >
              <div className="flex items-center flex-1 w-full gap-2 px-4 py-2 rounded-full min-w-24 bg-neutral-800">
                <i
                  className={`${contact.icon} | text-2xl lg:text-3xl cursor-pointer transition`}
                ></i>
                <p className="text-base truncate">{contact.info}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

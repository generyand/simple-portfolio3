import React from "react";
import { motion } from "framer-motion";
import Skill1 from "../assets/illustration/skill1.svg";
import Skill2 from "../assets/illustration/skill2.svg";
import Skill3 from "../assets/illustration/skill3.svg";
import Skill4 from "../assets/illustration/skill4.svg";
import SkillCard from "./SkillCard";

export default function Skills() {
  const skills = [
    { title: "Graphic Designing", icon: Skill1 },
    { title: "UI/UX Designing", icon: Skill2 },
    { title: "Web Development", icon: Skill3 },
    { title: "Video Editing", icon: Skill4 },
  ];
  return (
    /* SKILLS */
    <motion.div
      initial={{ opacity: 0, y: "40px" }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="w-full pt-20 mx-auto text-center"
      id="skills"
    >
      <h2 className="mb-8">What I am Good At</h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 gap-4 md:gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.title}
              skillTitle={skill.title}
              skillIcon={skill.icon}
            />
          );
        })}
      </div>
    </motion.div>
  );
}

// import React from "react";
import { motion } from "framer-motion";
import Project1 from "../assets/img/project1.webp";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        { image: Project1, title: "Agri Store", link: "" },
    ];

    return (
        /* CERTIFICATES CONTAINER */
        <div className="pt-20" id="projects">
            <motion.h2
                initial={{ opacity: 0, y: "40px" }}
                whileInView={{ opacity: 1, y: "0px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8 text-center"
            >
                Projects
            </motion.h2>
            <div
                className="grid grid-flow-row gap-8 cols-1 place md:grid-cols-2 lg:grid-cols-3 outlined"
            >
                {projects.map((project) => (
                    <ProjectCard
                        projectTitle={project.title}
                        projectLink={project.link}
                        projectImage={project.image}
                        key={project.title}
                    />
                ))}
            </div>
        </div>
    );
}

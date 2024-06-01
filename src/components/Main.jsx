import React from "react";
import Certificates from "./Certificates";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Main() {
  return (
    <main className="">
      <Skills />
      <Projects />
      <Certificates />
    </main>
  );
}

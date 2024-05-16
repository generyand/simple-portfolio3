import React from "react";
import Certificates from "./Certificates";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Contact from "./Contact";

export default function Main() {
  return (
    <main className="">
      {/* <AboutMe /> */}
      <Skills />
      <Certificates />
    </main>
  );
}

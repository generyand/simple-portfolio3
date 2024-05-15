import React, { useState } from "react";
import Nav from "./Nav";
import Hero from "./Hero";

export default function Header() {
  return (
    <header className="header">
      <Nav />
      <Hero />
    </header>
  );
}

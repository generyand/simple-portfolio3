import React from "react";

export default function MobileNav({ menuIsActive, toggleMenu }) {
  return (
    <nav className={`mobile-nav ${menuIsActive ? "active" : ""}`}>
      <header className="flex justify-between w-full px-8 py-3 ">
        {/* LOGO */}
        <div className="cursor-pointer logo">
          <h1 className="text-xl italic font-bold">JCG</h1>
        </div>

        {/* MENU TOGGLE BUTTON */}
        <button onClick={toggleMenu} className="menu-btn">
          <i className="fa-solid fa-xmark | text-2xl"></i>
        </button>
      </header>
      <hr />

      {/* NAVIGATION */}
      <ul className="flex flex-col gap-8 p-8 text-lg text-center">
        <li>
          <a
            onClick={toggleMenu}
            className="transition-all cursor-pointer hover:text-sky-400"
            href="#"
          >
            Home
          </a>
        </li>

        <li>
          <a
            onClick={toggleMenu}
            className="transition-all cursor-pointer hover:text-sky-400"
            href="#about"
          >
            About Me
          </a>
        </li>

        <li>
          <a
            onClick={toggleMenu}
            className="transition-all cursor-pointer hover:text-sky-400"
            href="#skills"
          >
            Skills
          </a>
        </li>

        {/* <li>
          <a
            onClick={toggleMenu}
            className="transition-all cursor-pointer hover:text-sky-400"
            href="#projects"
          >
            Projects
          </a>
        </li> */}

        <li>
          <a
            onClick={toggleMenu}
            className="transition-all cursor-pointer hover:text-sky-400"
            href="#certificates"
          >
            Certificates
          </a>
        </li>

        <li>
          <a
            onClick={toggleMenu}
            className="transition-all cursor-pointer hover:text-sky-400"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

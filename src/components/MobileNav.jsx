import React from "react";

export default function MobileNav({ menuIsActive, toggleMenu }) {
  return (
    <nav className={`mobile-nav ${menuIsActive ? "active" : ""}`}>
      <header className="flex justify-end w-full px-8 py-3 bg-neutral-800">
        {/* MENU TOGGLE BUTTON */}
        <button onClick={toggleMenu} className="menu-btn">
          <i className="fa-solid fa-xmark | text-2xl"></i>
        </button>
      </header>

      {/* NAVIGATION */}
      <ul className="flex flex-col gap-8 p-8 text-lg text-center">
        <li className="flex justify-center w-full">
          <a
            onClick={toggleMenu}
            className="w-full transition-all cursor-pointer hover:underline"
            href="#"
          >
            Home
          </a>
        </li>

        <li className="flex justify-center w-full">
          <a
            onClick={toggleMenu}
            className="w-full transition-all cursor-pointer hover:underline"
            href="#skills"
          >
            Skills
          </a>
        </li>

        <li className="flex justify-center w-full">
          <a
            onClick={toggleMenu}
            className="w-full transition-all cursor-pointer hover:underline"
            href="#projects"
          >
            Projects
          </a>
        </li>

        <li className="flex justify-center w-full">
          <a
            onClick={toggleMenu}
            className="w-full transition-all cursor-pointer hover:underline"
            href="#certificates"
          >
            Certificates
          </a>
        </li>

        <li className="flex justify-center w-full">
          <a
            onClick={toggleMenu}
            className="w-full transition-all cursor-pointer hover:underline"
            href="#contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

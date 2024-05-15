import React, { useState } from "react";
import MobileNav from "./MobileNav";

export default function Nav() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };
  return (
    <div className="nav-wrapper">
      <MobileNav menuIsActive={menuIsActive} toggleMenu={toggleMenu} />
      <nav className="flex justify-between px-8 py-3 mx-auto text-white max-w-screen-2xl lg:px-24 lg:py-6">
        {/* LOGO */}
        <div className="cursor-pointer logo">
          <a href="#">
            <h1 className="text-xl italic font-bold">JCG</h1>
          </a>
        </div>

        {/* NAVIGATION */}
        <div className="hidden nav-menus lg:block">
          <ul className="flex gap-12 text-xl">
            <li>
              <a
                className="transition-all cursor-pointer hover:text-sky-400"
                href="#"
              >
                Home
              </a>
            </li>

            <li>
              <a
                className="transition-all cursor-pointer hover:text-sky-400"
                href="#about"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="transition-all cursor-pointer hover:text-sky-400"
                href="#skills"
              >
                Skills
              </a>
            </li>

            {/* <li>
              <a
                className="transition-all cursor-pointer hover:text-sky-400"
                href="#projects"
              >
                Projects
              </a>
            </li> */}

            <li>
              <a
                className="transition-all cursor-pointer hover:text-sky-400"
                href="#certificates"
              >
                Certificates
              </a>
            </li>

            <li>
              <a
                className="transition-all cursor-pointer hover:text-sky-400"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* MENU BUTTON */}
        <button onClick={toggleMenu} className="visible lg:hidden menu-btn">
          <i className="fa-solid fa-bars-staggered | text-2xl"></i>
        </button>
      </nav>
    </div>
  );
}
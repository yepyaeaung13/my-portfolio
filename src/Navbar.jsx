import React from "react";

const Navbar = () => {
  return (
    <ul className="flex gap-8 text-white">
      <li>
        <a className="text-blue-700 hover:text-blue-700" href="#home">
          HOME
        </a>
      </li>
      <li>
        <a className="hover:text-blue-700" href="#about">
          ABOUT ME
        </a>
      </li>
      <li>
        <a className="hover:text-blue-700" href="#portfolio">
          PORTFOLIO
        </a>
      </li>
      <li>
        <a className="hover:text-blue-700" href="#skills">
          SKILLS
        </a>
      </li>
      <li>
        <a
          className="bg-gradient-to-tr from-blue-700 px-3 py-2 rounded-md"
          href="#contact"
        >
          CONTACT
        </a>
      </li>
    </ul>
  );
};

export default Navbar;

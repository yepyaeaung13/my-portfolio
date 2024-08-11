import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState([
    { id: "#", name: "Home" },
    { id: "#about", name: "About Me" },
    { id: "#portfolio", name: "Portfolio" },
    { id: "#skills", name: "Skills" },
    { id: "#contact", name: "Contact" },
  ]);
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <ul className="flex gap-5 text-white shadow-md">
        {nav.map((el, idx) => {
          return (
            <li key={idx}>
              <a
                onClick={() => {
                  setActive(el.id);
                }}
                className={`hover:text-black hover:bg-gray-100 duration-300 px-2 rounded-md py-1 ${
                  el.id === active ? "text-black bg-gray-100" : "text-white"
                }`}
                href={`${el.id}`}
              >
                {el.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState([
    { id: "#home", name: "Home" },
    { id: "#about", name: "ABOUT ME" },
    { id: "#portfolio", name: "PORTFOLIO" },
    { id: "#skills", name: "SKILLS" },
    { id: "#contact", name: "CONTACT" },
  ]);
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <ul className="flex gap-[3vw] text-white md:text-md text-sm">
        {nav.map((el, idx) => {
          return (
            <li key={idx}>
              <a
                onClick={() => {
                  setActive(el.id);
                }}
                className={`hover:text-blue-700 ${
                  el.id === active ? "text-blue-700" : "text-white"
                }`}
                href={`${el.id}`}
              >
                {el.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="hidden">
        {!isOpen ? (
          <button onClick={toggleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-[1.3vw]"
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                fill="white"
              />
            </svg>
          </button>
        ) : (
          <button onClick={toggleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-[1.3vw]"
            >
              {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
              <path
                d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                fill="white"
              />
            </svg>
          </button>
        )}
      </div>
      <ul
        className={`${
          isOpen
            ? "fixed md:top-[9vh] top-[8vh] md:right-[7vw] right-[1vw]"
            : "hidden"
        } flex flex-col gap-[1vw] bg-zinc-800 p-[1vw] pe-[10vw] text-white text-[1.1vw]`}
      >
        {nav.map((el, idx) => {
          return (
            <li key={idx}>
              <a
                onClick={() => {
                  setActive(el.id);
                }}
                className={`hover:text-blue-700 ${
                  el.id === active ? "text-blue-700" : "text-white"
                }`}
                href={`${el.id}`}
              >
                {el.name}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;

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
  const [isOpen, setIsOpen] = useState(true);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* desktop menu  */}
      <ul className="hidden md:flex gap-5 text-white shadow-md">
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

      {/* mobile menu btn  */}
      <button
        onClick={toggleOpen}
        title="menu"
        id="menuBtn"
        className="md:hidden text-white px-2 py-1 rounded-md"
      >
        {isOpen ? (
          <svg
            id="menuOpen"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`size-6`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            id="menuClose"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`size-6`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {/* mobile menu  */}
      <ul
        className={`w-screen absolute top-10 bg-opacity-85 bg-zinc-800 left-0 flex flex-col justify-center items-center gap-5 font-medium text-white shadow-md py-5 ${
          isOpen ? "hidden" : ""
        }`}
      >
        {nav.map((el, idx) => {
          return (
            <li key={idx}>
              <a
                onClick={() => {
                  setActive(el.id);
                  toggleOpen();
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

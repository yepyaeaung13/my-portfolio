import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Container from "./Container";

const Heading = () => {
  return (
    <div className="sticky py-3 z-10 top-0 bg-zinc-800">
      <Container>
        <div className="flex justify-between ">
          <Profile />
          <Navbar />
        </div>
      </Container>
      {/* <div className="relative md:hidden sm:block">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-white font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <ul className="sm:flex flex-col bg-black p-3 gap-1 text-white fixed text-sm rounded -translate-x-[4.5rem] md:hidden">
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
            <a className="hover:text-blue-700" href="#experence">
              EXPERENCE
            </a>
          </li>
          <li>
            <a className="hover:text-blue-700" href="#contact">
              CONTACT
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Heading;

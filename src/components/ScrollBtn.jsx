import React, { useState } from "react";

const ScrollBtn = () => {
  const [show, setShow] = useState(false);

  const scrollHandler = () => {
    if (scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }

    console.log("scroll");
  };

  return (
    <>
      <button
        id="scrollBtn"
        className={`bottom-5 right-4 z-50 rounded-full p-2 duration-1000 ${
          show ? "fixed" : "hidden"
        }`}
        onScroll={scrollHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-white animate-pulse"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 18.75 7.5-7.5 7.5 7.5"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
};

export default ScrollBtn;

import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import SkillSection from "./components/SkillSection";
import AOS from "aos";

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollHandler = () => {
    if (scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="h-screen w-full relative flex flex-col gap-48">
        <div className="bg-zinc-800 md:px-16 px-2">
          <Heading />
        </div>
        <HeroSection />
        <div className="flex justify-center">
          <button className="mt-auto py-5 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="bg-zinc-800">
        <AboutMe />
      </div>
      <Portfolio />
      <div className="bg-zinc-800">
        <SkillSection />
      </div>
      <Contact />

      {/* scroll btn  */}
      <button
        id="scrollBtn"
        className={`bottom-5 right-4 z-50 rounded-full p-2 duration-1000 ${
          show ? "fixed" : "hidden"
        }`}
        onClick={scrollToTop}
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
}

export default App;

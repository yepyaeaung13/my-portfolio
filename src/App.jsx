import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Container from "./components/Container";
import Heading from "./components/Heading";
import HeroSection from "./components/HeroSection";
import Portfolio from "./components/Portfolio";
import SkillSection from "./components/SkillSection";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Heading />
      <HeroSection />
      <div className="bg-zinc-800">
        <AboutMe />
      </div>
      <Portfolio />
      <div className="bg-zinc-800">
        <SkillSection />
      </div>
      <Contact />
    </>
  );
}

export default App;

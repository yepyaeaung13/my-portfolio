import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Heading from "./Heading";
import HeroSection from "./HeroSection";
import Portfolio from "./Portfolio";
import SkillSection from "./SkillSection";

function App() {
  return (
    <>
      <Heading />
      <div className="h-6" id="home"></div>
      <HeroSection />
      <AboutMe />
      <Portfolio />
      <SkillSection />
      <Contact />
    </>
  );
}

export default App;

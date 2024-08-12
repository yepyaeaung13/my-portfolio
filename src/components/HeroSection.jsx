import React from "react";
import profile1 from "/hero.png";
import Container from "./Container";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <Container>
      <div id="home" className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-5 w-full items-center">
          <span className="text-white italic font-semibold">
            Hello, I'm Ye Pyae Aung
          </span>
          <h1 className="text-white text-2xl font-serif tracking-widest">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "",
                2000,
                "FRONTEND DEVELOPER",
                2000,
                "WEB DEVELOPER",
                5000,
              ]}
              speed={40}
              style={{
                width: 450,
              }}
              repeat={Infinity}
            />
          </h1>
          <div>
            <a
              className="text-white border rounded-md px-2 py-1"
              href="#portfolio"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

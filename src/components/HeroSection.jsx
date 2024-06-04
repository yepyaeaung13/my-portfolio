import React from "react";
import profile1 from "/hero.png";
import Container from "./Container";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[10vw] md:my-[20vh] my-[8vh]">
        <div className="flex flex-col gap-[1.5vw]">
          <div className="flex flex-col">
            <span className="text-white italic md:text-[1.5vw] text-[2vw] font-semibold">
              Hello, I'm Ye Pyae Aung
            </span>
            <h1 className="text-white w-[440px] h-32 md:text-[3vw] text-[5vw] font-serif tracking-widest font-extrabold">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed once, initially
                  "",
                  2000,
                  "FRONTEND WEB DEVELOPER",
                  5000,
                ]}
                speed={40}
                style={{
                  width: 450,
                }}
                repeat={Infinity}
              />
            </h1>
          </div>
          <div>
            <a
              className="text-blue-600 hover:underline underline-offset-[0.5vh] md:text-[1vw] text-[2vw] p-[0.8vw] rounded-md tracking-widest font-bold"
              href="#portfolio"
            >
              {">>"} SEE PROJECTS {">>"}
            </a>
          </div>
        </div>
        <div className="w-[40vw] flex justify-center">
          <img
            src={profile1}
            alt="profile picture"
            className="md:w-[30vw] w-[25vw]"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

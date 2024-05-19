import React from "react";
import profile from "../assets/profile-pic.png";
import Container from "./Container";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-[10vw] md:my-[20vh] my-[8vh]">
        <div className="flex flex-col gap-[1.5vw]">
          <div className="flex flex-col">
            <span className="text-white italic md:text-[1.5vw] text-[2vw] font-semibold">
              Hello, I'm Ye Pyae Aung
            </span>
            <h1 className="text-white md:text-[3vw] text-[5vw] font-serif tracking-widest font-extrabold">
              FRONTEND WEB
              <br /> DEVELOPER
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
            src={profile}
            alt="profile picture"
            className="md:w-[15vw] w-[25vw]"
          />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

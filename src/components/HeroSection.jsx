import React from "react";
import profile from "../assets/profile-pic.png";
import Container from "./Container";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex items-center justify-center gap-[10vw] my-[20vh]">
        <div className="flex flex-col gap-[1.5vw]">
          <div className="flex flex-col">
            <span className="text-white italic text-[1.5vw] font-semibold">
              Hello, I'm Ye Pyae Aung
            </span>
            <h1 className="text-white text-[3vw] font-serif tracking-widest font-extrabold">
              FRONTEND WEB
              <br /> DEVELOPER
            </h1>
          </div>
          <div>
            <a
              className="text-blue-600 hover:underline underline-offset-[0.5vh] text-[1vw] p-[0.8vw] rounded-md tracking-widest font-bold"
              href="#portfolio"
            >
              {">>"} SEE PROJECTS {">>"}
            </a>
          </div>
        </div>
        <div className="w-[40vw] flex justify-center">
          <img src={profile} alt="profile picture" className="w-[15vw]" />
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;

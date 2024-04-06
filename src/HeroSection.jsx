import React from "react";
import profile from "./assets/profile-pic.png";

const HeroSection = () => {
  return (
    <div className="flex md:flex-row sm:flex-col sm:gap-10 items-center justify-between py-24">
      <div className="">
        <div className="flex flex-col">
          <span className="text-blue-800 text-2xl font-semibold">I'm a</span>{" "}
          <h1 className="text-white text-[3rem] tracking-widest font-extrabold">
            FRONTEND WEB
            <br /> DEVELOPER
          </h1>
        </div>
        <a
          className="text-white text-sm p-2 rounded-md tracking-widest font-bold bg-gradient-to-tl from-blue-950 to-blue-700 shadow-xl mt-2"
          href="#portfolio"
        >
          SEE PROJECTS
        </a>
      </div>
      <div>
        <img src={profile} alt="profile picture" className="w-56" />
      </div>
    </div>
  );
};

export default HeroSection;

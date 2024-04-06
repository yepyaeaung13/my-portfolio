import React from "react";
import ProfilePic from "./assets/profile-pic.png";
const AboutMe = () => {
  return (
    <div className="flex flex-col gap-20 px-2 py-24" id="about">
      <div className="flex md:flex-row sm:flex-col sm:gap-5 justify-between items-center">
        <div>
          <img src={ProfilePic} alt="profile picture" className="w-56" />
        </div>
        <div className="text-white bg-blue-800/50 rounded-md p-5 w-[60%] shadow-md shadow-slate-950 flex flex-col gap-5">
          <h1 className="font-bold text-lg tracking-widest">ABOUT ME</h1>
          <p className="text-sm">
            Hello! I'm <span className="font-bold">Ye Pyae Aung</span>, a
            passionate Front-End Developer with expertise in HTML, CSS, Tailwind
            CSS, Bootstrap, JavaScript, and ReactJS. With a keen eye for design
            and a love for clean, efficient code, I bring a unique blend of
            creativity and technical skill to every project I work on. I thrive
            in collaborative environments, where I can contribute my expertise
            to create stunning, user-friendly web experiences. My goal is to
            continually learn and grow as a developer while delivering
            exceptional results that exceed client expectations. Let's build
            something amazing together!
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <button className="text-white font-bold text-sm duration active:scale-95 bg-blue-700/70 bg-gradient-to-r from-blue-700/70 to-indigo-950/40 px-10 py-3 rounded-lg">
          HIRE ME
        </button>
        <button className="text-white font-bold text-sm border-2 duration active:scale-95 border-blue-700/70 px-10 py-3 rounded-lg">
          RESUME
        </button>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import ProfilePic from "../assets/profile.png";
import Container from "./Container";
const AboutMe = () => {
  return (
    <Container>
      <div className="flex justify-between py-[10vh]" id="about">
        <div>
          <img src={ProfilePic} alt="profile picture" className="w-[35vw]" />
        </div>
        <div className="text-white p-[1vw] w-[50vw] flex flex-col gap-[1.5vw]">
          <h1 className="font-bold text-[1.5vw] tracking-widest font-serif">
            ABOUT ME
          </h1>
          <p className="text-[1.2vw]" style={{ lineHeight: 2 }}>
            Hello!, I'm a passionate Front-End Developer with expertise in HTML,
            CSS, Tailwind CSS, Bootstrap, JavaScript, and ReactJS. With a keen
            eye for design and a love for clean, efficient code, I bring a
            unique blend of creativity and technical skill to every project I
            work on. I thrive in collaborative environments, where I can
            contribute my expertise to create stunning, user-friendly web
            experiences. My goal is to continually learn and grow as a developer
            while delivering exceptional results that exceed client
            expectations. Let's build something amazing together!
          </p>
          <div className="flex gap-[2vw]">
            <button className="text-white font-bold text-[1vw] duration active:scale-95 bg-blue-700/70 bg-gradient-to-r from-blue-700/70 to-indigo-950/40 px-[2vw] py-[1vh] rounded-[0.4vw]">
              HIRE ME
            </button>
            <button className="text-white font-bold text-[1vw] border-[0.1vw] duration active:scale-95 border-blue-700/70 px-[2vw] py-[1vh] rounded-[0.4vw]">
              RESUME
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
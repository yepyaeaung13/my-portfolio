import React, { useState } from "react";
import resume from "/ye-pyae-aung.pdf";
import Container from "./Container";
const AboutMe = () => {
  const [skills, setSkills] = useState([
    {
      language: "HTML",
      percent: 90,
    },
    {
      language: "CSS",
      percent: 80,
    },
    {
      language: "Javascript",
      percent: 70,
    },
    {
      language: "PHP",
      percent: 40,
    },
  ]);
  return (
    <Container>
      <div
        className="flex flex-col md:flex-row gap-5 justify-between md:py-10 py-5"
        id="about"
      >
        <div className="flex text-sm text-white flex-col gap-4 px-5">
          <div>
            <h1 className="text-xl font-bold font-serif">Programming Skills</h1>
          </div>
          <div>
            <h2>HTML</h2>
            <div className="flex text-sm items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[90%] rounded-md bg-green-500`}></div>
              </div>
              <span>90%</span>
            </div>
          </div>
          <div>
            <h2>CSS</h2>
            <div className="flex text-sm items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[80%] rounded-md bg-green-500`}></div>
              </div>
              <span>80%</span>
            </div>
          </div>
          <div>
            <h2>Javascript</h2>
            <div className="flex text-sm items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[70%] rounded-md bg-green-500`}></div>
              </div>
              <span>70%</span>
            </div>
          </div>
          <div>
            <h2>PHP</h2>
            <div className="flex text-sm items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[40%] rounded-md bg-green-500`}></div>
              </div>
              <span>40%</span>
            </div>
          </div>

          <div>
            <h2>MySQL</h2>
            <div className="flex text-sm items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[35%] rounded-md bg-green-500`}></div>
              </div>
              <span>35%</span>
            </div>
          </div>
        </div>
        <div className="text-white px-5 flex flex-col gap-5">
          <h1 className="font-bold md:text-[1.5vw] text-[3vw] tracking-widest font-serif">
            ABOUT ME
          </h1>
          <p className="md:text-[1.2vw] text-[2.4vw]" style={{ lineHeight: 2 }}>
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
            <a
              href="#contact"
              className="text-white font-bold md:text-[1vw] text-[2vw] duration active:scale-95 bg-blue-700/70 bg-gradient-to-r from-blue-700/70 to-indigo-950/40 px-[2vw] py-[1vh] rounded-[0.4vw]"
            >
              HIRE ME
            </a>
            <a
              href={resume}
              target="_blank"
              className="text-white font-bold md:text-[1vw] text-[2vw] border-[0.1vw] duration active:scale-95 border-blue-700/70 px-[2vw] py-[1vh] rounded-[0.4vw]"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;

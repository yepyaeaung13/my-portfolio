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
        className="flex flex-col md:flex-row md:items-center gap-5 justify-between md:py-10 md:px-16 py-5"
        id="about"
      >
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex text-white flex-col gap-3 px-5"
        >
          <div>
            <h1 className="text-lg font-bold font-serif">Programming Skills</h1>
          </div>
          <div>
            <h2>HTML</h2>
            <div className="flex items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[90%] rounded-md bg-green-500`}></div>
              </div>
              <span>90%</span>
            </div>
          </div>
          <div>
            <h2>CSS</h2>
            <div className="flex items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[80%] rounded-md bg-green-500`}></div>
              </div>
              <span>80%</span>
            </div>
          </div>
          <div>
            <h2>Javascript</h2>
            <div className="flex items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[70%] rounded-md bg-green-500`}></div>
              </div>
              <span>70%</span>
            </div>
          </div>
          <div>
            <h2>PHP</h2>
            <div className="flex items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[60%] rounded-md bg-green-500`}></div>
              </div>
              <span>60%</span>
            </div>
          </div>

          <div>
            <h2>MySQL</h2>
            <div className="flex items-center gap-2">
              <div className="bg-white h-2 w-80 rounded-md">
                <div className={`h-full w-[50%] rounded-md bg-green-500`}></div>
              </div>
              <span>50%</span>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-white px-5 flex flex-col gap-5"
        >
          <h1 className="font-bold text-lg tracking-widest font-serif">
            ABOUT ME
          </h1>
          <p className="font-medium leading-6 tracking-wider text-justify">
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
          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="text-black bg-white px-2 py-1 rounded-md hover:bg-transparent hover:text-white border duration-300"
            >
              Hire Me
            </a>
            <a
              href={resume}
              target="_blank"
              className="flex gap-1 text-black bg-white px-2 py-1 rounded-md hover:bg-transparent hover:text-white border duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              <span>CV</span>
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;

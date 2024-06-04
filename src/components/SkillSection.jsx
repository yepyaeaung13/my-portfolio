import React, { useState } from "react";
import htmlPic from "/html.png";
import cssPic from "/css-3.png";
import tailwindcssPic from "/tailwindcss-logo.svg";
import jsPic from "/js.png";
import reactPic from "/react.svg";
import phpPic from "/php.svg";
import mysqlPic from "/mySQL.png";
import gitPic from "/git.png";
import Container from "./Container";

const SkillSection = () => {
  const [softSkill, setSoftSkill] = useState([
    "Problem solving",
    "Adaptability",
    "Time management",
    "Creativity",
    "Teamwork",
  ]);
  return (
    <Container>
      <div
        className="text-white flex flex-col justify-center gap-[2vw]"
        id="skills"
      >
        <h1 className="text-center md:text-[1.5vw] text-[3vw] font-bold font-serif my-[5vw]">
          SKILLS
        </h1>
        <div className="flex flex-col gap-[5vw]">
          <div className="flex flex-wrap md:gap-[2vw] gap-[10vw] justify-center md:justify-between">
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img src={htmlPic} alt="icon" className="md:w-[2.5vw] w-[5vw]" />
              <p className="md:text-[1vw] text-[2vw]">HTML5</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img src={cssPic} alt="icon" className="md:w-[2.5vw] w-[5vw]" />
              <p className="md:text-[1vw] text-[2vw]">CSS3</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img
                src={tailwindcssPic}
                alt="icon"
                className="md:w-[2.5vw] w-[5vw]"
              />
              <p className="md:text-[1vw] text-[2vw]">TailwindCSS</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img src={jsPic} alt="icon" className="md:w-[2.5vw] w-[5vw]" />
              <p className="md:text-[1vw] text-[2vw]">JAVASCRIPT</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img src={reactPic} alt="icon" className="md:w-[2.5vw] w-[5vw]" />
              <p className="md:text-[1vw] text-[2vw]">ReactJS</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 180 180"
                width={50}
                className="md:w-[2.5vw] w-[5vw]"
              >
                <mask
                  height={180}
                  id=":r8:mask0_408_134"
                  maskUnits="userSpaceOnUse"
                  width={180}
                  x={0}
                  y={0}
                  style={{ maskType: "alpha" }}
                >
                  <circle cx={90} cy={90} fill="black" r={90} />
                </mask>
                <g mask="url(#:r8:mask0_408_134)">
                  <circle
                    cx={90}
                    cy={90}
                    data-circle="true"
                    fill="black"
                    r={90}
                  />
                  <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                    fill="url(#:r8:paint0_linear_408_134)"
                  />
                  <rect
                    fill="url(#:r8:paint1_linear_408_134)"
                    height={72}
                    width={12}
                    x={115}
                    y={54}
                  />
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id=":r8:paint0_linear_408_134"
                    x1={109}
                    x2="144.5"
                    y1="116.5"
                    y2="160.5"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id=":r8:paint1_linear_408_134"
                    x1={121}
                    x2="120.799"
                    y1={54}
                    y2="106.875"
                  >
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
              <p className="md:text-[1vw] text-[2vw]">NextJS</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img src={phpPic} alt="icon" className="md:w-[3vw] w-[6vw]" />
              <p className="md:text-[1vw] text-[2vw]">PHP</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img src={mysqlPic} alt="icon" className="md:w-[3vw] w-[6vw]" />
              <p className="md:text-[1vw] text-[2vw]">SQL</p>
            </div>
            <div className="flex flex-col gap-[1vw] items-center justify-end">
              <img src={gitPic} alt="icon" className="md:w-[2.5vw] w-[5vw]" />
              <p className="md:text-[1vw] text-[2vw]">Git</p>
            </div>
          </div>
          <div className="flex gap-[1vw] flex-col md:mb-[15vh] mb-[3vh] md:p-0 p-[2vw]">
            <h1 className="md:text-[1.5vw] text-[3vw]">Soft Skills</h1>
            <div className="flex flex-wrap gap-[3vw]">
              {softSkill.map((el, idx) => {
                return (
                  <div className="flex items-center gap-[0.5vw]" key={idx}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="md:w-[1vw] w-[2.5vw]"
                    >
                      {/*!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.*/}
                      <path
                        d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
                        fill="white"
                      />
                    </svg>
                    <p className="md:text-[1.2vw] text-[2.4vw]">{el}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkillSection;

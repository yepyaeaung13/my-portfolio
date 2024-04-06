import React from "react";
import htmlPic from "./assets/html.png";
import cssPic from "./assets/css-3.png";
import tailwindcssPic from "./assets/tailwindcss-logo.svg";
import jsPic from "./assets/js.png";
import reactPic from "./assets/react.svg";
import expressPic from "./assets/expressJs.svg";
import mongodbPic from "./assets/MongoDB_Logo.png";
import phpPic from "./assets/php.svg";
import mysqlPic from "./assets/mySQL.png";
import gitPic from "./assets/git.png";

const SkillSection = () => {
  return (
    <div
      className="text-white flex flex-col justify-center gap-20 py-24"
      id="skills"
    >
      <h1 className="text-center font-bold">SKILLS</h1>
      <div className="flex gap-12 text-nowrap justify-between flex-wrap">
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={htmlPic} alt="icon" className="w-10" />
          <p className="mx-5">HTML5</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={cssPic} alt="icon" className="w-10" />
          <p className="mx-5">CSS3</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={tailwindcssPic} alt="icon" className="w-10" />
          <p className="mx-5">TailwindCSS</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={jsPic} alt="icon" className="w-10" />
          <p className="mx-5">JAVASCRIPT</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={reactPic} alt="icon" className="w-10" />
          <p className="mx-5">ReactJS</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={expressPic} alt="icon" className="w-14 bg-white" />
          <p className="mx-5">ExpressJS</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={mongodbPic} alt="icon" className="w-18 bg-white" />
          <p className="mx-5">Mongo DB</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={phpPic} alt="icon" className="w-14" />
          <p className="mx-5">PHP</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={mysqlPic} alt="icon" className="w-14" />
          <p className="mx-5">SQL</p>
        </div>
        <div className="flex flex-col gap-3 items-center justify-end w-24">
          <img src={gitPic} alt="icon" className="w-10" />
          <p className="mx-5">Git</p>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;

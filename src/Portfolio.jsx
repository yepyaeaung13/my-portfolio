import React from "react";
import ProjectCardRight from "./ProjectCardRight";
import ProjectCardLeft from "./ProjectCardLeft";
import todoAppPhoto from "./assets/todoapp.png";
import invoiceAppPhoto from "./assets/invoiceapp.png";
import shoppingAppPgoto from "./assets/shoppingcart.png";

const Portfolio = () => {
  return (
    <div className="text-white flex flex-col gap-10" id="portfolio">
      <h1 className="text-center font-bold py-10">PORTFOLIO</h1>
      <ProjectCardRight
        title={"PROJECT 1"}
        name={"To Do App"}
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa."
        }
        src={todoAppPhoto}
        className={"w-80 rounded duration-200 hover:scale-105 z-5"}
        tech={"Html Tailwindcss JS"}
      />
      <ProjectCardLeft
        title={"PROJECT 2"}
        name={"Invoice App"}
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa."
        }
        src={invoiceAppPhoto}
        className={"w-96 rounded duration-200 hover:scale-105 z-5"}
        tech={"Html Tailwindcss JS"}
      />
      <ProjectCardRight
        title={"PROJECT 3"}
        name={"E commerence"}
        text={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa."
        }
        src={shoppingAppPgoto}
        className={"w-96 rounded duration-200 hover:scale-105 z-5"}
        tech={"Html Tailwindcss JS"}
      />
      <div className="flex justify-center">
        <button className="font-bold text-sm bg-blue-500 bg-gradient-to-r from-blue-700/70 to-indigo-950/40 px-10 py-3 rounded-lg duration-200 active:scale-90">
          View more
        </button>
      </div>
    </div>
  );
};

export default Portfolio;

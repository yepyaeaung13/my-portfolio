import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import todoAppPhoto from "../assets/todoapp.png";
import invoiceAppPhoto from "../assets/invoiceapp.png";
import shoppingAppPgoto from "../assets/shoppingcart.png";
import Container from "./Container";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "To Do App",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa.",
      tech: "HTML TailwindCSS JS",
      code: "",
      url: "",
    },
    {
      id: Date.now(),
      title: "Invoice App",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa.",
      tech: "HTML TailwindCSS JS",
      code: "",
      url: "",
    },
    {
      id: Date.now(),
      title: "E Shop App",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, culpa.",
      tech: "HTML TailwindCSS JS",
      code: "",
      url: "",
    },
  ]);
  return (
    <Container>
      <div
        className="text-white flex flex-col mb-[15vh] gap-[3vw]"
        id="portfolio"
      >
        <h1 className="text-center text-[1.5vw] my-[10vh] font-bold font-serif">
          PORTFOLIO
        </h1>
        <div className="flex md:flex-row sm:flex-col justify-between gap-[2vw]">
          {projects.map((project, idx) => {
            return <ProjectCard project={project} key={idx} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;

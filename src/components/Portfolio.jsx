import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import todoAppPhoto from "/todoapp.png";
import invoiceAppPhoto from "/invoiceapp.png";
import blogPhoto from "/blog.png";
import eShopPhoto from "/e-shop.png";
import shoppingPhoto from "/shoppingcart.png";
import ip from "/ip.png";
import Container from "./Container";
import FreelanceProject from "./FreelanceProject";

const Portfolio = () => {
  const [active, setActive] = useState(true);
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "Music App",
      description:
        "Features - create Account, login account, password validation, add songs to playlist and liked, delete songs from playlist and liked, listen songs",
      tech: "HTML TailwindCSS NextJS PostgreSQL Firebase-Storage",
      code: "https://github.com/yepyaeaung13/nextjs-music-app",
      url: "https://nextjs-music-app-w7op.vercel.app/",
      img: "/music-app.png",
    },
    {
      id: Date.now(),
      title: "To Do App",
      description:
        "Features - create task, update task, delete task, checked task, count task, count finished task",
      tech: "HTML TailwindCSS ReactJS",
      code: "https://github.com/yepyaeaung13/react-vite-to-do-app",
      url: "https://react-vite-to-do-app.vercel.app/",
      img: todoAppPhoto,
    },
    {
      id: Date.now(),
      title: "Invoice App",
      description:
        "Features - create new items in Inventory. add items, update items qty and delete items in invoice table",
      tech: "HTML TailwindCSS ReactJS Flowbite-UI",
      code: "https://github.com/yepyaeaung13/react-invoice-app",
      url: "https://react-invoice-app-rho.vercel.app/",
      img: invoiceAppPhoto,
    },
    {
      id: Date.now(),
      title: "Blog",
      description:
        "Features - login/logout form, create post,filter posts, user profile, view my blog posts",
      tech: "HTML TailwindCSS nextJS",
      code: "https://github.com/yepyaeaung13/blog-nextjs",
      url: "https://blog-nextjs-mu-pearl.vercel.app/",
      img: blogPhoto,
    },
    {
      id: Date.now(),
      title: "E shop",
      description:
        "Features - used fakestore api, home page,products page contact page and cart page - add items,delete items,update qty,summary cart lists",
      tech: "HTML TailwindCSS nextJS",
      code: "https://github.com/yepyaeaung13/e-shop-nextjs",
      url: "https://e-shop-nextjs-eta.vercel.app/",
      img: eShopPhoto,
    },
    {
      id: Date.now(),
      title: "Shopping Cart",
      description:
        "Features - filter items, cart drawer, add items, delete items, update qty",
      tech: "HTML TailwindCSS VanillaJS",
      code: "https://github.com/yepyaeaung13/vite-shopping-app",
      url: "https://vite-shopping-app-teal.vercel.app/",
      img: shoppingPhoto,
    },
    {
      id: Date.now(),
      title: "Hotel Landing Page",
      description:
        "Features - Home section,room section,facilities section, contact section",
      tech: "HTML TailwindCSS reactJS",
      code: "https://github.com/yepyaeaung13/react-hotel-landing-page",
      url: "https://react-hotel-landing-page.vercel.app/",
      img: "/hotel-cover.jpg",
    },
  ]);
  const [freelanceProjects, setFreelanceProjects] = useState([
    {
      id: Date.now(),
      title: "Intelligence Power Co.Ltd",
      description:
        "Features - create Account, login account, password validation, add songs to playlist and liked, delete songs from playlist and liked, listen songs",
      tech: "HTML TailwindCSS JS PHP MySQL",
      code: "https://github.com/yepyaeaung13/ip-php",
      url: "https://www.intelligencepower.net",
      img: "ip.png",
    },
  ]);

  const activeHandler = () => {
    setActive(true);
  };
  const inactiveHandler = () => {
    setActive(false);
  };
  return (
    <Container>
      <div
        className="text-white flex flex-col md:px-16 px-2 py-5 gap-5"
        id="portfolio"
      >
        <h1 className="text-center font-bold text-lg tracking-widest font-serif">
          PORTFOLIO
        </h1>

        <div className="flex flex-col gap-5">
          <nav className="w-full flex justify-center gap-2">
            <button
              onClick={activeHandler}
              className={`px-5 py-1 border rounded-md hover:bg-white hover:text-black duration-150 ${
                active ? "bg-white text-black" : ""
              }`}
            >
              Personal Projects
            </button>
            <button
              onClick={inactiveHandler}
              className={`px-5 py-1 border rounded-md hover:bg-white hover:text-black duration-150 ${
                !active ? "bg-white text-black" : ""
              }`}
            >
              Freelance Projects
            </button>
          </nav>
          <div
            className={`grid md:grid-cols-3 grid-cols-1 gap-5 ${
              active ? "block" : "hidden"
            }`}
          >
            {projects.map((project, idx) => {
              return <ProjectCard project={project} key={idx} />;
            })}
          </div>
          <div>
            <div
              className={`grid md:grid-cols-3 grid-cols-1 gap-5 ${
                !active ? "" : "hidden"
              }`}
            >
              {freelanceProjects.map((freelanceProject, idx) => {
                return (
                  <FreelanceProject project={freelanceProject} key={idx} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;

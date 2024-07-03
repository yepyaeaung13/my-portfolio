import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import todoAppPhoto from "/todoapp.png";
import invoiceAppPhoto from "/invoiceapp.png";
import blogPhoto from "/blog.png";
import eShopPhoto from "/e-shop.png";
import shoppingPhoto from "/shoppingcart.png";
import Container from "./Container";

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: Date.now(),
      title: "Music App",
      description:
        "Features - create Account, login account, password validation, add songs to playlist and liked, delete songs from playlist and liked, listen songs",
      tech: "HTML TailwindCSS NextJS PostgreSQL Firebase Storage",
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
      title: "e shop",
      description:
        "Features - used fakestore api, home page,products page contact page and cart page - add items,delete items,update qty,summary cart lists",
      tech: "HTML TailwindCSS nextJS",
      code: "https://github.com/yepyaeaung13/e-shop-nextjs",
      url: "https://e-shop-nextjs-eta.vercel.app/",
      img: eShopPhoto,
    },
    {
      id: Date.now(),
      title: "shopping",
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
  return (
    <Container>
      <div
        className="text-white flex flex-col md:mb-[15vh] mb-[5vh] gap-[3vw] md:p-0 px-[2vw]"
        id="portfolio"
      >
        <h1 className="text-center md:text-md text-sm md:my-[10vh] my-[3vh] font-bold font-serif">
          PORTFOLIO
        </h1>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-[-10vh] md:gap-[2vw] gap-[4vw]">
          {projects.map((project, idx) => {
            return <ProjectCard project={project} key={idx} />;
          })}
        </div>
      </div>
    </Container>
  );
};

export default Portfolio;

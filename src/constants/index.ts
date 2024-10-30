
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: "Linkedin",
    src: "/icons8-linkedin.svg",
    href: "https://www.linkedin.com/in/nihal-naveed/",
  },
  {
    name: "GitHub",
    src: "/icons8-github.svg",
    href: "https://github.com/nihalnaveed12",
  },
  {
    name: "Discord",
    src: "/discord.svg",
    href: "https://discord.com/channels/@me",
  },
];
export const Projects = [
  {
    title: "Full Stack Blog App",
    text: "I developed a full-stack blog web application with a user-friendly interface. Built using React.js and Tailwind CSS,The backend, powered by Appwrite",
    src: "/blogss.png",
    Link:"https://blog-website-nihal.vercel.app/"
  },
  {
    title: "Modern Portfolio Website",
    text: "Created a responsive and visually engaging personal portfolio website using React Js ,Tailwind CSS and GSAP. This project highlights my journey in web development",
    src: "/portfolio-ss.png",
    Link:"https://nihalnaveed-portfolio.vercel.app/"
  },
  {
    title: "Todo List App",
    text: "Built a responsive To-Do List app with React, Context API, and Tailwind CSS, featuring task management with add, edit, and delete functions for a seamless user experience. Hosted on Netlify.",
    Link:"https://to-do-list-nihal.netlify.app/",
    src: "todo-pic.png"
  },
  {
    title: "Recipe Search App",
    text: "This app allows users to search for recipes by simply entering an ingredient. It pulls recipe information like the title, and instructions using the Edamam API.",
    src: "/recipe-ss.png",
    Link:"https://recipe-search-app-woad.vercel.app/"
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/skills",
    icon: RxPerson,
    link: "/skills",
  },
  {
    name: "/projects",
    icon: RxDashboard,
    link: "/projects",
  },
  {
    name: "/contact",
    icon: RxClipboard,
    link: "/contact",
  },
];

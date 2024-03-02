// ** imgs
import myWebsiteImg from "public/imgs/myWebsiteImg.png";
import iotmedImg from "public/imgs/iotmedImg.png";
import ivfImg from "public/imgs/ivfImg.png";
import yelpPlaceImg from "public/imgs/yelpPlaceImg.png";
import socialmediaImg from "public/imgs/socialmediaImg.png";
import jobifyImg from "public/imgs/jobifyImg.png";
import myWebsite1Img from "public/imgs/myWebsite1Img.png";
import comingSoonImg from "public/imgs/comingSoonImg.webp";

export const projectsContent = {
  title: "Projects I was working on",
  otherProjectsTitle: "Other projects",
  otherProjectsDescription:
    "Those are very simple projects I was working on while learning new technologies. They are not as complex as projects above but I learned a lot from them.",
  projects: [
    {
      title: "Crypto App",
      description:
        "Project I am working on right now with my friend who is expert in crypto world. I just do full-stack app :)",
      technologies: ["Next.js", "MUI", "Stripe"],
      image: comingSoonImg,
    },
    {
      title: "My personal website",
      description:
        "It's the web page you are currently on. I created it to showcase my skills and projects I was working on. Fisrt version was created in Vite but I needed to update design and wanted to add contact me page so for v2.0 I choosed Next.js.",
      redirect: "/projects/my-first-website",
      technologies: ["Next.js", "TailwindCSS"],
      image: myWebsiteImg,
    },
    {
      title: "IVF",
      description:
        "This project was about creating a web and mobile application for IVF clinics. It's a complex system with many features like scheduling appointments, managing patients, creating medical reports, messaging, tasks system, calendar, adding and downloading files, etc. I was working on frontend part of the project alone.",
      technologies: ["Next.js", "MUI", "Axios", "Keycloak", "Capacitor"],
      image: ivfImg,
    },
    {
      title: "IOTMED",
      description:
        "Because of success of previous project (IVF), this project is build on top of IVF system. My company had a project with devices called Coins, that were mesuring all kinds of medical values of patients. Later with added connection on all sort of devices mainly Garmin and Omron. There are some new features like managing devices, alerting doctors if something is bad, plotting charts for devices data and ekg/ecg, etc.",
      technologies: ["Next.js", "MUI", "Axios", "Keycloak"],
      image: iotmedImg,
    },
  ],
  otherProjects: [
    {
      title: "Jobify",
      description:
        "Website from my last Udemy course I took where I was learning whole MERN stack. Course is called 'MERN 2023 Edition - MongoDB, Express, React and NodeJS' by John Smilga. It's a simple e-commerce app where you can add, edit, delete products and comment them.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: jobifyImg,
    },
    {
      title: "Social Media App",
      description:
        "Another website from Udemy course called 'React for the rest of us' by Brad Schiff. On this website I leaned basic of react and best practicies. It's a simple social media app where you can add, edit, delete posts and comment them. It's also using React-router for routing.",
      technologies: ["React", "React-router", "Axios"],
      image: socialmediaImg,
    },
    {
      title: "YelpPlace",
      description:
        "It's full-stack website from Udemy course called 'The Web Developer Bootcamp' by Colt Steele. This was my first real website. In course it was YelpCamp but I made my own version YelpPlace. It's a simple website where you can add, edit, delete places to live and comment them.  It's using Google Maps API and MongoDB for storing data.",
      technologies: ["Node.js", "EJS", "MongoDB", "Express", "Bootstrap"],
      image: yelpPlaceImg,
    },
    {
      title: "My personal website v1.0",
      description: "My old personal website.",
      technologies: ["React"],
      image: myWebsite1Img,
    },
  ],
};

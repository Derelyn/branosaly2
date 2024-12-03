// ** imgs
import myWebsiteImg from "public/imgs/projects/myWebsite.webp";
import iotmedImg from "public/imgs/projects/iotmed.webp";
import ivfImg from "public/imgs/projects/ivf.webp";
import yelpPlaceImg from "public/imgs/projects/yelpPlace.webp";
import socialmediaImg from "public/imgs/projects/socialmedia.webp";
import jobifyImg from "public/imgs/projects/jobify.webp";
import enviroImg from "public/imgs/projects/enviro.webp";
import myWebsite1Img from "public/imgs/projects/myWebsite1.webp";
import myWebsiteMobileImg from "public/imgs/projects/myWebsiteMobile.webp";
import enviroMobileImg from "public/imgs/projects/enviroMobile.webp";
import iotmedMobileImg from "public/imgs/projects/iotmedMobile.webp";
import ivfMobileImg from "public/imgs/projects/ivfMobile.webp";

export const projectsContent = {
  title: "Latest projects I was working on",
  otherProjectsTitle: "Other projects",
  otherProjectsDescription:
    "Those are very simple projects I was working on while learning new technologies. They are not as complex as projects above but I learned a lot from them.",
  projects: [
    {
      title: "Enviro project",
      description:
        "I developed the frontend for a dashboard visualizing data from specialized meteorological stations created by doctors at FEI STU. The stations were displayed on interactive Leaflet maps, allowing users to monitor weather conditions in real-time. Built on top of the IoTMed project, this platform provided a seamless interface for accessing and analyzing environmental data.",
      redirect: "/projects/my-first-website",
      technologies: ["Next.js", "MUI", "Axios", "Leaflet"],
      image: enviroImg,
      mobileImage: enviroMobileImg,
    },
    {
      title: "My personal website",
      description:
        "This is the website you're currently browsing, which I built to showcase my skills and projects. The first version was developed using React and Vite, but for version 2.0, I redesigned the site and added a 'Contact Me' page, transitioning the project to Next.js for improved performance and SEO capabilities.",
      redirect: "/projects/my-first-website",
      technologies: ["Next.js", "TailwindCSS", "nodemailer"],
      image: myWebsiteImg,
      mobileImage: myWebsiteMobileImg,
    },
    {
      title: "IoTMed",
      description:
        "Expanding on a previous IVF project. The platform integrates with our medical devices called Coins and also with other commercial devices such as Garmin and Omron to track patient metrics. My role involved creating a responsive, user-friendly system that allowed healthcare professionals to manage devices, patients, receive real-time alerts, and visualize patient data. Patients had mobile app where they could check their data.",
      technologies: ["Next.js", "MUI", "Axios", "Keycloak"],
      image: iotmedImg,
      mobileImage: iotmedMobileImg,
    },
    {
      title: "IVF",
      description:
        "I independently developed the frontend for a comprehensive web and mobile application designed for IVF clinics. The system included a wide range of features, such as appointment scheduling, patient management, medical report creation, messaging, task management, file handling and much more. My work focused on building an intuitive, user-friendly interface that seamlessly handled these complex functionalities across both web and mobile platforms.",
      technologies: ["Next.js", "MUI", "Axios", "Keycloak", "Capacitor"],
      image: ivfImg,
      mobileImage: ivfMobileImg,
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

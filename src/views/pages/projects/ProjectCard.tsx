// ** deps and libs
import { useState } from "react";
import Image from "next/image";
import classNames from "clsx";
import Link from "next/link";
import { OneProjectType } from "@/types/contentTypes";

const ProjectCard = ({ item }: { item: OneProjectType }) => {
  // ** state
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      aria-label="project1"
      className="dark:bg-gradient-mgray-900 group grid items-center bg-mgray-900 transition-all duration-200 md:grid-cols-2 md:gap-10 dark:md:shadow-lg"
    >
      {/* images with animation */}
      <a
        href=""
        aria-label="project1"
        className="relative block h-80 w-full p-4"
      >
        <div className="relative h-full w-full overflow-hidden transition-transform duration-300 ease-out md:group-hover:scale-105">
          <div
            className={classNames(
              "absolute left-0 top-0 z-10 hidden h-full w-[120%] origin-bottom skew-x-6 transform-gpu bg-mgray-900 transition-transform duration-700 md:block",
              { "-translate-x-full": isLoaded },
            )}
          ></div>
          <Image
            onLoad={() => setIsLoaded(true)}
            alt="item-image"
            src={item.image}
            className="image-portfolio object-contain object-left md:transform-gpu md:transition-all md:duration-700"
            priority
          />

          {/* mobile variant */}
          {/* <div className="absolute top-0 right-4 z-10 h-full w-full">
          <div className="relative overflow-hidden h-full w-full transition-transform md:group-hover:scale-105 origin-right duration-500 ease-out drop-shadow-2xl">
            <div className="absolute left-0 top-0 z-10 hidden h-full w-[120%] bg-mgray-900 origin-bottom skew-x-6 transform-gpu transition-transform duration-700"></div>
            <img className="md:transform-gpu md:transition-all md:duration-700 object-contain object-right image-portfolio" />
          </div>
        </div> */}
        </div>
      </a>
      <div className="p-4 md:p-10 md:pl-0">
        <a aria-label="project1" href="" className="">
          <h4 className="group-hover:text-accent mt-6 transition-colors dark:group-hover:text-mlime-base">
            {item.title}
          </h4>
        </a>
        <small className="mt-6 block">
          {item.description}&nbsp;
          {item.linkText && (
            <Link href={"/"} className="text-mgreen-base underline">
              {item.linkText}
            </Link>
          )}
        </small>
        <div className="mb-2 mt-6 font-bold dark:text-blue-500">
          Technologies
        </div>
        <div className="mt-2">
          {item.technologies.map((tech, index) => (
            <span
              key={index}
              className="m-0.5 inline-block select-none bg-mgreen-base/10 px-3 py-1 font-mono text-sm uppercase text-mgreen-500 no-underline lg:mr-2"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

// ** deps and libs
import { Typewriter } from "react-simple-typewriter";
import { Icon } from "@iconify/react";
import classNames from "clsx";
import homeContent from "@/content/homeContent";

// ** import components
import Reveal from "@/views/components/RevealAnimation";

const HomeLeft = () => {
  return (
    <div className="bz-10 mt-6 basis-full md:m-0">
      {/* text */}
      <Reveal
        animation="fade-in slide-in-right"
        className={classNames("md:mr-52")}
      >
        <h1>
          <div className="inline-flex items-center">
            <Icon
              icon="ic:baseline-greater-than"
              fontSize={70}
              className="hidden shrink-0 grow-0 self-center text-[#71717A] md:block"
            />
            <div className="text-white">
              <Typewriter
                words={homeContent.typewriter}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={120}
                delaySpeed={2000}
              />
            </div>
          </div>
        </h1>
        <h1 className="text-gradient-lime my-6 md:my-10">
          {homeContent.title}
        </h1>
        <div className="my-6 md:my-12"></div>
        <p className="mt-5">{homeContent.description}</p>
      </Reveal>
      {/* rectangle */}
      <Reveal
        animation="fade-in slide-in-left"
        className={classNames(
          "relative z-10 flex flex-wrap md:mt-12 md:bg-[#222225] md:shadow-2xl",
        )}
      >
        <div className="mt-8 h-px w-full bg-gradient-to-r from-blue-600 via-mgreen-base to-mlime-base md:mt-0"></div>
        {homeContent.stats.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "flex flex-1 flex-col items-center justify-center px-1 py-4 md:flex-row md:justify-start md:p-4",
            )}
          >
            <h2 className={classNames("m-0 font-bold", item.color, " md:pr-4")}>
              {item.number}
            </h2>
            <div className="text-white">{item.text}</div>
          </div>
        ))}
      </Reveal>
      {/* button */}
      <div className="mt-6 md:mt-12">
        <a className="group peer relative inline-flex cursor-pointer select-none items-center justify-center leading-normal no-underline focus:outline-none md:peer-even:ml-6">
          <div className="z-10 flex h-full w-full transform-gpu border-4 border-transparent bg-white px-10 py-5 font-mono text-lg text-black transition-transform hover:translate-x-2 hover:translate-y-2 group-active:border-mlime-base">
            <span className="mx-auto">Download Resume</span>
          </div>
          <div className="absolute left-2 top-2 h-full w-full bg-gradient-to-r from-[#cafe00] to-[#27c75e]"></div>
        </a>
      </div>
    </div>
  );
};

export default HomeLeft;

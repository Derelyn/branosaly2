// ** deps and libs
import { Typewriter } from "react-simple-typewriter";
import { Icon } from "@iconify/react";
import aboutMeContent from "@/content/aboutMeContent";

const AboutHeader = () => {
  return (
    <div className="bg-gradient-to-r from-mgray-900 to-mgray-800 p-6 text-white md:p-12">
      <h3 className="mb-2">{aboutMeContent.title}</h3>
      <h3 className="m-0 inline-flex items-center">
        <Icon
          icon="ic:baseline-greater-than"
          fontSize={45}
          className="hidden shrink-0 grow-0 self-center text-mgray-500 md:block"
        />
        <div className="text-gradient-lime">
          <Typewriter
            words={aboutMeContent.typewriter}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            delaySpeed={2000}
          />
        </div>
      </h3>
    </div>
  );
};

export default AboutHeader;

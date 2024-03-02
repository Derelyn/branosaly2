import aboutMeContent from "@/content/aboutMeContent";
import { Icon } from "@iconify/react";

// ** import components
import Reveal from "@/views/components/RevealAnimation";

const AboutSkills = () => {
  return (
    <div className="grid grid-cols-1 items-start divide-y divide-mgray-700 drop-shadow-xl">
      {aboutMeContent.skills.map((skills, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-mgray-900 to-mgray-800 p-6 md:px-12 md:py-8"
        >
          <p className="col-span-3 mb-6 mt-0 self-center border-l-2 border-mlime-500 pl-3 text-white">
            {skills.name}
          </p>
          <div className="grid-cols-fluid grid gap-x-8 gap-y-3 [--tw-fluid-col-min:16rem]">
            {skills.content.map((skill, index) => (
              <Reveal delay={index * 200} animation="fade-in" key={skill.id}>
                <div className="flex items-center text-[#D1D5DB]">
                  <Icon
                    icon={skill.icon}
                    height={28}
                    width={28}
                    className="mr-3 h-7 w-7 fill-current text-mgray-500"
                  />
                  &nbsp;&nbsp;&nbsp;
                  <small className="font-bold">{skill.name}</small>
                  <div className="ml-auto space-x-px">
                    {Array.from(Array(skill.power).keys()).map((i) => (
                      <span
                        key={i}
                        className="inline-block h-3.5 w-3.5 bg-gradient-to-tr from-[#1E50D9] to-[#3A80F5]"
                      ></span>
                    ))}
                    {Array.from(Array(5 - skill.power).keys()).map((i) => (
                      <span
                        key={i}
                        className="inline-block h-3.5 w-3.5 bg-mgray-700"
                      ></span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSkills;

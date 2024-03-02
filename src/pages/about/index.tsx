// ** import components
import AboutHeader from "@/views/pages/aboutMe/AboutHeader";
import AboutDescription from "@/views/pages/aboutMe/AboutDescription";
import AboutImageLeft from "@/views/pages/aboutMe/AboutImageLeft";
import AboutMyHistory from "@/views/pages/aboutMe/AboutMyHistory";
import AboutSkills from "@/views/pages/aboutMe/AboutSkills";

const About = () => {
  return (
    <>
      <div className="mx-auto md:flex fill-available">
        <AboutImageLeft />
        <div className="basis-2/3">
          <AboutHeader />
          <AboutSkills />
          <AboutDescription />
        </div>
      </div>
      <AboutMyHistory />
    </>
  );
};

export default About;

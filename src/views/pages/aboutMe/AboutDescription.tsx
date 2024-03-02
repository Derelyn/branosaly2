import aboutMeContent from "@/content/aboutMeContent";

// ** import components
import Reveal from "@/views/components/RevealAnimation";

const AboutDescription = () => {
  return (
    <Reveal
      animation={"fade-in slide-in-top"}
      className="bg-gradient-to-r from-mgray-900 via-mgray-900 to-[#202222] p-6 text-mgray-200 md:p-12"
    >
      {aboutMeContent.description.map((description, index) => (
        <div key={index}>
          <h5>
            <span className="text-mgray-400">{description.no}</span>&nbsp;
            {description.title}
          </h5>
          <p className="my-5">{description.content}</p>
        </div>
      ))}
    </Reveal>
  );
};

export default AboutDescription;

import aboutMeContent from "@/content/aboutMeContent";

// ** import components
import Reveal from "@/views/components/RevealAnimation";

const AboutMyHistory = () => {
  return (
    <div className="w-full flex-wrap justify-between bg-white p-6 md:flex">
      {aboutMeContent.history.map((history, index) => (
        <div key={index} className="flex-1 md:p-12">
          <h3 className="pb-6 text-mgray-900">{history.name}</h3>
          <Reveal
            animation="fade-in scale-x"
            className="h-1.5 bg-gradient-to-r from-mgray-900 via-mgreen-base to-mlime-base"
          ></Reveal>
          <div className="mt-6 flex flex-col text-mgray-900 md:mt-12 ">
            {history.data.map((data) => (
              <div key={data.id}>
                <div className="flex">
                  <div>
                    <h6 className="mb-4 pr-1">{data.company}</h6>
                    <div>{data.position}</div>
                  </div>
                  <small className="ml-auto shrink-0 opacity-60">
                    {data.year}
                  </small>
                </div>
                <hr className="my-6" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutMyHistory;

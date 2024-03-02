import { Icon } from "@iconify/react";
import { contactLinks, contactContent } from "@/content/contactContent";

// ** import components
import Reveal from "@/views/components/RevealAnimation";

const ContactMeLeft = () => {
  return (
    <Reveal animation="fade-in slide-in-right" className="basis-1/3 lg:mr-14">
      <div className="-mx-3 -mt-3 md:mx-0 md:mb-8 md:mt-0">
        <div className="bg-gradient-to-b from-mgray-800 to-mgray-800 p-6 pb-2 md:bg-none md:p-0">
          <h3 className="text-gradient-lime">{contactContent.title}</h3>
        </div>
      </div>
      <p>{contactContent.text}</p>
      <div className="my-6 md:my-12"></div>
      {contactLinks.map((item, index) => (
        <div key={index} className="mb-4 font-bold text-mgray-300">
          <Icon
            icon={item.icon}
            fontSize={26}
            className="mr-2 inline fill-current align-middle text-mgray-500"
          />
          {item.name}:&nbsp;
          <a
            className="border-b border-mlime-base text-white hover:border-b-2"
            href={item.link}
          >
            {item.text}
          </a>
        </div>
      ))}
    </Reveal>
  );
};

export default ContactMeLeft;

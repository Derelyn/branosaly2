// ** import components
import ContactMeLeft from "@/views/pages/contactMe/ContactMeLeft";
import ContactMeRight from "@/views/pages/contactMe/ContactMeRight";

const ContactMe = () => {
  return (
    <div className="my-auto p-3 md:p-6 lg:p-12">
      <div className="items-start lg:flex">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMe;

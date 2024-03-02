// ** deps
import { useState } from "react";
import { fetchPostMail } from "@/services/apiCalls";
import { FormDataMailType } from "@/types/mailType";

// ** import data
import { contactForm } from "@/content/contactContent";

// ** import components
import Reveal from "@/views/components/RevealAnimation";

const ContactMeRigth = () => {
  // ** states
  const [signal, setSignal] = useState("");
  const [formData, setFormData] = useState<FormDataMailType>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: 0,
    message: "",
  });

  // ** handlers
  const handleChangeEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetchPostMail(formData);
    if (response.status === "success") {
      setSignal("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phoneNumber: 0,
        message: "",
      });
    } else if (response.status === "error") {
      setSignal("error");
    }
  };

  return (
    <Reveal
      animation="fade-in zoom-in"
      className="md:with-back-plate max-w-3xl border border-mgray-700 md:before:bg-mgray-700"
    >
      <form onSubmit={handleSubmitEmail}>
        <div className="relative overflow-hidden shadow">
          <div className="bg-gradient-to-r from-mgray-900 to-mgray-800">
            <fieldset className="border-b border-dashed border-mgray-700">
              <div className="bg-mgray-800 p-5">
                <legend className="m-0 p-0">Your contact information</legend>
              </div>
              <div className="grid gap-2 p-5 md:grid-cols-3">
                {contactForm.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type={item.type}
                      name={item.name}
                      autoComplete={item.autoComplete}
                      className="block w-full border-b border-blue-600 bg-mgray-700/20  px-4  py-3 placeholder-mgray-400 focus:outline-none  focus:ring-0 focus:ring-[#55ff00]"
                      placeholder={item.placeholder}
                      required={item.required}
                      onChange={handleChangeEmail}
                    />
                  </div>
                ))}
              </div>
            </fieldset>
            <fieldset className="border-b border-dashed border-mgray-700">
              <div className="bg-mgray-800 p-5">
                <legend className="m-0 p-0">Tell me about offer</legend>
              </div>
              <div className="p-5">
                <div className="flex items-center">
                  <textarea
                    name="message"
                    className="block w-full border-0 border-b border-blue-600 bg-mgray-700/20 px-4  py-3 placeholder-mgray-400 focus:ring-blue-500"
                    placeholder="..."
                    rows={4}
                    onChange={handleChangeEmail}
                    required
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div className="bg-mgray-900 px-4 pb-8 pt-6 text-left md:px-8">
            {signal === "success" && (
              <div className="mb-4 block bg-green-500/5 px-4 py-2 text-green-500">
                Thank you! I will respond as soon as posible :)
              </div>
            )}
            {signal === "error" && (
              <div className="mb-4 block bg-red-500/5 px-4 py-2 text-red-500">
                Mail failed to sent, try again.
              </div>
            )}
            <button
              type="submit"
              className="group peer relative inline-flex w-full cursor-pointer select-none items-center justify-center leading-normal no-underline focus:outline-none sm:w-1/3 md:peer-even:ml-6"
            >
              <div className="z-10 flex h-full w-full transform-gpu border-4 border-transparent bg-white px-6 py-3 font-mono text-sm text-black transition-transform hover:translate-x-2 hover:translate-y-2 group-active:border-mlime-base">
                <span className="mx-auto">Submit</span>
              </div>
              <div className="absolute left-2 top-2 h-full w-full bg-gradient-to-r from-mlime-base via-mlime-300 to-mgreen-base"></div>
            </button>
          </div>
        </div>
      </form>
    </Reveal>
  );
};

export default ContactMeRigth;

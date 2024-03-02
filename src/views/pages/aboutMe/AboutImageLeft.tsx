import { useState } from "react";
import classNames from "clsx";
import aboutMeContent from "@/content/aboutMeContent";

// ** imgs
import myPhoto3 from "public/imgs/myPhoto3.jpg";
import Image from "next/image";

const AboutImageLeft = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative flex h-screen basis-1/3 flex-col justify-between pb-24 md:h-auto md:items-center md:py-12">
      <div className="absolute left-0 top-0 h-full w-full bg-mgray-900 grayscale">
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute left-0 top-0 z-10 hidden h-full w-[120%] origin-bottom skew-x-6 transform-gpu bg-mgray-900 transition-transform duration-700"></div>
          <Image
            onLoad={() => setIsLoaded(true)}
            className={classNames(
              "absolute h-full w-full object-cover md:transform-gpu md:transition-all md:duration-700",
              {
                "md:scale-125 md:opacity-0 md:will-change-transform": !isLoaded,
              },
            )}
            src={myPhoto3}
            alt="about"
            sizes="100vw"
            priority
          />
        </div>
        <div className='class="absolute to-black/90" left-0 top-0 z-20 h-full w-full bg-gradient-to-b from-transparent via-transparent'></div>
      </div>
      <div className="z-10 bg-black p-6 text-center">
        <h3 className="inline">{aboutMeContent.img.name}</h3>
      </div>
      <div className="z-10 p-6 text-center md:p-8">
        <h2>{aboutMeContent.img.buzzwords}</h2>
      </div>
    </div>
  );
};

export default AboutImageLeft;

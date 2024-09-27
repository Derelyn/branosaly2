// ** deps
import { useState } from "react";
import classNames from "clsx";

// ** images
import myPhoto3 from "public/imgs/myPhoto3.webp";
import myPhoto3Square from "public/imgs/myPhoto3-square.webp";
import Image from "next/image";

const HomeRight = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="inline-block shrink-0 md:order-2 md:-ml-40">
      <div className="image-white-background hidden md:block">
        <div className="relative overflow-hidden">
          <div
            className={classNames(
              "absolute left-0 top-0 z-10 hidden h-full w-[120%] origin-bottom skew-x-6 transform-gpu bg-mgray-900 transition-transform duration-700 md:block",
              { "-translate-x-full": isLoaded },
            )}
          ></div>
          <Image
            onLoad={() => setIsLoaded(true)}
            src={myPhoto3}
            width="500"
            height="718"
            alt="my-photo1"
            className="md:transform-gpu md:transition-all md:duration-700"
            priority
          />
        </div>
      </div>
      <div className="image-white-background md:hidden">
        <div className="relative overflow-hidden">
          <div
            className={classNames(
              "absolute left-0 top-0 z-10 hidden h-full w-[120%] origin-bottom skew-x-6 transform-gpu bg-mgray-900 transition-transform duration-700 md:block",
              { "-translate-x-full": isLoaded },
            )}
          ></div>
          <Image
            onLoad={() => setIsLoaded(true)}
            src={myPhoto3Square}
            width="200"
            height="200"
            alt="my-photo2"
            className="md:transform-gpu md:transition-all md:duration-700"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default HomeRight;

// ** deps and libs
import { Icon } from "@iconify/react";
import { navbarContent, mediaContent } from "@/content/navbarContent";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  // ** hooks
  const { pathname } = useRouter();

  return (
    <div
      className="fixed left-0 top-full z-40 w-full shrink-0 -translate-y-16 
    flex-col items-center justify-between bg-gradient-to-r from-mgray-900 to-mgray-800 transition-transform md:sticky md:top-20 
    md:flex md:h-[calc(100vh-theme(space.40))] md:w-16 md:translate-y-0"
    >
      <div className="grid w-full grid-cols-4 bg-gradient-to-b from-transparent to-mgray-800 md:block">
        {navbarContent.map((item, index) => (
          <div key={index}>
            {pathname === item.link ? (
              <Link
                href={item.link}
                aria-label={item.name}
                className="relative z-20 flex h-16 flex-col items-center justify-center bg-gradient-to-tr from-mgreen-base to-mlime-base text-black transition-all duration-300 md:h-auto md:py-4"
              >
                <div className="invisible absolute right-full top-0 hidden h-full min-w-max translate-x-10 items-center bg-blue-500 px-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 md:flex">
                  Home
                </div>
                <span className="absolute right-0 top-0 hidden h-full w-1 bg-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:block"></span>
                <Icon
                  icon={item.icon}
                  fontSize={30}
                  className="relative z-20 h-6 w-6"
                />
              </Link>
            ) : (
              <Link
                href={item.link}
                aria-label={item.name}
                className="group relative z-20 flex h-16 flex-col items-center justify-center bg-gradient-to-tr from-mgray-900 text-white transition-all duration-300 md:h-auto md:py-4 md:hover:from-blue-600 md:hover:to-blue-500"
              >
                <div className="invisible absolute right-full top-0 hidden h-full min-w-max translate-x-10 items-center bg-blue-500 px-4 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-x-0 group-hover:opacity-100 md:flex">
                  {item.name}
                </div>
                <div className="absolute bottom-2 right-2 hidden h-4 w-4 text-center font-mono text-xs font-bold md:block"></div>
                <span className="absolute right-0 top-0 hidden h-full w-1 bg-white/25 opacity-0 transition-opacity group-hover:opacity-100 md:block"></span>
                <Icon
                  icon={item.icon}
                  fontSize={30}
                  className="relative z-20 h-6 w-6"
                />
                <span className="mt-1 text-center text-xs md:hidden">
                  {item.name}
                </span>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="bg-accent flex w-full flex-wrap md:block md:bg-mgray-800">
        {mediaContent.map((item, index) => (
          <Link key={index} className="group block flex-1" href={item.link}>
            <Icon
              icon={item.icon}
              className="mx-auto h-12 w-6 text-white md:text-mgray-500 md:group-hover:text-mlime-base"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;

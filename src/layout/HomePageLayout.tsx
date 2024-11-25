// ** React Imports
import { ReactNode } from "react";

// ** import components
import Navbar from "./components/Navbar";

const HomePageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="dark relative flex min-h-screen w-full justify-center bg-black font-sans lg:px-4 xl:px-8">
      <div className="fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
      <div className="fixed left-0 top-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
      <div className="relative w-full max-w-screen-xl">
        <main className="relative h-full bg-gradient-to-r from-mgray-900 via-mgray-900 to-[#242427]">
          <div className="flex h-full w-full flex-col content-center items-center lg:py-4 xl:py-8">
            {children}
          </div>
        </main>
      </div>
      <div className="animate-fade-in fixed left-0 top-0 z-10 block h-0 w-full bg-black/90 md:hidden"></div>
      <Navbar />
    </main>
  );
};

export default HomePageLayout;

// ** React Imports
import { ReactNode } from "react";

// ** import components
import Navbar from "./components/Navbar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="dark relative flex min-h-screen w-full justify-center bg-black font-sans lg:px-4 xl:px-8">
      <div className="fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
      <div className="fixed top-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
      <div className="max-w-screen-xl w-full relative">
        <main className="h-full relative bg-gradient-to-r from-mgray-900 via-mgray-900 to-[#242427]">
          <div className="pb-20 flex items-center content-center flex-col w-full h-full lg:py-4 xl:py-8">
            {children}
          </div>
        </main>
      </div>
      <div className="fixed top-0 left-0 z-10 block w-full animate-fade-in bg-black/90 md:hidden h-0"></div>
      <Navbar />
    </main>
  );
};

export default Layout;

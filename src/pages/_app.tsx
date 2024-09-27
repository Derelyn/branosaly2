import type { AppProps } from "next/app";
import "@/styles/globals.css";

// ** import components
import Navbar from "@/layout/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="dark relative flex min-h-screen w-full justify-center bg-black font-sans lg:px-4 xl:px-8">
      <div className="fixed bottom-0 left-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
      <div className="fixed left-0 top-0 z-50 hidden w-full bg-black md:block lg:h-4 xl:h-8"></div>
      <div className="relative w-full max-w-screen-xl">
        <main className="relative h-full bg-gradient-to-r from-mgray-900 via-mgray-900 to-[#242427]">
          <div className="flex h-full w-full flex-col content-center items-center pb-20 lg:py-4 xl:py-8">
            <Component {...pageProps} />
          </div>
        </main>
      </div>
      <div className="animate-fade-in fixed left-0 top-0 z-10 block h-0 w-full bg-black/90 md:hidden"></div>
      <Navbar />
    </main>
  );
}

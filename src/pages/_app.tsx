import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import "@/styles/globals.css";

// ** import layouts
import HomePageLayout from "@/layout/HomePageLayout";
import ExcerciseLayout from "@/layout/ExcerciseLayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Map directories to their default layouts
  const directoryLayouts: Record<
    string,
    React.ComponentType<{ children: React.ReactNode }>
  > = {
    "/home": HomePageLayout,
    "/about": HomePageLayout,
    "/projects": HomePageLayout,
    "/contact": HomePageLayout,
    "/ximea": ExcerciseLayout,
    "/": HomePageLayout,
  };

  // Check the current path and find the matching layout
  const currentPath = Object.keys(directoryLayouts).find((path) =>
    router.pathname.startsWith(path),
  );

  // Use the directory layout or override it if `getLayout` is provided in the page
  const Layout =
    (Component as any).getLayout ||
    // @ts-ignore
    directoryLayouts[currentPath] ||
    ((page: React.ReactNode) => page);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

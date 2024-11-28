// ** MUI
import { ThemeProvider } from "@mui/material/styles";

// ** components
import ScrollToTopButton from "@/views/components/buttons/ScrollToTopButton";
import ximeaTheme from "@/theme/ximeaTheme";

// ** types
import type { ReactNode } from "react";

const ExcerciseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={ximeaTheme}>
      <div className="min-w-screen h-full min-h-screen w-full bg-[#18181B] bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:32px_32px]">
        {children}
      </div>
      <ScrollToTopButton />
    </ThemeProvider>
  );
};

export default ExcerciseLayout;

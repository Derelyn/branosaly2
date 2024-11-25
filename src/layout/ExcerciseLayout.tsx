import { ReactNode } from "react";

const ExcerciseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-w-screen h-full min-h-screen w-full bg-[#18181B]">
      {children}
    </div>
  );
};

export default ExcerciseLayout;

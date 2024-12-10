const HoverMovingButtonContent = ({
  buttonContent,
}: {
  buttonContent: string;
}) => {
  return (
    <>
      <div className="z-10 flex h-full w-full transform-gpu border-4 border-transparent bg-white px-10 py-5 font-mono text-lg text-black transition-transform hover:translate-x-2 hover:translate-y-2 group-active:border-mlime-base">
        <span className="mx-auto">{buttonContent}</span>
      </div>
      <div className="absolute left-2 top-2 h-full w-full bg-gradient-to-r from-[#cafe00] to-[#27c75e]"></div>
    </>
  );
};

export default HoverMovingButtonContent;

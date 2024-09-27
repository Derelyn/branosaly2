// ** deps
import Link from "next/link";

// ** import components
import HoverMovingButtonContent from "./HoverMovingButtonContent";

const HoverMovingButton = ({
  buttonContent,
  href,
  download,
}: {
  buttonContent: string;
  href: string;
  download?: boolean;
}) => {
  return (
    <div className="mt-6 md:mt-12">
      {download ? (
        <a
          href="CV_Branislav_Saly.pdf"
          download
          className="group peer relative inline-flex cursor-pointer select-none items-center justify-center leading-normal no-underline focus:outline-none md:peer-even:ml-6"
        >
          <HoverMovingButtonContent buttonContent={buttonContent} />
        </a>
      ) : (
        <Link
          href={href}
          className="group peer relative inline-flex cursor-pointer select-none items-center justify-center leading-normal no-underline focus:outline-none md:peer-even:ml-6"
        >
          <HoverMovingButtonContent buttonContent={buttonContent} />
        </Link>
      )}
    </div>
  );
};

export default HoverMovingButton;

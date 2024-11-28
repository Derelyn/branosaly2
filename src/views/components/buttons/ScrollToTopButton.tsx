import React from "react";

// ** MUI
import { useScrollTrigger, Zoom, Fab } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollToTopButton: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 200,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          position: "fixed",
          bottom: 18,
          right: 18,
          zIndex: 1000,
        }}
      >
        <Fab color="warning" size="medium" aria-label="scroll back to top">
          <ArrowUpwardIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

export default ScrollToTopButton;

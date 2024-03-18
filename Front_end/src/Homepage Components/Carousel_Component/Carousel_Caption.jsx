import React from "react";
import { motion } from "framer-motion";
import { carouselContent } from "../../Data/CarouselData";
import { useMediaQuery } from "@mui/material";
import { tabWidth } from "../../Media_Query/Tabview";

const Carousel_Caption = ({ index }) => {
  const tabView = useMediaQuery(`(${tabWidth})`);
  return (
    <div className="captionContainer">
      <motion.div
        style={{
          fontSize: tabView ? "30px" : "20px",
          fontWeight: "bolder",
          color: "rgb(255, 255, 255)",
        }}
      >
        {carouselContent[index].caption}
      </motion.div>
    </div>
  );
};

export default Carousel_Caption;

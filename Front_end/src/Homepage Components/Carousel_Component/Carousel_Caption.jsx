import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";
import { tabWidth } from "../../Media_Query/Tabview";
import { getCarouselSlides } from "../../Data/Get Data/CarouselData";
const Carousel_Caption = ({ imageIndex, carouselImages }) => {
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
        {carouselImages[imageIndex].caption}
      </motion.div>
    </div>
  );
};

export default Carousel_Caption;

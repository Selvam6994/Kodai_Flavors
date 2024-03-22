import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MobileWidth } from "../../Media_Query/Mobileview";
import { IconButton, Paper, useMediaQuery } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
//Carousel Animation
const varients = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? -500 : 500,
      opacity: 0,
    };
  },
};

// Carousel Button Properties
const prevButton = { position: "absolute", left: "20px", top: "50%" };
const nextButton = { position: "absolute", right: "20px", top: "50%" };

const Carousel_Images = ({
  carouselImages,
  nextImage,
  previousImage,
  imageIndex,
  imageDirection,
}) => {
  // Media Query
  const mobileView = useMediaQuery(`(${MobileWidth})`);

  const [autoScroll, setAutoScroll] = useState(true);

  document.addEventListener("scroll", () => {
    if (window.scrollY >= 150) {
      setAutoScroll(false);
    } else {
      setAutoScroll(true);
    }
  });
  useEffect(() => {
    const slideInterval = setInterval(() => {
      if (autoScroll) {
        nextImage();
      }
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [imageIndex, autoScroll]);

  return (
    <Paper
      elevation={8}
      className="sliderContainer"
      sx={{ borderRadius: "20px" }}
    >
      <AnimatePresence initial={false} custom={imageDirection}>
        <motion.img
          src={carouselImages[imageIndex].image}
          alt="Slider"
          className="slider"
          variants={varients}
          initial="initial"
          animate="animate"
          exit="exit"
          key={carouselImages[imageIndex].image}
          custom={imageDirection}
        />
      </AnimatePresence>

      {mobileView ? (
        <>
          <IconButton
            aria-label="prevButton"
            className="prevButton"
            style={prevButton}
            onClick={() => previousImage()}
          >
            <ArrowLeftIcon
              sx={{ fontSize: "60px", color: "rgb(255, 255, 255)" }}
            />
          </IconButton>
          <IconButton
            aria-label="nextButton"
            className="nextButton"
            style={nextButton}
            onClick={() => nextImage()}
          >
            <ArrowRightIcon
              sx={{ fontSize: "60px", color: "rgb(255, 255, 255)" }}
            />
          </IconButton>
        </>
      ) : (
        <></>
      )}
    </Paper>
  );
};

export default Carousel_Images;

import React, { useEffect } from "react";
import { IconButton, Paper, useMediaQuery } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carouselContent } from "../../Data/CarouselData";
import Carousel_Caption from "./Carousel_Caption";
import { MobileWidth } from "../../Media_Query/Mobileview";
import "../Carousel_Component/Carousel_Component.css"
// Carousel Button Properties
const prevButton = { position: "absolute", left: "20px", top: "50%" };
const nextButton = { position: "absolute", right: "20px", top: "50%" };

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

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const prevSlide = () => {
    setDirection(-1);
    if (index == 0) {
      setIndex(carouselContent.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    setDirection(1);
    if (index == carouselContent.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

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
        nextSlide();
      }
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [index, autoScroll]);

  // Media Query
  const mobileView = useMediaQuery(`(${MobileWidth})`);
  return (
    <div className="carouselContainer">
      <Paper
        elevation={8}
        className="sliderContainer"
        sx={{ borderRadius: "20px" }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            src={carouselContent[index].image}
            alt="Slider"
            className="slider"
            variants={varients}
            initial="initial"
            animate="animate"
            exit="exit"
            key={carouselContent[index].image}
            custom={direction}
          />
        </AnimatePresence>

        {mobileView ? (
          <>
            <IconButton
              aria-label="prevButton"
              className="prevButton"
              style={prevButton}
              onClick={() => prevSlide()}
            >
              <ArrowLeftIcon
                sx={{ fontSize: "60px", color: "rgb(255, 255, 255)" }}
              />
            </IconButton>
            <IconButton
              aria-label="nextButton"
              className="nextButton"
              style={nextButton}
              onClick={() => nextSlide()}
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
      <Carousel_Caption index={index} />
    </div>
  );
};

export default Carousel;

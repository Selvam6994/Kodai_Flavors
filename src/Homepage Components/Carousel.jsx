import React, { useEffect } from "react";
import { IconButton, Paper } from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    image:
      "https://res.cloudinary.com/dommwbnzh/image/upload/v1700313302/samples/ecommerce/Carousel%20Images/Avacado_upxwry.jpg",
    caption:
      "Experience the creamy goodness of Kodaikanal avocados, nature's buttery treasure straight from the hills.",
  },
  {
    image:
      "https://res.cloudinary.com/dommwbnzh/image/upload/v1700292278/samples/ecommerce/Carousel%20Images/Flavour_filled_chocolates_z8gzlq.jpg",
    caption:
      "Savor the juicy sweetness of Kodaikanal peaches, each bite a taste of sunshine and pure bliss.",
  },
  {
    image:
      "https://res.cloudinary.com/dommwbnzh/image/upload/v1707879688/samples/ecommerce/Coffee%20Verities/Green_coffee_ayyjiu.png",
    caption:
      "Sip on the refreshing essence of green coffee, a vibrant blend that revitalizes both body and mind.",
  },
  {
    image:
      "https://res.cloudinary.com/dommwbnzh/image/upload/v1707877864/samples/ecommerce/Coffee%20Verities/coffee_cover_image_kqxbnw.jpg",
    caption:
      "Indulge in the rich flavors of Kodaikanal's finest coffee, a brew that awakens the senses and delights the soul.",
  },
  {
    image:
      "https://res.cloudinary.com/dommwbnzh/image/upload/v1707879808/samples/ecommerce/Fruits/Plums_mbddvq.jpg",
    caption:
      "Experience the sweet taste of Kodaikanal plums, nature's little jewels bursting with flavor and delight.",
  },
  {
    image:
      "https://res.cloudinary.com/dommwbnzh/image/upload/v1707879810/samples/ecommerce/Fruits/Peaches_jefire.jpg",
    caption:
      "Savor the juicy sweetness of Kodaikanal peaches, each bite a taste of sunshine and pure bliss.",
  },
];
// Carousel Button Properties
const prevButton = { position: "absolute", left: "50px", top: "50%" };
const nextButton = { position: "absolute", right: "50px", top: "50%" };

//Carousel Animation
const varients = {
  initial: (direction) => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    };
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      x: direction < 0 ? -200 : 200,
      opacity: 0,
    };
  },
};

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    if (index == 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    setDirection(1);
    if (index == images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(slideInterval);
  }, [index]);

  return (
    <div className="carouselContainer">
      <Paper
        elevation={8}
        className="sliderContainer"
        sx={{ borderRadius: "20px" }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            src={images[index].image}
            alt="Slider"
            className="slider"
            variants={varients}
            initial="initial"
            animate="animate"
            exit="exit"
            key={images[index].image}
            custom={direction}
          />
        </AnimatePresence>
        <IconButton
          aria-label="prevButton"
          className="prevButton"
          style={prevButton}
          onClick={() => prevSlide()}
        >
          <ArrowLeftIcon sx={{ fontSize: "60px", color: "white" }} />
        </IconButton>
        <IconButton
          aria-label="nextButton"
          className="nextButton"
          style={nextButton}
          onClick={() => nextSlide()}
        >
          <ArrowRightIcon sx={{ fontSize: "60px", color: "white" }} />
        </IconButton>
      </Paper>
      <div className="captionContainer">
        <motion.div className="slideCaption">
          {images[index].caption}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

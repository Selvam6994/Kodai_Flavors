import React, { useEffect } from "react";
import { useState } from "react";
import Carousel_Caption from "./Carousel_Caption";
import "../Carousel_Component/Carousel_Component.css";
import Carousel_Images from "./Carousel_Images";
import { getCarouselSlides } from "../../Data/Get Data/CarouselData";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [carouselData, setCarouselData] = useState([]);
  // get data from api
  const getCarouselData = async () => {
    const getData = await getCarouselSlides();
    setCarouselData(getData);
  };

  useEffect(() => {
    getCarouselData();
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    if (index == 0) {
      setIndex(carouselData.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {
    setDirection(1);
    if (index == carouselData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <div className="carouselContainer">
      {carouselData.length > 0 ? (
        <Carousel_Images
          carouselImages={carouselData}
          nextImage={nextSlide}
          previousImage={prevSlide}
          imageIndex={index}
          imageDirection={direction}
        />
      ) : (
        <></>
      )}
      {carouselData.length > 0 ? (
        <Carousel_Caption imageIndex={index} carouselImages={carouselData} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Carousel;

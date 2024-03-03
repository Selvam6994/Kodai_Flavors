import React from "react";
import Carousel from "./Carousel";
import Popular_Products from "./Popular_Products";
import Categories from "./Categories";

const Homepage = () => {
  return (
    <div className="homePage"> 
      <Carousel />
      <Popular_Products />
      <Categories />
    </div>
  );
};

export default Homepage;

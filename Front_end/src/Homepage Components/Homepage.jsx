import React from "react";
import Carousel from "./Carousel_Component/Carousel";
import Popular_Products from "./Popular_Products/Popular_Products";
import "../Homepage Components/Homepage.css"
import Categories from "./Categories/Categories";
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

import React, { useEffect, useState } from "react";
import Carousel from "./Carousel_Component/Carousel";
import Popular_Products from "./Popular_Products/Popular_Products";
import "../Homepage Components/Homepage.css";
import Categories from "./Categories/Categories";
import { getPopularProductData } from "../Data/Get Data/PopularProducts";
const Homepage = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const retriveData = async () => {
    const data = await getPopularProductData();
    setPopularProducts(data);
  };

  useEffect(() => {
    retriveData();
  }, []);

  return (
    <div className="homePage">
      <Carousel />
      {popularProducts.length > 0 ? (
        <Popular_Products popular={popularProducts} />
      ) : (
        <></>
      )}

      <Categories />
    </div>
  );
};

export default Homepage;

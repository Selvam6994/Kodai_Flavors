import { Button, IconButton, Paper } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";
import { popularProducts } from "../../Data/PopularProducts";
import "../Popular_Products/Popular_Products.css"
const Popular_Products = () => {
  // const [productQty, setProductQty] = useState(0);
  // const [productName, setProductName] = useState("");
  const [sliderWidth, setSliderWidth] = useState(0);

  const slider = useRef();

  useEffect(() => {
    setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  const ratingColor = { color: "yellow" };
  return (
    <div className="popularProductsPage">
      <div className="popularProductTitleSection">
        <span>Popular Products</span>
      </div>
      <motion.div className="popularProductCardsection" ref={slider}>
        <motion.div
          className="cardSlider"
          drag="x"
          dragConstraints={{ right: "0", left: -sliderWidth }}
        >
          {popularProducts.map((product, index) => (
            <Paper
              sx={{ borderRadius: "20px" }}
              className="productCard"
              elevation={8}
              key={index}
            >
              <div className="cardImage">
                <img src={product.image} alt={product.name} />
              </div>

              <Paper
                elevation={4}
                className="cardContent"
                sx={{ borderRadius: "20px",gap:"10px" }}
              >
                <div className="cardTitleContainer">
                  <span>{product.name}</span>
                </div>

                <div className="qtyPriceContainer">
                  {product.hasOldPrice ? (
                    <div className="priceTag">
                      Rs.<span>{product.oldPrice}</span>{" "}
                      <span>{product.price}/Kg</span>
                    </div>
                  ) : (
                    <>Rs.{product.price}/Kg</>
                  )}
                </div>
                <div className="purchaseContainer">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => {
                      setProductName(product.name);
                      popularProducts.map((item) => {
                        if (productName == item.name) {
                          localStorage.setItem(`${product.name}`, `${item}`);
                        }
                      });
                    }}
                  >
                    <AddShoppingCartIcon color="white" />
                    Add to cart
                  </Button>
                </div>
              </Paper>
            </Paper>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Popular_Products;

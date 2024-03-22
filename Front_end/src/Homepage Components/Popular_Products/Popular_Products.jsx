import { Button, IconButton, Paper } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";
import "../Popular_Products/Popular_Products.css";
import { AddCartContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Popular_Products = ({ popular }) => {
  const navigate = useNavigate();
  // state management
  const [sliderWidth, setSliderWidth] = useState(0);
  const { name, qty, addCartItem, addQty, minusQty } =
    useContext(AddCartContext);
  const [productName] = name;
  const [productQuantity] = qty;
  const [addItem] = addCartItem;
  const [increaseQty] = addQty;
  const [decreaseQty] = minusQty;
  let slider = useRef();
  useEffect(() => {
    setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

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
          {popular.map((product, index) => (
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
                sx={{ borderRadius: "20px", gap: "10px" }}
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
                <div className="viewProduct">
                  <Button
                    color="warning"
                    onClick={() =>
                      navigate(`category/${product.category}/${product.name}`)
                    }
                  >
                    View
                  </Button>
                </div>

                <div className="purchaseContainer">
                  <div>
                    <IconButton onClick={() => increaseQty(product)}>
                      +
                    </IconButton>
                    {product.name == productName ? productQuantity : 1}
                    <IconButton onClick={() => decreaseQty(product)}>
                      -
                    </IconButton>
                  </div>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => addItem(product, productQuantity)}
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

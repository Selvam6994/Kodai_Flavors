import { Button, IconButton, Paper } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion } from "framer-motion";
import { popularProducts } from "../../Data/PopularProducts";
import "../Popular_Products/Popular_Products.css";
import { AddCartContext } from "../../App";

const Popular_Products = () => {
  // state management
  const [sliderWidth, setSliderWidth] = useState(0);

  const { name, qty, itemsData } = useContext(AddCartContext);

  const [productName, setProductName] = name;
  const [productQuantity, setProductQty] = qty;
  const [cartItems, setCartItems] = itemsData;
  const slider = useRef();

  const getCartData = () => {
    const cartData = [];
    let keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
      cartData.push(JSON.parse(localStorage.getItem(keys[i])));
      setCartItems([...cartData]);
    }
  };

  useEffect(() => {
    setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    getCartData();
  }, []);

  const addProduct = (product, productQuantity) => {
    const productQty = { name: product.name, qty: productQuantity };
    localStorage.setItem(product.name, JSON.stringify(productQty));
    setProductQty(1);
    getCartData();
  };

  const increaseQty = (product) => {
    setProductName(product.name);
    setProductQty(productQuantity + 1);
  };

  const decreaseQty = (product) => {
    setProductName(product.name);
    if (productQuantity > 1) {
      setProductQty(productQuantity - 1);
    }
  };

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
                <div className="qtyContainer">
                  <IconButton onClick={() => increaseQty(product)}>
                    +
                  </IconButton>
                  {product.name == productName ? productQuantity : 1}
                  <IconButton onClick={() => decreaseQty(product)}>
                    -
                  </IconButton>
                </div>
                <div className="purchaseContainer">
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => addProduct(product, productQuantity)}
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

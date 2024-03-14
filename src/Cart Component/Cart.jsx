import React, { useContext, useState } from "react";
import "../Cart Component/Cart.css";
import { Button, IconButton, Paper } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddCartContext } from "../App";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useEffect } from "react";
const Cart = () => {
  const { itemsData, cartItemData, remvoveCartItem, cartItemRemove } =
    useContext(AddCartContext);

  const [cartItems] = itemsData;
  const [getCartData] = cartItemData;
  const [removeItem] = remvoveCartItem;
  const [item] = cartItemRemove;

  useEffect(() => {
    getCartData();
  }, [item]);

  return (
    <div className="cartPage">
      <div className="cartContainer">
        <Paper
          elevation={4}
          className="cartItemsPaper"
          sx={{ borderRadius: "20px" }}
        >
          <Paper
            elevation={4}
            className="cartTitleBar"
            sx={{ borderRadius: "10px" }}
          >
            <span>
              <ShoppingCartIcon />
              My Cart
            </span>
            <span>Total Products : {cartItems.length}</span>
          </Paper>

          {item.length == 0 && Object.keys(localStorage).length == 0 ? (
            <span className="emptyCartProducts">Cart is empty!</span>
          ) : (
            <div className="cartProducts">
              {cartItems.map((item) => (
                <Paper className="cartProductCard">
                  <img src={item.img} alt={item.name} />
                  <div className="nameSection">
                    <span>{item.name}</span>
                    {/* <span>Ctegory</span> */}
                  </div>
                  <div className="qtyPrice">
                    <span>Quantity:{item.qty}</span>
                    <span>
                      Price:
                      <CurrencyRupeeIcon />
                      {item.price * item.qty}/-
                    </span>
                  </div>
                  <Button>view</Button>
                  <IconButton
                    onClick={() => {
                      removeItem(item);
                    }}
                  >
                    <DeleteIcon color="error" />
                  </IconButton>
                </Paper>
              ))}
            </div>
          )}
        </Paper>
        <div className="cartItemsPrice"></div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useContext, useState } from "react";
import "../Cart Component/Cart.css";
import { Button, IconButton, Paper, useMediaQuery } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { AddCartContext } from "../App";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useEffect } from "react";
import { tabWidth } from "../Media_Query/Tabview";
import { MobileWidth, cartPageMobRes } from "../Media_Query/Mobileview";
const Cart = () => {
  const tabView = useMediaQuery(`(${tabWidth})`);

  const mobTittleBar = useMediaQuery(`(${MobileWidth})`);
  const mobView = useMediaQuery(`(${cartPageMobRes})`);

  const { itemsData, cartItemData, remvoveCartItem, cartItemRemove } =
    useContext(AddCartContext);

  const [cartItems] = itemsData;
  const [getCartData] = cartItemData;
  const [removeItem] = remvoveCartItem;
  const [item] = cartItemRemove;

  const cartItemSubTotal = () => {
    if (cartItems.length !== 0) {
      const initial = 0;
      const itemSubTotal = cartItems.reduce(
        (acc, itemPrice) => acc + itemPrice.price,
        initial
      );
      return itemSubTotal;
    } else {
      return 0;
    }
  };

  const shippingPrice = () => {
    let shippingCost;
    if (cartItemSubTotal() > 1000) {
      shippingCost = 0;
      return shippingCost;
    } else if (cartItemSubTotal() == 0) {
      return (shippingCost = 0);
    } else {
      shippingCost = 250;

      return shippingCost;
    }
  };

  useEffect(() => {
    getCartData();
    cartItemSubTotal();
  }, [item]);

  return (
    <div className="cartPage">
      <div className={!tabView ? "tabCartContainer" : "cartContainer"}>
        <Paper
          elevation={4}
          className={!tabView ? "tabCartItemsPaper" : "cartItemsPaper"}
          sx={{ borderRadius: "20px" }}
        >
          <Paper
            elevation={4}
            className="cartTitleBar"
            sx={{ borderRadius: "20px" }}
          >
            <span className={!mobTittleBar ? "mobCartTitle" : "cartTitle"}>
              <ShoppingCartIcon />
              My Cart
            </span>
            <span className={!mobTittleBar ? "mobItemCount" : "itemCount"}>
              Items : {cartItems.length}
            </span>
          </Paper>

          {item.length == 0 && Object.keys(localStorage).length == 0 ? (
            <span className="emptyCartProducts">Cart is empty!</span>
          ) : (
            <div className={!mobView ? "mobCartProducts" : "cartProducts"}>
              {cartItems.map((item) => (
                <Paper
                  className={
                    !mobView ? "mobCartProductCard" : "cartProductCard"
                  }
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className={!mobView ? "mobCartItemImage" : "cartItemImage"}
                  />
                  <div className={!mobView ? "mobNameSection" : "nameSection"}>
                    <span>{item.name}</span>
                  </div>
                  <div className={!mobView ? "mobQtyPrice" : "qtyPrice"}>
                    <span>Quantity:{item.qty}</span>
                    <span>
                      Price:
                      <CurrencyRupeeIcon />
                      {item.price}/-
                    </span>
                  </div>
                  <div className="cartButtonSection">
                    <Button>view</Button>
                    <IconButton
                      onClick={() => {
                        removeItem(item);
                      }}
                    >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </div>
                </Paper>
              ))}
            </div>
          )}
        </Paper>
        <div className={!tabView ? "tabCartItemsPrice" : "cartItemsPrice"}>
          <Paper
            className="orderSummaryContainer"
            elevation={4}
            sx={{ borderRadius: "20px" }}
          >
            <div className="summaryTitle">
              <span>Order Summary</span>
            </div>
            <div className="subTotal">
              <span>Sub-total</span>
              <span>{cartItemSubTotal()}</span>
            </div>
            <div className="shipping">
              <span>Shipping</span>
              <span>{shippingPrice()}</span>
            </div>

            <div className="total">
              <span>Total</span>
              <span>{cartItemSubTotal() + shippingPrice()}</span>
            </div>
            <Button variant="contained" color="success">
              Check out
            </Button>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Cart;

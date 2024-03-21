import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button, IconButton, Paper } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../ProductMainPage/ViewProduct.css";
import { AddCartContext } from "../App";

const ViewProduct = () => {
  const itemName = useParams();

  const { qty, name, addQty, minusQty, addCartItem, productInfo } =
    useContext(AddCartContext);
  const [productQuantity] = qty;
  const [productName] = name;
  const [increaseQty] = addQty;
  const [decreaseQty] = minusQty;
  const [addItem] = addCartItem;
  const [productsData] = productInfo;
  const [product] = productsData.filter(
    (product) => itemName.product == product.name
  );

  return (
    <div className="productPage">
      <div className="productContainer">
        <div className="productImageContainer">
          <Paper
            elevation={4}
            className="imgCard"
            sx={{ borderRadius: "20px" }}
          >
            <img src={product.image} alt={product.image} />
          </Paper>
        </div>
        <div className="productDetailsContainer">
          <div className="productTitle">
            <span>{product.name}</span>
          </div>
          <div className="productDescription">
            <p>{product.description}</p>
          </div>
          <div className="productPriceQtyContainer">
            {product.hasOldPrice == true ? (
              <>
                {" "}
                <div className="priceContainer">
                  Price:
                  <CurrencyRupeeIcon />
                  <span style={{ textDecoration: "line-through" }}>
                    {product.oldPrice}
                  </span>
                  {product.price}/-
                </div>
              </>
            ) : (
              <div className="priceContainer">
                Price:
                <CurrencyRupeeIcon />
                {product.price}/-
              </div>
            )}
            <div className="qtyContainer">
              Qty:
              <IconButton onClick={() => increaseQty(product)}>+</IconButton>
              {product.name == productName ? productQuantity : 1}
              <IconButton onClick={() => decreaseQty(product)}>-</IconButton>Kg
            </div>
          </div>
          <div className="productPurchasebuttonSection">
            <Button
              variant="contained"
              color="warning"
              onClick={() => addItem(product, productQuantity)}
            >
              <AddShoppingCartIcon />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <div className="productBenefitsContainer">
        <div className="benefitsTag">Benefits</div>
        <span>{product.benefits}</span>
      </div>
    </div>
  );
};

export default ViewProduct;

import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../Data/ProductsData";
import { Button, IconButton, Paper } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import "../ProductMainPage/ViewProduct.css";

const ViewProduct = () => {
  const name = useParams();

  const [product] = productsData.filter(
    (product) => name.product == product.name
  );
  console.log(product);
  return (
    <div className="productPage">
      <div className="productContainer">
        <div className="productImageContainer">
          <Paper
            elevation={4}
            className="imgCard"
            sx={{ borderRadius: "20px" }}
          >
            <img src={product.image} alt="" />
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
              <IconButton>+</IconButton>
              {product.quantity}
              <IconButton>-</IconButton>Kg
            </div>
          </div>
          <div className="productPurchasebuttonSection">
            <Button variant="contained" color="success">
              Buy Now
            </Button>
            <Button variant="contained" color="warning">
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

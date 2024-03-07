import { Button, Paper } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../Data/ProductsData";
const Displayproducts = () => {
  const category = useParams();
  const products = productsData.filter(
    (product) => product.category == category.product
  );
  return (
    <div className="productsPage">
      <span className="productCategory">{category.product}</span>
      <div className="productsCardContainer">
        {products.map((product, index) => (
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
              sx={{ borderRadius: "20px" }}
            >
              <div className="cardTitleContainer">
                <span>{product.name}</span>
              </div>

              <div className="qtyPriceContainer">
                {product.hasOldPrice ? (
                  <div className="priceTag">
                    Rs.<span>{product.oldPrice}</span>
                    <span>{product.price}/Kg</span>
                  </div>
                ) : (
                  <>Rs.{product.price}/Kg</>
                )}
              </div>
              <div className="purchaseContainer">
                <Button variant="contained" color="success">
                  <AddShoppingCartIcon color="white" />
                  Add to cart
                </Button>
              </div>
            </Paper>
          </Paper>
        ))}
      </div>
    </div>
  );
};

export default Displayproducts;

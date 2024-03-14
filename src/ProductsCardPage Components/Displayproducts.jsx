import { Button, IconButton, Paper } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productsData } from "../Data/ProductsData";
import { AddCartContext } from "../App";
const Displayproducts = () => {
  const category = useParams();
  const products = productsData.filter(
    (product) => product.category == category.product
  );
  const { name, qty, addCartItem, addQty, minusQty } =
    useContext(AddCartContext);
  const [productName] = name;
  const [productQuantity] = qty;
  const [addItem] = addCartItem;
  const [increaseQty] = addQty;
  const [decreaseQty] = minusQty;

  const navigate = useNavigate();
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
              sx={{ borderRadius: "20px", gap: "6px" }}
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
                  onClick={() => navigate(`${product.name}`)}
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
      </div>
    </div>
  );
};

export default Displayproducts;

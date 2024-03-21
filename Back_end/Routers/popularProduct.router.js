import express from "express";
import {
  createPopularProducts,
  getPopularProducts,
} from "../Controllers/popularProducts.controller.js";

const popularProductRouter = express.Router();

popularProductRouter.post("/create/popular/products", createPopularProducts);
popularProductRouter.get("/get/popular/products", getPopularProducts);

export default popularProductRouter;

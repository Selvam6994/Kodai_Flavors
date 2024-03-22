import {
  createNewProduct,
  findProducts,
} from "../Controllers/product.controller.js";
import express from "express";

const productRouter = express.Router();

productRouter.post("/create/product", createNewProduct);

productRouter.get("/get/product", findProducts);

export default productRouter;

import { createNewProduct, findProducts } from "../Controllers/product.controller.js";
import express from "express"

const router = express.Router()

router.post('/create/product',createNewProduct)

router.get('/get/product',findProducts)

export default router;
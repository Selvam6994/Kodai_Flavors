import express from "express";
import {
  createCategories,
  getCategory,
} from "../Controllers/categories.controller.js";

const catergoryRouter = express.Router();

catergoryRouter.post("/create/new/category", createCategories);
catergoryRouter.get("/get/category", getCategory);
export default catergoryRouter;

import express from "express";
import { createCarouselSlides, getCarouselSlide } from "../Controllers/carouselBlock.controller.js";

const carouselRouter = express.Router();

carouselRouter.post("/create/carousel/slides", createCarouselSlides);
carouselRouter.get("/get/carousel/slides",getCarouselSlide)
export default carouselRouter;

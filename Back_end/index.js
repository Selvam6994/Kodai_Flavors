import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import client from "./Database/configDB.js";
import productRouter from "./Routers/product.router.js";
import popularProductRouter from "./Routers/popularProduct.router.js";
import catergoryRouter from "./Routers/categories.router.js";
import carouselRouter from "./Routers/carousel.router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
await client.connect();

app.use("/api", productRouter);
app.use("/api", popularProductRouter);
app.use("/api", catergoryRouter);
app.use("/api", carouselRouter);
app.listen(PORT, () => console.log(`app started in ${PORT}`));

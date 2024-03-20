import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import client from "./Database/configDB.js";
import productRouter from "./Routers/product.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
await client.connect()


app.use('/api',productRouter)

app.listen(PORT, () => console.log(`app started in ${PORT}`))

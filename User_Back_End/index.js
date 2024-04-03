import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import client from "./Database/config.db.js";
import signupRouter from "./Router/user.signup.router.js";
import socialSignupRouter from "./Router/user.social.signup.router.js";
dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT;

await client.connect(console.log("connected to DB"));

app.use("/user", signupRouter);
app.use("/user",socialSignupRouter)
app.listen(port, () => {
  console.log(`User app started in ${port}`);
});

app.use(cors());

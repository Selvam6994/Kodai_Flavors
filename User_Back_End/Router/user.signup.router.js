import express from "express";
import { createEmail, verifyOtp } from "../Controller/user.signup.controller.js";

const signupRouter = express.Router();

signupRouter.post("/new/signup", createEmail);
signupRouter.post("/new/verify/otp",verifyOtp)
export default signupRouter;

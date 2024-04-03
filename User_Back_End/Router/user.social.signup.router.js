import express from "express"
import { verifySocialLogin } from "../Controller/user.social.signup.controller.js"

const socialSignupRouter = express.Router()

socialSignupRouter.post("/social/signup",verifySocialLogin)

export default socialSignupRouter;
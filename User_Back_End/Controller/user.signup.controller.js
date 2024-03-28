import client from "../Database/config.db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import nodeMailer from "nodemailer";
import jwt from "jsonwebtoken";
dotenv.config();

const hashOtp = async (otp) => {
  const saltRound = +process.env.SALT;
  const salt = await bcrypt.genSalt(saltRound);
  const password = otp;
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

export const createEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const emailExist = await client
      .db("Kodai_Flavors_Ecom")
      .collection("otp")
      .findOne({ email: email });
    if (emailExist) {
      res.status(400).json({ message: "Otp already sent to the email." });
    } else {
      const otp = (Math.random() * 100000).toFixed();
      const transporter = nodeMailer.createTransport({
        service: "gmail",
        auth: {
          user: "kodaiflavours@gmail.com",
          pass: process.env.NODEMAILER_EMAIL_PASSWORD,
        },
      });
      const info = {
        from: "kodaiflavours@gmail.com",
        to: email,
        subject: "Sign-up Kodai Flavours",
        text: `Hi, ${email}! Your one time password is ${otp} and it expires in a minute. Signup soon!`,
      };
      transporter.sendMail(info, (error) => {
        if (error) {
          console.log("error", error);
        } else {
          console.log("Otp sent successfully.");
        }
      });

      const hashedOtp = await hashOtp(otp);

      await client
        .db("Kodai_Flavors_Ecom")
        .collection("otp")
        .insertOne({ email: email, hashOtp: hashedOtp });
      res.status(200).json({ message: "Otp sent to the email." });
      setTimeout(async () => {
        await client
          .db("Kodai_Flavors_Ecom")
          .collection("otp")
          .deleteOne({ email: email });
        console.log("otp removed from collection");
      }, 60000);
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal error please try after sometime.",
      error: error,
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const validOtp = await client
      .db("Kodai_Flavors_Ecom")
      .collection("otp")
      .findOne({ email: email });
    const checkOtp = await bcrypt.compare(otp, validOtp.hashOtp);
    if (checkOtp) {
      const token = jwt.sign(
        { email: email },
        process.env.JWT_SERCRET_KEY.toString()
      );
     
      res.status(200).json({ message: "Otp Verified",token:token });
    } else {
      res.status(400).json({ message: "Invalid Otp" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Re-enter the email id",
      error: "Otp timed out",
    });
  }
};

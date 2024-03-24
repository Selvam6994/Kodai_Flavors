import client from "../Database/config.db.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";


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
      console.log(otp);
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
      res.status(200).json({ message: "Otp Verified" });
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

import client from "../Database/config.db.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
export const verifySocialLogin = async (req, res) => {
  const { googleToken } = req.body;
  const fetchUserData = await fetch(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer${googleToken}`,
      },
    }
  );
  const userData = await fetchUserData.json();
  const existingUser = await client
    .db("Kodai_Flavors_Ecom")
    .collection("User_Data")
    .findOne({ email: userData.email, sub: userData.sub });
  const token = jwt.sign(existingUser, process.env.JWT_SECRET);
  if (!existingUser) {
    await client
      .db("Kodai_Flavors_Ecom")
      .collection("User_Data")
      .insertOne(userData);

    res.status(200).json(token);
  } else {
    res.status(200).json(token);
  }
};

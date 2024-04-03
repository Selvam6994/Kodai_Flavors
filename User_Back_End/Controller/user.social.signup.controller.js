import client from "../Database/config.db.js";

export const verifySocialLogin = async (req, res) => {
  const { googleToken } = req.body;
  const fetchData = await fetch(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer${googleToken}`,
      },
    }
  );
  const userData = await fetchData.json();
  const existingUser = await client
    .db("Kodai_Flavors_Ecom")
    .collection("User_Data")
    .findOne({ email: userData.email, sub: userData.sub });

  if (!existingUser) {
    await client
      .db("Kodai_Flavors_Ecom")
      .collection("User_Data")
      .insertOne(userData);
    res.status(200).send({ message: "User Data added to db" });
  } else {
    res.status(200).send({ message: "User verified" });
  }
};

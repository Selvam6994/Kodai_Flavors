import client from "../Database/configDB.js";

export const createNewProduct = async (req, res) => {
  try {
    const product = req.body;
    const checkProduct = await client
      .db("Kodai_Flavors_Ecom")
      .collection("products")
      .findOne({ name: product.name });
    if (checkProduct) {
      res.status(400).send({ message: "Product already exist" });
    } else {
      await client
        .db("Kodai_Flavors_Ecom")
        .collection("products")
        .insertOne(product);
    }
    res.status(200).send({ message: "Product created" });
  } catch (error) {
    res.status(500).send({ message: "Error:", error });
  }
};

export const findProducts = async (req, res) => {
  try {
    const product = await client
      .db("Kodai_Flavors_Ecom")
      .collection("products")
      .find()
      .toArray();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send({ message: "Error:", error });
  }
};

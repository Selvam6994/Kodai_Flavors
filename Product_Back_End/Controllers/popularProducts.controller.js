import client from "../Database/configDB.js";

export const createPopularProducts = async (req, res) => {
  try {
    const popularProducts = req.body;
    const checkProduct = await client
      .db("Kodai_Flavors_Ecom")
      .collection("popular_products")
      .findOne({ name: popularProducts.name });

    if (checkProduct) {
      res.status(400).json({ message: "The product is already in the list" });
    } else {
      await client
        .db("Kodai_Flavors_Ecom")
        .collection("popular_products")
        .insertOne(popularProducts);
      res.status(200).json({ message: "Added to popular products" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};

export const getPopularProducts = async (req, res) => {
  try {
    const popularProducts = await client
      .db("Kodai_Flavors_Ecom")
      .collection("popular_products")
      .find()
      .toArray();
    res.status(200).json(popularProducts);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error });
  }
};

import client from "../Database/configDB.js";

export const createCategories = async (req, res) => {
  try {
    const newCategory = req.body;
    const existingCategory = await client
      .db("Kodai_Flavors_Ecom")
      .collection("category")
      .findOne({ name: newCategory.name });
    if (existingCategory) {
      res.status(400).json({ message: "This category exists" });
    } else {
      await client
        .db("Kodai_Flavors_Ecom")
        .collection("category")
        .insertOne(newCategory);
    }
    res.status(200).json({ message: "New product category created" });
  } catch (error) {
    res.status(500).json({ message: "internal error", error: error });
  }
};

export const getCategory = async (req, res) => {
  try {
    const getData = await client
      .db("Kodai_Flavors_Ecom")
      .collection("category")
      .find()
      .toArray();
    res.status(200).json(getData);
  } catch (error) {
    res.status(500).json({ message: "internal error", error: error });
  }
};

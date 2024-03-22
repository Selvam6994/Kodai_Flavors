import client from "../Database/configDB.js";

export const createCarouselSlides = async (req, res) => {
  try {
    const newSlide = req.body;
    const existingSlide = await client
      .db("Kodai_Flavors_Ecom")
      .collection("carousel")
      .findOne({ image: newSlide.image });
    if (existingSlide) {
      res.status(400).json({ message: "Slide already created" });
    } else {
      await client
        .db("Kodai_Flavors_Ecom")
        .collection("carousel")
        .insertOne(newSlide);
      res.status(200).json({ message: "Slide created" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal error", error: error });
  }
};

export const getCarouselSlide = async (req, res) => {
  try {
    const carouselSlides = await client
      .db("Kodai_Flavors_Ecom")
      .collection("carousel")
      .find()
      .toArray();
    res.status(200).json(carouselSlides);
  } catch (error) {
    res.status(500).json({ message: "Internal error", error: error });
  }
};

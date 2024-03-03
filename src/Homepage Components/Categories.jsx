import { Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const Categories = () => {
  const categories = [
    {
      name: "Fruits",
      imageURL:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1707879802/samples/ecommerce/Fruits/Avacado_xqucje.jpg",
    },
    {
      name: "Chocolates",
      imageURL:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1700319117/samples/ecommerce/Chocolates/Cashewnut_chocolates_h4gvsn.jpg",
    },
    {
      name: "Coffee",
      imageURL:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1707877954/samples/ecommerce/Coffee%20Verities/Coffee_Powder_i3nf6x.jpg",
    },
    {
      name: "Honey",
      imageURL:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1708957704/samples/ecommerce/Honey/honey_cover_image_g4owcm.jpg",
    },
    {
      name: "Spices",
      imageURL:
        "https://res.cloudinary.com/dommwbnzh/image/upload/v1708957644/samples/ecommerce/Spices/Spices_ehtzc6.jpg",
    },
  ];

  return (
    <div className="productCategoriesSection">
      <div className="categoriesTitleSection">
        <span>Categories</span>
      </div>
      <div className="categoriesCardSection">
        {categories.map((category, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            key={index}
          >
            <Paper
              elevation={8}
              className="categoriesCard"
              sx={{ borderRadius: "50px" }}
            >
              <div
                style={{
                  width: "inherit",
                  height: "inherit",
                  borderRadius: "50px",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "25px",
                  color: "whitesmoke",
                }}
              >
                {category.name}
              </div>
              <img src={category.imageURL} alt={category.imageURL} />
            </Paper>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

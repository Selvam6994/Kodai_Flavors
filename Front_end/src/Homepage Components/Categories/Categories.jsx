import { Paper } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { categories } from "../../Data/CategoriesData";
import {  useNavigate } from "react-router-dom";
import "../Categories/Categories.css"
const Categories = () => {
  const navigate = useNavigate();
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
            onClick={() => navigate(`category/${category.name}`)}
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

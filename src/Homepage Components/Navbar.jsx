import { Badge, IconButton, InputBase, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import styled from "styled-components";

const Navbar = () => {
  const [searchField, setSearchFild] = useState(false);
  const navButtons = [
    {
      option: "Chocolates",
      linkTo: "",
    },
    {
      option: "Coffee",
      linkTo: "",
    },
    {
      option: "Fruits",
      linkTo: "",
    },
    {
      option: "Honey",
      linkTo: "",
    },
    {
      option: "Spices",
      linkTo: "",
    },
  ];
  return (
    <div className="navBarContainer">
      <Paper
        elevation={8}
        className="navBar"
        sx={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="logoContainer">
          <img
            src="https://res.cloudinary.com/dommwbnzh/image/upload/v1701331579/samples/ecommerce/Logo/Kodai-Logo_dpx9ms.png"
            alt=""
          />
        </div>
        <div className="buttonsContainer">
          {navButtons.map((button) => (
            <>
              <motion.div
                className="navButtons"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {button.option}
              </motion.div>
            </>
          ))}
        </div>
        <div className="optionsContainer">
          <IconButton color="primary" aria-label="add to shopping cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <motion.div
            className="navSearchBar"
            whileHover={{ scale: 1, width: "220px" }}
            transition={{ stiffness: 400, damping: 10 }}
            style={{ borderRadius: "20px" }}
            onMouseEnter={() => setSearchFild(true)}
            onMouseLeave={() => setSearchFild(false)}
          >
            <SearchIcon />
            {searchField ?   <TextField id="standard-basic" label="Standard" variant="standard" /> : ""}
          </motion.div>
        </div>
      </Paper>
    </div>
  );
};

export default Navbar;

import {
  Badge,
  Box,
  Button,
  IconButton,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { pageLogo } from "../../Logo";
import Navbuttons from "./Navbuttons";
import { tabMenu } from "./NavbarOptions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
import { tabWidth } from "../../Media_Query/Tabview";
import { smallMobileWidth } from "../../Media_Query/Mobileview";
import "../Navbar_Components/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AddCartContext } from "../../App";
import { motion } from "framer-motion";

const Navbar = () => {
  const tabView = useMediaQuery(`(${tabWidth})`);
  const smallMobileView = useMediaQuery(`(${smallMobileWidth})`);
  const navigate = useNavigate();
  const { itemsData, cartItemData } = useContext(AddCartContext);
  const [cartItems] = itemsData;
  const [getCartData] = cartItemData;

  useEffect(() => {
    getCartData();
  }, []);
  return (
    <div className="navBarContainer">
      <Paper
        elevation={8}
        className="navBar"
        sx={{ borderRadius: "0 0 20px 20px" }}
      >
        <div className="logoContainer">
          <img src={pageLogo} alt="Kodai Flavors" />
        </div>
        {tabView ? (
          <>
            <Navbuttons />{" "}
            <div className="optionsContainer">
              <IconButton
                color="primary"
                aria-label="add to shopping cart"
                onClick={() => navigate("/myCart")}
              >
                <Badge badgeContent={cartItems.length} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              <motion.div
                className="accountButton"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={()=>{navigate("/user/account")}}
              >
                Log in
              </motion.div>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField id="input" label="Search" variant="standard" />
              </Box>
            </div>
          </>
        ) : (
          <div
            className="tabViewMenuContainer"
            style={smallMobileView ? { gap: "50px" } : { width: "10%" }}
          >
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => navigate("/myCart")}
            >
              <Badge badgeContent={cartItems.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton variant="contained" {...bindTrigger(popupState)}>
                    <MenuIcon />
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    {tabMenu.map((option, index) => (
                      <MenuItem onClick={popupState.close} key={index}>
                        {option.option}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Navbar;

import {
  Badge,
  Box,
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
import { MobileWidth, smallMobileWidth } from "../../Media_Query/Mobileview";
import "../Navbar_Components/Navbar.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AddCartContext } from "../../App";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

export const getUserData = () => {
  const userToken = Cookies.get("gToken");
  if (userToken) {
    return jwtDecode(userToken);
  }
};

const Navbar = () => {
  const tabView = useMediaQuery(`(${tabWidth})`);
  const mobileView = useMediaQuery(`(${MobileWidth})`);
  const smallMobileView = useMediaQuery(`(${smallMobileWidth})`);
  const navigate = useNavigate();
  const { itemsData, cartItemData } = useContext(AddCartContext);
  const [cartItems] = itemsData;
  const [getCartData] = cartItemData;

  const [user, setUser] = useState([]);
  const [randomNum, setRandomNum] = useState();

  const cookieData = Cookies.get("gAuth");
  const genRandomNum = () => {
    const num = Math.random();
    setRandomNum(num);
  };

  const userData = () => {
    const data = getUserData();
    setUser(data);
  };

  useEffect(() => {
    getCartData();
    getUserData();
  }, [randomNum]);

  if (cookieData != undefined) {
    if (user.length == 0) {
      getUserData();
      userData();
    }
  }

  return (
    <div className="navBarContainer">
      <Paper
        elevation={8}
        className="navBar"
        sx={{ borderRadius: "0 0 20px 20px" }}
      >
        <div
          className={smallMobileView ? "logoContainer" : "logoContainerMobile"}
        >
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
              {cookieData == undefined ? (
                <motion.div
                  className="loginButton"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={() => {
                    navigate("/user/login");
                  }}
                >
                  Log in
                </motion.div>
              ) : (
                <PopupState variant="popover" popupId="demo-popup-menu">
                  {(popupState) => (
                    <React.Fragment>
                      <IconButton
                        className="accountProfileButton"
                        variant="contained"
                        {...bindTrigger(popupState)}
                      >
                        <img src={user.picture} alt="" />
                      </IconButton>
                      <Menu {...bindMenu(popupState)}>
                        <MenuItem onClick={popupState.close}>
                          <span
                            onClick={() => {
                              Cookies.remove("gAuth");
                              genRandomNum();
                              userData();
                            }}
                          >
                            Log Out
                          </span>
                        </MenuItem>
                        <MenuItem onClick={popupState.close}>
                          <span
                            onClick={() => {
                              navigate("/user/dashboard");
                            }}
                          >
                            My Account
                          </span>
                        </MenuItem>
                      </Menu>
                    </React.Fragment>
                  )}
                </PopupState>
              )}

              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField id="input" label="Search" variant="standard" />
              </Box>
            </div>
          </>
        ) : (
          <div
            className="tabViewMenuContainer"
            style={
              !mobileView
                ? { gap: "10px" }
                : smallMobileView
                ? { gap: "50px" }
                : { width: "10%" }
            }
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
            {cookieData == undefined ? (
              <></>
            ) : (
              <PopupState variant="popover" popupId="popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <IconButton
                      className={
                        smallMobileView
                          ? "accountProfileButton"
                          : "smallaccountProfileButton"
                      }
                      variant="contained"
                      {...bindTrigger(popupState)}
                    >
                      <img src={user.picture} alt="" />
                    </IconButton>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>
                        <span
                          onClick={() => {
                            Cookies.remove("gAuth");
                            genRandomNum();
                            userData()
                          }}
                        >
                          Log Out
                        </span>
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>
                        <span
                          onClick={() => {
                            navigate("/user/dashboard");
                          }}
                        >
                          My Account
                        </span>
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            )}
            <PopupState variant="popover" popupId="popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <IconButton variant="contained" {...bindTrigger(popupState)}>
                    <MenuIcon />
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    {tabMenu.map((option, index) => (
                      <MenuItem onClick={popupState.close} key={index}>
                        <span
                          onClick={() => {
                            navigate(`${option.link}`);
                          }}
                        >
                          {option.option}
                        </span>
                      </MenuItem>
                    ))}
                    <MenuItem onClick={popupState.close}>
                      <span
                        onClick={() => {
                          navigate("/user/login");
                        }}
                      >
                        Log in
                      </span>
                    </MenuItem>
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

import {
  Badge,
  Box,
  IconButton,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { pageLogo } from "../Logo";
import Navbuttons from "./Navbuttons";
import { tabMenu } from "./Data/NavbarOptions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const tabView = useMediaQuery("(min-width:1020px)");
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
              <IconButton color="primary" aria-label="add to shopping cart">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField id="input" label="Search" variant="standard" />
              </Box>
            </div>
          </>
        ) : (
          <div className="tabViewMenuContainer">
            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={4} color="primary">
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
                    {tabMenu.map((option) => (
                      <MenuItem onClick={popupState.close}>
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

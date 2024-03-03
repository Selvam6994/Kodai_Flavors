import { IconButton, Paper } from "@mui/material";
import React from "react";
import { pageLogo } from "../Logo";
import { motion } from "framer-motion";
import { section1Options } from "./Data/FooterOptions";
import { section2Options } from "./Data/FooterOptions";
import { section3Options } from "./Data/FooterOptions";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
const Footer = () => {
  return (
    <div className="footerSection">
      <Paper
        elevation={8}
        className="footerCard"
        sx={{ borderRadius: "50px 50px 0 0" }}
      >
        <div className="footerOptions">
          <div className="section1">
            <img src={pageLogo} alt="Kodai Flavors" />
            <div className="section1Options">
              {section1Options.map((option, index) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <span>{option.option}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="section2">
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Shop Online
            </span>
            <div className="section2Options">
              {section2Options.map((option, index) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <span>{option.option}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="section3">
            <span style={{ fontSize: "18px", fontWeight: "bolder" }}>
              Shop Online
            </span>
            <div className="section3Options">
              {section3Options.map((option, index) => (
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  style={{ cursor: "pointer" }}
                  key={index}
                >
                  <span>{option.option}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="socialMediaContainer">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ cursor: "pointer" }}
          >
            <XIcon />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ cursor: "pointer" }}
          >
            <FacebookIcon />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ cursor: "pointer" }}
          >
            <InstagramIcon />
          </motion.div>
        </div>
      </Paper>
    </div>
  );
};

export default Footer;

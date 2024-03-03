import React from "react";
import { navButtons } from "./Data/NavbarOptions";
import { motion } from "framer-motion";
const Navbuttons = () => {
  return (
    <div className="buttonsContainer">
      {navButtons.map((button, index) => (
        <div key={index}>
          <motion.div
            className="navButtons"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {button.option}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Navbuttons;

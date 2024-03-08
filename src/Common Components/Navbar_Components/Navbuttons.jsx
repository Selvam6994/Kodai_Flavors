import React from "react";
import { navOptions } from "./NavbarOptions";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Navbuttons = () => {
  const navigate = useNavigate();
  return (
    <div className="buttonsContainer">
      {navOptions.map((button, index) => (
        <div key={index}>
          <motion.div
            className="navButtons"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => navigate(`${button.link}`)}
          >
            {button.option}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Navbuttons;

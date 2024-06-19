import React, { useContext, useEffect } from "react";
import "../User Dashboard/UserDashboard.css";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { UserProfileContext } from "../App";
import { Button } from "@mui/material";
const UserDashboard = () => {
  const { genNumber } = useContext(UserProfileContext);
  const [genRandomNum] = genNumber;
  const navigate = useNavigate();

  const userData = () => {
    if (Cookies.get("gToken") === undefined) {
      navigate("/");
    } else {
      const token = Cookies.get("gToken");
      return jwtDecode(token);
    }
  };
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="userDashboard">
      <div className="profileContainer">
        <img
          src={userData().picture}
          alt={userData().given_name}
          className="profilePicture"
        />
        <Button
          onClick={() => {
            Cookies.remove("gAuth");
            Cookies.remove("gToken");
            genNumber;
            navigate("/");
          }}
        >
          Log Out
        </Button>
        <span>{userData().name}</span>
        <span>{userData().email}</span>
      </div>
    </div>
  );
};

export default UserDashboard;

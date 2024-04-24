import React, { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { getUserData } from "../Common Components/Navbar_Components/Navbar";
import { googleSinupData } from "../Data/Post Data/PostGoogleSignupData";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState(false);
  const getGoogleUserdata = async () => {
    const googleUserData = await googleSinupData();
    console.log(googleUserData);
    const cookieToken = Cookies.get("gAuth");
    if (cookieToken != undefined) {
      Cookies.set("gToken", googleUserData, { expires: 1 });
    }
  };

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      Cookies.set("gAuth", response.access_token, { expires: 1 });
       getUserData();
      await getGoogleUserdata();
      await googleSinupData();
      navigate("/");
    },
  });

  return (
    <div className="socialSignUp">
      <div className="sinupContainer">
        <IconButton
          onClick={() => login()}
          onMouseEnter={() => {
            setAnimation(true);
          }}
          onMouseLeave={() => {
            setAnimation(false);
          }}
        >
          <i
            class={
              animation
                ? "fa-brands fa-google fa-bounce"
                : "fa-brands fa-google"
            }
            style={{ color: "#ff0000" }}
          ></i>
        </IconButton>
      </div>
    </div>
  );
};

export default SocialLogin;

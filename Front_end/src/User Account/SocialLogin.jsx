import React, { useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { getUserData } from "../Common Components/Navbar_Components/Navbar";
import { googleSinupData } from "../Data/Post Data/PostGoogleSignupData";

const SocialLogin = () => {
  const navigate = useNavigate();

  const getGoogleUserdata = async () => {
    const googleUserData = await googleSinupData();
    const cookieToken = Cookies.get("gAuth")
    if(cookieToken!=undefined){
      Cookies.set("gToken", googleUserData, { expires: 1 });
    }
  };

  const login = useGoogleLogin({
    onSuccess: (response) => {
      Cookies.set("gAuth", response.access_token, { expires: 1 });
      navigate("/");
      getUserData();
      googleSinupData();
      getGoogleUserdata();
    },
  });

  return (
    <div className="socialSignUp">
      <div className="sinupContainer">
        <IconButton onClick={() => login()}>
          <GoogleIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SocialLogin;
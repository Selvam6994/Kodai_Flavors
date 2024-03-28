import React, { useEffect, useState } from "react";
import "../User Account/LoginPage.css";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import { googleLogout, GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
const LoginPage = () => {
  // 108552170303624155776
  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const fetchData = await fetch(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer${response.access_token}`,
            },
          }
        );
        console.log(await fetchData.json());
      } catch (error) {
        console.log(error);
      }
    },
  });
  // const success = (response) => {
  //   const responseDecode = jwtDecode(response.credential);
  //   console.log(responseDecode);
  // };
  // const error = (error) => {
  //   console.log("Login failed :", error);
  // };

  return (
    <div className="loginPage">
      <Paper className="logInForm">
        <div className="formName">Log in</div>
        <div className="inputContainer">
          <TextField
            id="standard-basic"
            label="Email"
            name="email"
            variant="standard"
          />
          <TextField
            id="standard-basic"
            label="Password"
            name="password"
            variant="standard"
          />
          <Button variant="contained">Log in</Button>
        </div>
        <div className="resetPasswordContainer">
          <Button>Forgot Password?</Button>
          <Button>Create Account</Button>
        </div>
        <div className="socialSignUp">
          <div className="sinupContainer">
            <Button onClick={() => login()}>Sign in with Google 🚀</Button>;
            <Button
              onClick={() => {
                googleLogout();
              }}
            >
              log out
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default LoginPage;

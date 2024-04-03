import React, { useEffect, useState } from "react";
import "../User Account/LoginPage.css";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import SocialLogin from "./SocialLogin";

const LoginPage = () => {
  // 108552170303624155776

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
        <SocialLogin />
      </Paper>
    </div>
  );
};

export default LoginPage;

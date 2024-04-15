import React, { useEffect, useState } from "react";
import "../User Account/LoginPage.css";
import { Button, IconButton, Paper, TextField } from "@mui/material";
import SocialLogin from "./SocialLogin";
import { useFormik } from "formik";
import * as Yup from "yup";
const LoginPage = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  // Log in form validation schema
  const manualLoginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Min. 8 characters required")
      .max(50, "Password is too long")
      .required("Required"),
  });

  const manualLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: manualLoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  //Sign up form validation schema
  const signUpSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const signup = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="loginPage">
      {!signUpForm ? (
        <Paper
          className="logInForm"
          elevation={8}
          sx={{ borderRadius: "20px" }}
        >
          <div className="formName">Log in with</div>
          <div className="socialLoginContainer">
            <SocialLogin />
          </div>
          <span>Or</span>

          <form
            className="manualLoginContainer"
            onSubmit={manualLogin.handleSubmit}
          >
            <TextField
              id="standard-basic"
              label="Email"
              name="email"
              variant="standard"
              onChange={manualLogin.handleChange}
              onBlur={manualLogin.handleBlur}
            />
            {manualLogin.errors.email && manualLogin.touched.email ? (
              <span style={{ color: "red" }}>{manualLogin.errors.email}</span>
            ) : null}
            <TextField
              id="standard-basic"
              label="Password"
              name="password"
              variant="standard"
              onChange={manualLogin.handleChange}
              onBlur={manualLogin.handleBlur}
            />
            {manualLogin.errors.password && manualLogin.touched.password ? (
              <span style={{ color: "red" }}>
                {manualLogin.errors.password}
              </span>
            ) : null}
            <Button variant="contained" type="submit">
              Log in
            </Button>
          </form>
          <div className="resetPasswordContainer">
            <Button>Forgot Password?</Button>
            <Button
              onClick={() => {
                setSignUpForm(true);
              }}
            >
              Create Account
            </Button>
          </div>
        </Paper>
      ) : (
        <Paper
          className="signUpForm"
          elevation={8}
          sx={{ borderRadius: "20px" }}
        >
          <div className="formName">Sign Up</div>
          <form className="signUpContainer">
            <TextField
              id="standard-basic"
              label="Email"
              name="email"
              variant="standard"
              onChange={signup.handleChange}
              onBlur={signup.handleBlur}
            />
            {signup.errors.email && signup.touched.email ? (
              <span style={{ color: "red" }}>{signup.errors.email}</span>
            ) : null}
            <Button variant="contained">Sign up</Button>
          </form>
          <span>Or</span>
          <Button
            onClick={() => {
              setSignUpForm(false);
            }}
          >
            Log in
          </Button>
        </Paper>
      )}
    </div>
  );
};

export default LoginPage;

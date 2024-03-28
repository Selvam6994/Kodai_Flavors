import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Scrolltotop from "./Scrolltotop.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="778057420569-k6rcfqdor6ddg47n3vgg7eltpdcdtvpk.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <Scrolltotop />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);

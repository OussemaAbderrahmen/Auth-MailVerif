import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./input.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

import './index.css'


ReactDOM.render(
  
    <BrowserRouter>
      <GoogleOAuthProvider clientId="41551575171-jmu3e1h3ju8sh3a3vop9hlmu7plgrcd7.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  ,
  document.getElementById("root")
);

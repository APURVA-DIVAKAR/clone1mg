import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { SignupProvider } from "./LoginSignup/SignupProvider";
import { LoginProvider } from "./LoginSignup/LoginProvider";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import { AddressProvider } from "./Address/AddressApi";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <SignupProvider>
          <LoginProvider>
            <AddressProvider>
            <App />
            </AddressProvider>
          </LoginProvider>
        </SignupProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

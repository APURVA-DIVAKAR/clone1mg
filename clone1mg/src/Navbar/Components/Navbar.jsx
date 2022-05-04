import React from "react";
import { Nav } from "../Styleing/Navbar_Styled";
import Advertisement from "./Advertisement";
import { Navbar_search } from "./Navbar_search";
import { Navbar_dropdown } from "./Navbar_dropdown";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="navbar">
          <div className="navbarlogo_tabs">
            <div id="logo">
              <img
                src="https://www.1mg.com/images/tata_1mg_logo.svg"
                alt="TATA 1mg"
                className="logo_img"
              />
            </div>
            <div id="tabs">
              <div>MEDICINES</div>
              <div>
                LAB TESTS
                <div className="reddiv">SAFE</div>
              </div>
              <div>ASK DOCTOR</div>
              <div>COVID-19</div>
              <div>AYURVEDA</div>
              <div>
                CARE PLAN
                <div className="reddiv">SAVE MORE</div>
              </div>
            </div>
          </div>
          <div id="loginSignup">
            <div>
              <a href="login.html" className="logandsign">
                Login
              </a>
              |
              <a href="signUp.html" className="logandsign">
                Sign Up
              </a>
            </div>
            <div>Offers</div>
            <div className="cart_icon">
              <div className="cart_svg"></div>
              <div className="count">0</div>
            </div>
            <div style={{ fontSize: "14px" }}>Need Help ?</div>
          </div>
        </div>
        <Navbar_search />
        <Navbar_dropdown />
      </Nav>
      <Advertisement />
    </>
  );
};

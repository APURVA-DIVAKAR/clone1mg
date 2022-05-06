import React from "react";
import { Nav } from "../Styleing/Navbar_Styled";
import Advertisement from "./Advertisement";
import { Navbar_search } from "./Navbar_search";
import { Navbar_dropdown } from "./Navbar_dropdown";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <div className="navbar">
          <div className="navbarlogo_tabs">
            <div id="logo">
              <Link to="/">
                <img
                  src="https://www.1mg.com/images/tata_1mg_logo.svg"
                  alt="TATA 1mg"
                  className="logo_img"
                />
              </Link>
            </div>
            <div id="tabs">
              <div>
                <Link to="/">MEDICINES</Link>
              </div>
              <div>
                <Link to="/">LAB TESTS</Link>
                <div className="reddiv Safe_div">
                  <div>SAFE</div>
                </div>
              </div>
              <div>
                <Link to="/AskDoctor">ASK DOCTOR</Link>
              </div>
              <div>
                <Link to="/Covid">COVID-19</Link>
              </div>
              <div>
                <Link to="/">AYURVEDA</Link>
              </div>
              <div>
                <Link to="/">CARE PLAN</Link>
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
              <div className="cart_svg">
                <ul class="Cart_Counter_PopUp">
                  <li>
                    <span class="CartCounterPopUp__summary___1Ff-x">
                      Order Summary
                    </span>
                    <span class="CartCounterPopUp__count___3cYl6">0 Item</span>
                  </li>
                  <li>
                    <a
                      href="/cart"
                      data-auto-proceed-cart="true"
                      data-attribute="cart-counter-popup"
                    >
                      <span class="CartCounterPopUp__proceed___vJFRh">
                        PROCEED TO CART
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="count">0</div>
            </div>
            <div style={{ fontSize: "14px" }}>Need Help ?</div>
          </div>
        </div>
        {/* <Navbar_search /> */}
        {/* <Navbar_dropdown /> */}
        {/* <Advertisement /> */}
      </Nav>
    </>
  );
};
{
}

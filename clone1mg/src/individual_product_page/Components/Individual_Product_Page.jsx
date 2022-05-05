import React from "react";
import { Navbar_dropdown } from "../../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../../Navbar/Components/Navbar_search";
import { Product, Upper_div } from "../Styles/Product";

export const Individual_Product_Page = () => {
  return (
    <>
      <Navbar_search />
      <Navbar_dropdown />
      <Product>
        <Upper_div>
          <div>
            <div className="Swiper_image"></div>
            <div className="Image_div">
              <img
                src="https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1649145896/dk8ubvz6wizprqmfsfav.jpg"
                alt=""
              />
            </div>
          </div>
          <div>
            <div className="title">
              <h1>Zingavita Vitamin C Amla Extract 1000mg Tablet</h1>
              <p>Adthera Consumer Brands Pvt Ltd</p>
            </div>
            <div className="highlights">
              <div>Product highlights</div>
              <div>
                <ul>
                  <li>
                    These tablets are GMO-free, sugar-free, soy-free and
                    gluten-free
                  </li>
                  <li>These are GMP certified, vegetarian tablet</li>
                  <li>Helps boost the immune function of the body</li>
                  <li>Promotes glowing skin</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="price_info">
              <div>
                <img src="https://www.1mg.com/images/social_cue.svg" alt="" />
                <p>21 people bought this recently</p>
              </div>
              <div>
                <div className="price_div">
                  <div>
                    <form action="/action_page.php">
                      <input type="radio" name="fav_language" value />
                      <label for="30% off">
                        ₹349
                        <span className="cut_price">₹499</span>
                        <span className="discount">30% off</span>
                      </label>
                      <br></br>
                      <input type="radio" name="fav_language" value />
                      <label for="Care_plan">
                        ₹349+ free shipping and 5% Extra cashback with
                      </label>
                      <br></br>
                    </form>
                  </div>
                  <div></div>
                </div>
                <div className="choice_of"></div>
                <div className="add_to_cart"></div>
              </div>
            </div>
            <div className="offer-container"></div>
          </div>
        </Upper_div>
      </Product>
    </>
  );
};

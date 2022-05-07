import React from "react";
import { Listed_product } from "../Styles/Product";

const Small_product = () => {
  return (
    <Listed_product>
      <div>
        <img
          src="https://onemg.gumlet.io/image/upload/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1649145896/dk8ubvz6wizprqmfsfav.jpg"
          alt="Product"
        />
      </div>
      <div>
        <span className="style__title">
          Zingavita Vitamin C Amla Extract 1000mg Tablet
        </span>
        <div>
          <span className="style__mrp">
            MRP <span className="style__slashed">499</span>
          </span>
          <span className="style__discount">30% off</span>
        </div>
        <span className="style__price">₹349</span>
      </div>
    </Listed_product>
  );
};

export default Small_product;

import React from "react";
import { Single_product } from "../Styles/Product";

export const Single_slider_product = ({
  image,
  name,
  bottle,
  MRP,
  price,
  discount,
}) => {
  return (
    <Single_product>
      <div>
        <img src={image} alt="Product Image" />
      </div>
      <div>{name}</div>
      <div>{bottle}</div>
      <div>
        <div>
          <span>MRP</span>
          <span>₹{MRP}</span>
          <span>{discount}</span>
        </div>
        <div>
          <span>₹{price}</span>
          <span>ADD</span>
        </div>
      </div>
    </Single_product>
  );
};

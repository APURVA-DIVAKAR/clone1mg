import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { get_data } from "../../Redux/actions";
import { Single_product } from "../Styles/Product";

export const Single_slider_product = ({
  image_url,
  name,
  desc,
  mrp,
  price,
  discount,
}) => {
  const dispatch = useDispatch();

  const handleADD = () => {
    axios
      .post(`http://localhost:8080/Cart`, {
        qty: 1,
        image_url,
        name,
        desc,
        mrp,
        price,
        discount,
      })
      .then((data) => {
        get_data(dispatch);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Single_product>
      <div>
        <img src={image_url} alt="Product Image" />
      </div>
      <div>{name}</div>
      <div>{desc}</div>
      <div>
        <div>
          <span>MRP</span>
          <span>₹{mrp}</span>
          <span>{discount}</span>
        </div>
        <div>
          <span>₹{price}</span>
          <span onClick={handleADD}>ADD</span>
        </div>
      </div>
    </Single_product>
  );
};

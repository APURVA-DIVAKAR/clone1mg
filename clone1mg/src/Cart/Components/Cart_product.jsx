import React from "react";
import { Link } from "react-router-dom";
import { Cart_product_style } from "../Style/Cart_Product_style";
// import { Cart_products } from "./Medora.styled";

const Cart_product = ({ product, setCart }) => {
  const handleDelete = () => {
    fetch(`http://localhost:8080/Cart/${product.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("http://localhost:8080/Cart")
          .then((response) => response.json())
          .then((data) => {
            setCart(data);
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  return (
    <Cart_product_style>
      <Link to="">
        <div id="leftPurchaseDetail">
          <div>
            <div id="leftPurchaseName">Show the Product detail here</div>
            <div id="leftPurchasePrice">
              <div>
                ₹<b id="leftPurchasePriceFirst">995</b>
              </div>
              <div id="leftPruchaseMrp">
                MRP &nbsp; ₹<span id="mrpdash">1990</span>
              </div>
            </div>
          </div>
          <div id="quant">bottles of 60 tablets</div>
          <div id="removeItem">
            <div>
              <div className="remove">
                <img src="https://img.1mg.com/images/delete_icon.svg" alt="" />
              </div>
              <div className="remove" onClick={() => handleDelete()}>
                Remove
              </div>
            </div>
            <div>
              <div id="dec">
                <img
                  src="https://www.1mg.com/images/minus-cart.svg"
                  alt="decrease"
                  className=""
                />
              </div>
              <div id="betweenIncDec">1 </div>
              <div id="inc">
                <img
                  src="https://www.1mg.com/images/plus-cart.svg"
                  alt="increase"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Cart_product_style>
  );
};

export default Cart_product;

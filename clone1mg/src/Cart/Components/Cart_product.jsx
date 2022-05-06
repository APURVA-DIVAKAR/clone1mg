import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { get_data } from "../../Redux/actions";
import { Cart_product_style } from "../Style/Cart_Product_style";
// import { Cart_products } from "./Medora.styled";

const Cart_product = ({ name, MRP, price, bottle, id, qty }) => {
  const [count, setCount] = React.useState(qty);
  const dispatch = useDispatch();

  const handleDelete = () => {
    fetch(`http://localhost:8080/Cart/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((data) => {
            get_data(dispatch);
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
            <div id="leftPurchaseName">{name}</div>
            <div id="leftPurchasePrice">
              <div>
                ₹<b id="leftPurchasePriceFirst">{price}</b>
              </div>
            </div>
          </div>
          <div>
            <div id="quant">{bottle}</div>
            <div id="leftPruchaseMrp">
              MRP &nbsp; ₹<span id="mrpdash">{MRP}</span>
            </div>
          </div>
          <div id="removeItem">
            <div onClick={() => handleDelete()}>
              <div className="remove">
                <img src="https://img.1mg.com/images/delete_icon.svg" alt="" />
              </div>
              <div className="remove">Remove</div>
            </div>
            <div>
              <div id="dec">
                <img
                  src="https://www.1mg.com/images/minus-cart.svg"
                  alt="decrease"
                  className=""
                  onClick={() => {
                    if (count > 1) {
                      setCount(count - 1);
                    } else {
                      handleDelete();
                    }
                  }}
                />
              </div>
              <div id="betweenIncDec">{count}</div>
              <div id="inc">
                <img
                  src="https://www.1mg.com/images/plus-cart.svg"
                  alt="increase"
                  onClick={() => setCount(count + 1)}
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

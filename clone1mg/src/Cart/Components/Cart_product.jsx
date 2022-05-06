import React from "react";
import { Link } from "react-router-dom";
import { Cart_products } from "./Medora.styled";

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
    <Cart_products>
      <Link to={`/Medora/Product/${product.product_id}`}>
        <div>
          <img src={product.image} alt="Products Image" />
        </div>
        <div>
          <h3>{product.name}</h3>
          <p>Quantity: {product.quantity}</p>
          <p>£{product.price}</p>
        </div>
      </Link>
        <div>
          <button onClick={() => handleDelete()}>Remove</button>
        </div>
    </Cart_products>
  );
};

export default Cart_product;

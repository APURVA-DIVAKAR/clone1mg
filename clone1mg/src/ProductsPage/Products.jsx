// import productsFeatured from "../database/ProductsFeat"
import React, { useState, useEffect } from "react";
import Sidebar from "./SideBar/Sidebar";
import Cards from "./Cards";
import styles from "./Products.module.css";

const Products = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    let res = await fetch(`http://localhost:8080/Featured`);
    let productsFeatured = await res.json();
    // console.log(productsFeatured);
    setData(...data, productsFeatured);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.Main_container}>
      <Sidebar />
      <div>
        <div>
          <h2>Featured</h2>
          <div>
            <span>Sort by </span>
            <select>
              <option>By low to high price</option>
              <option>By High to low price</option>
              <option>by rating</option>
              <option>by review</option>
            </select>
          </div>
        </div>
        <div className={styles.container}>
          {data.map((el) => {
            return (
              <div key={el.id} className="cards">
                <Cards value={el} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;

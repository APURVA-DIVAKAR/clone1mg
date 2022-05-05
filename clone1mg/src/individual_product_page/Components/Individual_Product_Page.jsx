import React from "react";
import { Navbar_dropdown } from "../../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../../Navbar/Components/Navbar_search";
import { Product } from "../Styles/Product";
import { Product_div } from "./Product_div";

export const Individual_Product_Page = () => {
  return (
    <>
      <Navbar_search />
      <Navbar_dropdown />
      <Product>
        <Product_div />
        
      </Product>
    </>
  );
};

import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

import { Navbar_dropdown } from "../../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../../Navbar/Components/Navbar_search";
import { Product } from "../Styles/Product";
import { Product_div } from "./Product_div";
import { Product_info_component } from "./Product_info";
import { useDispatch } from "react-redux";
import { Products_data_func } from "../../Redux/actions";

export const Individual_Product_Page = () => {
  const [product, setProduct] = React.useState({});
  const { type, id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    Products_data_func(dispatch, type, id);
  }, []);

  console.log("product:", product);

  return (
    <>
      <Navbar_search />
      <Navbar_dropdown />
      <Product>
        <Product_div {...product} />
        <Product_info_component />
      </Product>
    </>
  );
};

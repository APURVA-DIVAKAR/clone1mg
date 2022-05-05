import React from "react";
import Advertisement from "../Navbar/Components/Advertisement";
import { Navbar_dropdown } from "../Navbar/Components/Navbar_dropdown";
import { Navbar_search } from "../Navbar/Components/Navbar_search";
import Ayurved from "../Productdiv/components/Ayurveda";
import FeaturedBrand from "../Productdiv/components/FeaturedBrand";
import Healthconcern from "../Productdiv/components/HealthConcern";
import PopularCategories from "../Productdiv/components/PopularCategories";
import ShopByConcern from "../Productdiv/components/ShopByConcern";

const Home = () => {
  return (
    <div>
      <Navbar_search />
      <Navbar_dropdown />
      <Advertisement />
      <FeaturedBrand />
      <PopularCategories />
      <ShopByConcern />
      <Healthconcern />
      {/* <Ayurved /> */}
    </div>
  );
};

export default Home;

// import logo from './logo.svg';
import './App.css';
import React from 'react';
import FeaturedBrand from '../Productdiv/components/FeaturedBrand';
import PopularCategories from './components/PopularCategories';
import ShopByConcern from './components/ShopByConcern';
import HealthConcern from './components/HealthConcern';
import Ayurved from './components/Ayurveda';
import Ayurvedaaa from './components/Ayurvedaaa';

function App() {
  return (
    <div> 

     <FeaturedBrand/>   
     <PopularCategories/>
     <ShopByConcern/>
     <HealthConcern/>
     <Ayurved/>
     {/* <Ayurvedaaa/> */}
    </div>
  
  );
}

export default App;

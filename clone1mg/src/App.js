// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Components/Navbar";
// import Signup from "./LoginSignup/Signup";
import "./App.css";
import LastsecFooter from "./Components/LastsecFooter";
import LastFooter from "./Components/LastFooter";

import Covid from "./COVID19/Covid";
import Upload from "./Components/UPLOAD/Upload";
import { Ask_Doctor } from "./Ask_Doctor/Components/Ask_Doctor";
import { Routes, Route } from "react-router-dom";
import Home from "./Home_page/Home";

import Signup from "./LoginSignup/Signup";
import Login from "./LoginSignup/Login";
import Ayurveda from "./Ayurveda_Navbar/Ayurveda";
import { Main_product_page } from "./ProductsPage/Main_product_page";
import Address from "./Address/Address";
import ProductsDelivery from "./Address/ProductsDelivery";
import AddAddress from "./Address/AddAddress";
import Delivery from "./Address/Delivery";
import { Cart_com } from './Cart/Components/Cart_com'
import { Individual_Product_Page} from './individual_product_page/Components/Individual_Product_Page'
import  CarePlan   from './CarePlanePage/CarePlan'




function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <Individual_Product_Page /> */}
      {/* <Cart_com /> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart_com />}></Route>
        <Route path="/Upload" element={<Upload />}></Route>
        <Route path="/AskDoctor" element={<Ask_Doctor />}></Route>
        <Route path="/Covid" element={<Covid />}></Route>
        <Route path="/CarePlan" element={<CarePlan />}></Route>
        <Route path="/Ayurveda" element={<Ayurveda />}></Route>
        <Route path="/Products" element={<Main_product_page />}></Route>
        <Route
          path="/Products/:type/:id"
          element={<Individual_Product_Page />}
        ></Route>
      </Routes>

      <LastsecFooter />
      <LastFooter />
    <AddAddress/>
     <Delivery/>
    </div>
  );

}


export default App;

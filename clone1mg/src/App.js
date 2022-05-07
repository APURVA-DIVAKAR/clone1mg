// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Components/Navbar";
// import Signup from "./LoginSignup/Signup";
import "./App.css";
import LastsecFooter from "./components/LastsecFooter";
import LastFooter from "./components/LastFooter";

import Covid from "./COVID19/Covid";
import Upload from "./components/UPLOAD/Upload";
import { Ask_Doctor } from "./Ask_Doctor/Components/Ask_Doctor";
import { Routes, Route } from "react-router-dom";
import Home from "./Home_page/Home";

import Signup from "./LoginSignup/Signup";
import Login from "./LoginSignup/Login";
<<<<<<< HEAD
import Ayurveda from "./Ayurveda_Navbar/Ayurveda"



=======
import Ayurveda from "./Ayurveda_Navbar/Ayurveda";
import Products from "./ProductsPage/Products";
import Address from "./Address/Address";
import Delivery from "./Address/Delivery";
import { Cart_com } from "./Cart/Components/Cart_com";
import { Individual_Product_Page } from "./individual_product_page/Components/Individual_Product_Page";
>>>>>>> 3a3fd0764789c939a415fef5964af18f112b2d1d

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Cart" element={<Cart_com />}></Route>
        <Route path="/Upload" element={<Upload />}></Route>
        <Route path="/AskDoctor" element={<Ask_Doctor />}></Route>
        <Route path="/Covid" element={<Covid />}></Route>

        <Route path="/Ayurveda" element={<Ayurveda />}></Route>

        <Route
          path="/Products/:id"
          element={<Individual_Product_Page />}
        ></Route>
      </Routes>

      {/* <LastsecFooter /> */}
      <LastFooter />
<<<<<<< HEAD
      <Login/>
=======
      {/* <Delivery/> */}
>>>>>>> 3a3fd0764789c939a415fef5964af18f112b2d1d
    </div>
  );
}

export default App;

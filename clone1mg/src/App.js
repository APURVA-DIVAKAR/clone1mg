// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Components/Navbar";
// import Signup from "./LoginSignup/Signup";
import "./App.css";
import LastsecFooter from "./Components/LastsecFooter";
import LastFooter from "./Components/LastFooter";

import Covid from "./COVID19/Covid";
import Upload from "./components/UPLOAD/Upload";
import Ayurveda from "./Ayurveda_Navbar/Ayurveda";
import Upload from "./Components/UPLOAD/Upload";
import { Ask_Doctor } from "./Ask_Doctor/Components/Ask_Doctor";
import { Routes, Route } from "react-router-dom";
import Home from "./Home_page/Home";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Upload/>
        {/* <Covid/> */}
      <LastsecFooter/>
      <LastFooter/>
      {/* <Ayurveda/> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Upload" element={<Upload />}></Route>
        <Route path="/AskDoctor" element={<Ask_Doctor />}></Route>
        <Route path="/Covid" element={<Covid />}></Route>
        <Route path="/Ayurveda" element={<Ayurveda/>}></Route>
      </Routes>

      <LastsecFooter />
      <LastFooter />
    </div>
  );
}

export default App;

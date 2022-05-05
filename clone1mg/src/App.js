
// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Components/Navbar";
// import Signup from "./LoginSignup/Signup";
import './App.css';
import LastsecFooter from './components/LastsecFooter';
import LastFooter from './components/LastFooter';

import Covid from "./COVID19/Covid";
import Upload from "./components/UPLOAD/Upload";
import Ayurveda from "./Ayurveda_Navbar/Ayurveda";
function App() {
  return (
    
    <div className="App">
        <Navbar />
        <Upload/>
        {/* <Covid/> */}
      <LastsecFooter/>
      <LastFooter/>
      <Ayurveda/>
    </div>
  );
}

export default App;

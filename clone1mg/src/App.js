// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Components/Navbar";
// import Signup from "./LoginSignup/Signup";
import './App.css';
import LastsecFooter from './components/LastsecFooter';
import LastFooter from './components/LastFooter';

import Covid from "./COVID19/Covid";
function App() {
  return (
    
    <div className="App">
        <Navbar />
     
        <Covid/>
      <LastsecFooter/>
      <LastFooter/>

    </div>
  );
}

export default App;

<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import LastsecFooter from './Components/LastsecFooter';
import LastFooter from './Components/LastFooter';

function App() {
  return (
    <div className="App">
      <LastsecFooter/>
      <LastFooter/>
    </div>
=======
// import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./Navbar/Components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
     <div>
        <Navbar />
      <Signup/>
     </div>
>>>>>>> 7b431b43da602f6d41cd72d2eb9496524affb343
  );
}

export default App;

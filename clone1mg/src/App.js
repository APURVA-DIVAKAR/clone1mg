import "./App.css";
import LastsecFooter from "./Components/LastsecFooter";
import LastFooter from "./Components/LastFooter";
import { Ask_Doctor } from "./Ask_Doctor/Components/Ask_Doctor";
import { Navbar } from "./Navbar/Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Ask_Doctor />
      <LastsecFooter />
      <LastFooter />
    </div>
  );
}

export default App;

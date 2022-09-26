import "../src/index.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <Navb/> */}
        <Routes>
          <Route exact path="/home" component={Home}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

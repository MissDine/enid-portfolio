import "../src/index.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About"
import Services from "./components/Services/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/home" component={Home}></Route>
        </Routes>
        <Header/>
        <About/>
        <Services/>
      </div>
    </Router>
  );
}

export default App;

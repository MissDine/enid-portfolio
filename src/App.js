import "../src/index.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About"
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact"
import Projects from "./components/Projects/Projects"
import Copyright from "./components/Copyright/Copyright";
import Experience from "./components/Experience/Experience"

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
        <Experience/>
        <Projects/>
        <Contact/>
        <Copyright/>
      </div>
    </Router>
  );
}

export default App;

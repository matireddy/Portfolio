import "./App.css";
import Navbar from "./components/Navbar";
import Themes from "./components/Themes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Themes />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Navigate replace to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

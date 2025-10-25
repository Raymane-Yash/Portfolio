import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import {motion} from "framer-motion"
import './index.css'

function App() {
  return (
    <Router>
      {/* Navbar at top */}
      <Navbar/>

      {/* Page content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer at bottom */}
      <Footer />
    </Router>
  );
}

export default App;

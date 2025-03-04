import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import de React Router
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Skills from "./pages/Skills";
import Projets from "./pages/Projets";
import Detail from "./components/Detail"; // Page de détail
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router> {/* Encapsuler l'app dans Router */}
      <div>
        <Navbar />
        <Routes> {/* Routes pour gérer les différentes pages */}
          <Route path="/" element={<Hero />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/projets/:id" element={<Detail />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


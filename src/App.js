import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar"; // Navbar dédiée
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Blog from "./blog";
import Mentions from "./Mentions";
import Offre from "./Offre";
import Footer from "./Footer"; // Footer global

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      {/* Navbar */}
      <NavBar />

      {/* Contenu principal */}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/mentions" element={<Mentions />} />
          <Route path="/offre" element={<Offre />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer message="© 2025 MonSite - Tous droits réservés." />
    </div>
  );
}

export default App;

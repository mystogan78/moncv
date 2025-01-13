import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "#000000" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <p>John DOE</p>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Accueil
              </Link>
            </li>{" "}
            <li className="nav-item">
              <Link className="nav-link" to="/offre">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mentions">
                Mentions légales
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Me contacter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

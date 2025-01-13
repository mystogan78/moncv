import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);

  // Fonction pour gérer le clic sur un lien et définir l'état actif
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <footer className="text-dark py-4" style={{ backgroundColor: "#EEE" }}>
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Informations personnelles */}
          <div className="col-md-3">
            <h5>John Doe</h5>
            <p>
              40 Rue Laure Diebold
              <br />
              69009 Lyon, France
              <br />
              Téléphone : 06 20 30 40 50
            </p>
            <div className="d-flex">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="bi bi-github fs-4"></i> {/* Icône GitHub */}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="bi bi-twitter fs-4"></i> {/* Icône Twitter */}
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-linkedin fs-4"></i> {/* Icône LinkedIn */}
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    activeLink === "Accueil" ? "text-primary" : "text-dark"
                  }`}
                  to="/"
                  onClick={() => handleLinkClick("Accueil")}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${
                    activeLink === "À propos" ? "text-primary" : "text-dark"
                  }`}
                  to="/About"
                  onClick={() => handleLinkClick("À propos")}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${
                    activeLink === "Services" ? "text-primary" : "text-dark"
                  }`}
                  to="/Offre"
                  onClick={() => handleLinkClick("Services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${
                    activeLink === "Me contacter" ? "text-primary" : "text-dark"
                  }`}
                  to="/contact"
                  onClick={() => handleLinkClick("Me contacter")}
                >
                  Me contacter
                </Link>
              </li>
              <li>
                <Link
                  className={`nav-link ${
                    activeLink === "Mentions légales"
                      ? "text-primary"
                      : "text-dark"
                  }`}
                  to="/Mentions"
                  onClick={() => handleLinkClick("Mentions légales")}
                >
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Réalisations */}
          <div className="col-md-3">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  className={`text-decoration-none ${
                    activeLink === "Fresh food" ? "text-primary" : "text-dark"
                  }`}
                  to="/about"
                  onClick={() => handleLinkClick("Fresh food")}
                >
                  Fresh food
                </Link>
              </li>
              <li>
                <Link
                  className={`text-decoration-none ${
                    activeLink === "Restaurant Akira"
                      ? "text-primary"
                      : "text-dark"
                  }`}
                  to="/about"
                  onClick={() => handleLinkClick("Restaurant Akira")}
                >
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link
                  className={`text-decoration-none ${
                    activeLink === "Espace bien-être"
                      ? "text-primary"
                      : "text-dark"
                  }`}
                  to="/About"
                  onClick={() => handleLinkClick("Espace bien-être")}
                >
                  Espace bien-être
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 : Articles */}
          <div className="col-md-3">
            <h5>Mes derniers articles</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  className={`text-decoration-none ${
                    activeLink === "Coder son site en HTML/CSS"
                      ? "text-primary"
                      : "text-dark"
                  }`}
                  to="/blog"
                  onClick={() => handleLinkClick("Coder son site en HTML/CSS")}
                >
                  Coder son site en HTML/CSS
                </Link>
              </li>
              <li>
                <Link
                  className={`text-decoration-none ${
                    activeLink === "Vendre ses produits sur le web"
                      ? "text-primary"
                      : "text-dark"
                  }`}
                  to="/articles/ecommerce"
                  onClick={() =>
                    handleLinkClick("Vendre ses produits sur le web")
                  }
                >
                  Vendre ses produits sur le web
                </Link>
              </li>
              <li>
                <Link
                  className={`text-decoration-none ${
                    activeLink === "Se positionner sur Google"
                      ? "text-primary"
                      : "text-dark"
                  }`}
                  to="/blog"
                  onClick={() => handleLinkClick("Se positionner sur Google")}
                >
                  Se positionner sur Google
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center bg-dark text-light py-2">
        © Designed by John Doe
      </div>
    </footer>
  );
};

export default Footer;

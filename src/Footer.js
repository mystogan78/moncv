import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  // Fonction pour déterminer les classes dynamiques
  const getLinkClass = (linkName) =>
    `nav-link ${activeLink === linkName ? "text-primary" : "text-dark"}`;

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
                <i className="bi bi-github fs-4"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 text-dark"
              >
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark"
              >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens utiles */}
          <div className="col-md-3">
            <h5>Liens utiles</h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  className={getLinkClass("Accueil")}
                  to="/"
                  onClick={() => handleLinkClick("Accueil")}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("À propos")}
                  to="/About"
                  onClick={() => handleLinkClick("À propos")}
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("Services")}
                  to="/Offre"
                  onClick={() => handleLinkClick("Services")}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("Me contacter")}
                  to="/contact"
                  onClick={() => handleLinkClick("Me contacter")}
                >
                  Me contacter
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("Mentions légales")}
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
                  className={getLinkClass("Fresh food")}
                  to="/about"
                  onClick={() => handleLinkClick("Fresh food")}
                >
                  Fresh food
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("Restaurant Akira")}
                  to="/about"
                  onClick={() => handleLinkClick("Restaurant Akira")}
                >
                  Restaurant Akira
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("Espace bien-être")}
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
                  className={getLinkClass("Coder son site en HTML/CSS")}
                  to="/blog"
                  onClick={() => handleLinkClick("Coder son site en HTML/CSS")}
                >
                  Coder son site en HTML/CSS
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("Vendre ses produits sur le web")}
                  to="/blog"
                  onClick={() =>
                    handleLinkClick("Vendre ses produits sur le web")
                  }
                >
                  Vendre ses produits sur le web
                </Link>
              </li>
              <li>
                <Link
                  className={getLinkClass("Se positionner sur Google")}
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

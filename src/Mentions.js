import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Mentions = () => {
  const [openSection, setOpenSection] = useState(null);

  // Fonction pour basculer l'affichage des sections
  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-center">
        <h1 style={{ color: "#0d6efd" }}>Mentions légales</h1>
      </div>

      {/* Section Éditeur de texte */}
      <div
        className="border p-4 mb-3"
        style={{
          color: openSection === "editor" ? "#0d6efd" : "#1e1e1e", // Couleur personnalisée//
        }}
      >
        <div className="d-flex justify-content-between">
          <h2>Éditeur de texte</h2>
          <button
            className="btn btn-link"
            onClick={() => toggleSection("editor")}
          >
            {openSection === "editor" ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
        {/* Contenu de la section Éditeur de texte */}
        {openSection === "editor" && (
          <div>
            <p>40 Rue Laure Diebold, 69009 Lyon, France</p>
            <p> +33 6 20 30 40 50</p>
            <p> John.doe@gmail.com</p>
          </div>
        )}
      </div>

      {/* Section Coordonnées */}
      <div
        className="border p-4 mb-3"
        style={{
          color: openSection === "contact" ? "#0d6efd" : "#1e1e1e", // Changer la couleur en fonction de l'état
        }}
      >
        <div className="d-flex justify-content-between">
          <h2>Hébergeur</h2>
          <button
            className="btn btn-link"
            onClick={() => toggleSection("contact")}
          >
            {openSection === "contact" ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
        {/* Contenu de la section Coordonnées */}
        {openSection === "contact" && (
          <div>
            <h4>Always Data</h4>
            <p>91 rue du Faubourg Saint Honoré 75008 PARIS</p>
            <ul>
              <li>www.alwaysdata.com</li>
            </ul>
          </div>
        )}
      </div>

      {/* Section Autres informations */}
      <div
        className="border p-4"
        style={{
          color: openSection === "other" ? "#0d6efd" : "#1e1e1e", // Couleur personnalisée
        }}
      >
        <div className="d-flex justify-content-between">
          <h2>Crédits</h2>
          <button
            className="btn btn-link"
            onClick={() => toggleSection("other")}
          >
            {openSection === "other" ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
        {/* Contenu de la section Autres informations */}
        {openSection === "other" && (
          <div>
            <p>Site développé par John DOE, étudiant du CEF</p>
            <p>Les images libres de droit sont issues du site Pixabay</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mentions;

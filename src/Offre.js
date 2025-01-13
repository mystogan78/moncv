import React, { useState } from "react";
// Importation des icônes depuis react-icons
import { FaPalette, FaCode, FaSearch } from "react-icons/fa";

const Offre = () => {
  const [imageSrc] = useState("/image.offres/header.image.png");

  const [title] = useState("Mon offre de services");
  const [text] = useState(
    "Voici les prestations sur lesquelles je peux intervenir."
  );
  // Utilisation de useState pour gérer les données dynamiques
  const [items] = useState([
    {
      title: "UX DESIGN",
      description:
        "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.",
      icon: <FaPalette />, // Icône de design
    },
    {
      title: "DEVELOPPEMENT WEB",
      description:
        "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.",
      icon: <FaCode />, // Icône de code
    },
    {
      title: "REFERENCEMENT",
      description:
        "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.",
      icon: <FaSearch />, // Icône de recherche
    },
  ]);

  return (
    <div className="container">
      <header
        className="bg-light text-center"
        style={{
          margin: 0, // Supprime les marges externes
          padding: 0, // Supprime les paddings internes
        }}
      >
        {/* Image de fond */}
        <div
          style={{
            backgroundImage: `url(${imageSrc})`, // Image de fond
            backgroundSize: "cover", // L'image couvre tout le conteneur
            backgroundPosition: "center", // L'image est centrée
            width: "100%", // Prend toute la largeur
            height: "150px", // Hauteur personnalisée (modifiable selon votre besoin)
          }}
        ></div>

        {/* Texte du header */}
        <div style={{ padding: "20px 0" }}>
          <h1 style={{ color: "#0d6efd" }}>{title}</h1>
          <h5 style={{ color: "#444" }}>{text}</h5>
        </div>
      </header>

      {/* Section des contenus */}
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
            <div className="card text-center">
              <div className="card-img-top">
                {/* Icône avec une taille ajustée */}
                <div style={{ fontSize: "3rem", color: "#0d6efd" }}>
                  {item.icon}
                </div>
              </div>
              <div className="card-body">
                <div className="publication">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offre;

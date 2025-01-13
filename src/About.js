import React, { useState } from "react";

const About = () => {
  const [imageSrc] = useState("/image.about/header.image.png");
  const [text] = useState("Voici quelques-unes de mes réalisations");

  const [title] = useState("Portofolio");

  // Utilisation de useState pour gérer les données dynamiques
  const [items] = useState([
    {
      title: "Fresh food ",
      description: "Réalisation d'un site avec commande en ligne.",
      image: "/image.about/image1.png",
      button: "voir plus",
      creer: "Site réalisé avec PHP et MySQL ",
    },
    {
      title: "Restaurant Akira",
      description: "Réalisation d'un site vitrine.",
      image: "/image.about/image2.png",
      button: "voir plus",
      creer: "Site réalisé avec WordPress ",
    },
    {
      title: "Espace bien-être",
      description:
        "Réalisation d'un site vitrine pour un praticien de bien-être. ",
      image: "/image.about/image3.png",
      button: "voir plus",
      creer: "Site réalisé en HTML/CSS",
    },
  ]);

  return (
    <div className="container">
      {/* Header spécifique à la page About */}
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
            <div className="card">
              <img
                src={item.image} // Chemin de l'image
                alt={item.title} // Texte alternatif
                className="card-img-top img-fluid" // Image responsive
              />
              <div className="card-body">
                {/* Div pour la publication */}
                <div className="publication">
                  <h5 className="d-flex justify-content-center">
                    {item.title}
                  </h5>
                  <p className="card-text">{item.description}</p>
                </div>

                {/* Bouton centré */}
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    style={{ borderRadius: "30%" }}
                  >
                    {item.button}
                  </button>
                </div>

                {/* Réalisation */}
                <div className="d-flex justify-content-center mt-2">
                  <small className="text-muted">{item.creer}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

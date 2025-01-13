import React, { useState } from "react";

const Blog = () => {
  const [imageSrc] = useState("/Image.blog/header.image.png");
  const [title] = useState("Blog");
  const [text] = useState(
    "Retrouvez ici quelques articles sur le développement web"
  );

  // Utilisation de useState pour gérer les données dynamiques
  const [items] = useState([
    {
      title: "Coder son site en HTML/CSS",
      description:
        "Sorne quick example text to build on the card title and make up the bulk of the card's content.",
      image: "/Image.blog/image1.png",
      button: "Lire la suite",
      date: "Publié le 22 août 2022",
    },
    {
      title: "Vendre ses produits sur le web ",
      description:
        "Sorne quick example text to build on the card title and make up the bulk of the card's content.",
      image: "/Image.blog/image2.png",
      button: "Lire la suite",
      date: "Publié le 20 août 2022",
    },
    {
      title: "Se positionner sur Google ",
      description:
        "Sorne quick example text to build on the card title and make up the bulk of the card's content.",
      image: "/Image.blog/image3.png",
      button: "Lire la suite",
      date: "Publié le 1 août 2022",
    },
    {
      title: "Coder en responsive design ",
      description:
        "Sorne quick example text to build on the card title and make up the bulk of the card's content.",
      image: "/Image.blog/image4.png",
      button: "Lire la suite",
      date: "Publié le 31 juillet 2022",
    },
    {
      title: "Techniques de référencement ",
      description:
        "Sorne quick example text to build on the card title and make up the bulk of the card's content.",
      image: "/Image.blog/image5.png",
      button: "Lire la suite",
      date: "Publié le 30 juillet 2022",
    },
    {
      title: "Apprendre Ã coder ",
      description:
        "Sorne quick example text to build on the card title and make up the bulk of the card's content.",
      image: "/Image.blog/image6.png",
      button: "Lire la suite",
      date: "Publié le 12 juillet 2022",
    },
  ]);

  return (
    <div className="container">
      {/* Titre centré */}
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
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                </div>

                {}
                <div className="">
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ borderRadius: "30%" }}
                  >
                    {item.button}
                  </button>
                </div>

                {/* Date de publication */}
                <div className=" mt-2">
                  <small className="text-muted">{item.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

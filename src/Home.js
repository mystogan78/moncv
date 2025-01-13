import React, { useState, useEffect } from "react";

const Home = () => {
  const [userData, setUserData] = useState(null); // État pour les données utilisateur
  const [showSkills, setShowSkills] = useState(true); // État pour afficher/masquer les compétences
  const [image] = useState("/image.home/developpement.png");
  const [imageSrc] = useState("/developpeur.png");
  const [altText] = useState("John DOE");

  // Charger les données utilisateur (simulation)
  useEffect(() => {
    const fetchData = async () => {
      const data = {
        name: "John Doe",
        description:
          "Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du développement web. Basé à LYON, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation développeur web full stack. J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.",

        skills: [
          { name: "HTML", level: 90, color: "#FF0000" },
          { name: "CSS", level: 80, color: "#33f0ff" },
          { name: "JavaScript", level: 70, color: "#ffc107" },
          { name: "PHP", level: 60, color: "#0d6efd" },
          { name: "React", level: 50, color: "#198754" },
        ],
      };

      // Simuler un délai avant de charger les données
      setTimeout(() => setUserData(data), 1000);
    };

    fetchData();
  }, []);

  // Si les données ne sont pas encore chargées, afficher un message de chargement
  if (!userData) {
    return <p>Chargement de la page d'accueil...</p>;
  }

  return (
    <div className="row align-items-center">
      {/* Section Photo */}
      <header
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh", // Prend un tiers de la page en desktop
        }}
      >
        <div className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
          <h1 style={{ color: "#0d6efd" }}>Bonjour, je suis John Doe</h1>
          <p style={{ color: "#0d6efd" }}>Développeur web full stack</p>
        </div>
      </header>

      <div className="col-md-4 text-center">
        {/* Image responsive */}
        <img
          src={imageSrc}
          alt={altText}
          className="img-fluid w-100" // Image qui s'adapte à la taille de l'écran
        />
      </div>

      {/* Section Description et Compétences */}
      <div className="col-md-8">
        <p>{userData.description}</p>

        {/* Bouton pour afficher/masquer les compétences */}
        <button
          className="btn btn-primary mb-3"
          onClick={() => setShowSkills(!showSkills)}
        >
          {showSkills ? "Masquer les compétences" : "Afficher les compétences"}
        </button>

        {/* Compétences */}
        {showSkills && (
          <div>
            <h4>Compétences</h4>
            {userData.skills.map((skill, index) => (
              <div className="mb-3" key={index}>
                <label>{skill.name}</label>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    {skill.level}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

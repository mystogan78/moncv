import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [title] = useState("Contactez-moi");
  const [contactInfo] = useState([
    {
      id: 1,
      label: "Adresse",
      value: "40 Rue Laure Diebold, 69009 Lyon, France",
    },
    { id: 2, label: "Téléphone", value: "06 20 30 40 50" },
  ]);
  const [form] = useState("Coordonnées de contact");
  const [image1] = useState("/image.contact/maps.png");
  const [title1] = useState("");

  return (
    <div className="container my-5">
      <header className="bg-light py-5 text-center">
        <h1 style={{ color: "#0d6efd" }}>{title}</h1>
      </header>
      <div className="row">
        {/* Formulaire à gauche */}
        <div className="col-md-6 border-end">
          <h2 className="mb-4">Formulaire de contact</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nom :
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-user"></i> {/* Icône d'une personne */}
                </span>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email :
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i> {/* Icône mail */}
                </span>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="Votre email"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Votre numéro de téléphone :
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-phone"></i> {/* Icône mail */}
                </span>
                <input
                  type="téléphone"
                  id="téléphone"
                  className="form-control"
                  placeholder="Votre numéro de téléphone"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="telephone" className="form-label">
                Sujet :
              </label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-paper-plane"></i> {/* Icône mail */}
                </span>
                <input
                  type="sujet"
                  id="sujet"
                  className="form-control"
                  placeholder="sujet"
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message :
              </label>
              <textarea
                id="message"
                className="form-control"
                rows="4"
                placeholder="Votre message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>

        {/* Coordonnées à droite */}
        <div className="col-md-6">
          <h2 className="mb-4">{form}</h2>
          <ul className="list-unstyled">
            {contactInfo.map((info) => (
              <li key={info.id} className="mb-3">
                <strong>
                  {/* Ajout des icônes conditionnellement pour l'adresse et le téléphone */}
                  {info.label === "Adresse" && (
                    <i className="fas fa-map-marker-alt me-2"></i>
                  )}
                  {info.label === "Téléphone" && (
                    <i className="fas fa-mobile-alt me-2"></i>
                  )}
                  {info.label} :
                </strong>
                {info.value}
              </li>
            ))}
          </ul>
          {/* Placer l'image ici, en dehors de la liste */}
          <img
            src={image1} // Chemin de l'image
            alt={title1} // Texte alternatif
            className="card-img-top img-fluid" // Image responsive
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

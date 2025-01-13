import React, { useState } from "react";

const Header = () => {
  // États pour le titre et l'image
  const [title] = useState(" John DOE, développeur web fullstack débutant");
  const [imageSrc] = useState("/header.image.png");
  const [altText] = useState("Image avec titre");

  return (
    <header className="position-relative">
      <div className="container-fluid p-0">
        {/* Image responsive */}
        <img
          src={imageSrc}
          alt={altText}
          className="img-fluid w-100" // Image qui s'adapte à la taille de l'écran
        />
        {/* Titre placé dans l'image avec fond semi-transparent */}
        <h1
          className="position-absolute top-50 start-50 translate-middle text-white  p-3 "
          style={{
            padding: "20px 30px",
            width: "75%",
          }}
        >
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;

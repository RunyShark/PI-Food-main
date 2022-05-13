import React from "react";
import ImgError from "./img/error-404-with-the-cute-chef-hat-mascot-free-vector.jpg";
import "./error.css";
const Error = () => {
  return (
    <>
      <div className="Error-dad">
        <h1>Ruta no disponible</h1>

        <img src={ImgError} alt="IMG" />
      </div>
    </>
  );
};

export default Error;

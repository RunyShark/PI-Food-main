import React from "react";
import ImgError from "./img/error-404-with-the-cute-chef-hat-mascot-free-vector.jpg";
import "./error.css";
const Error = () => {
  return (
    <>
      <div className="Error-dad">
        <div className="Error-tittle">
          <h1>Soy Error</h1>
        </div>
        <div className="Error-img">
          <img src={ImgError} alt="IMG" />
        </div>
      </div>
    </>
  );
};

export default Error;

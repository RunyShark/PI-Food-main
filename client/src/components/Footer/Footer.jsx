/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import git from "../../helpers/Img/gitmuñaño-removebg-preview.png";
import link from "../../helpers/Img/linke-removebg-preview.png";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="pie-pagina">
      <div className="grupo-1">
        <div className="box">
          <div className="box">
            <h2>Sobre mi</h2>
            <p>
              Desarrollor web. Soy una persona responsable, respetuosa, amable,
              ordenada, enseñable y tolerante, sé trabajar en equipo y tengo
              habilidades lógicas al resolver problemas de programación. Busco
              mi primera experiencia laboral estable.
            </p>
          </div>
        </div>
        <div className="box">
          <h2>Contacto</h2>
          <p>2283578806</p>
          <p>sdmoreno51@gmail.com</p>
          <p>Xalapa-Enríquez, Veracruz, México.</p>
        </div>
        <div className="box">
          <h2>Mas informacion</h2>
          <div className="red-social">
            <a target="_blank" href="https://github.com/RunyShark">
              <img src={git} alt="git" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sergio-dario-moreno-sosa-aa204022a/"
            >
              <img src={link} alt="git" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="grupo-2">
        <small>
          <p>
            &copy;{new Date().getFullYear()} Sergio Dario Moreno Sosa | All
            rights reserved | Terms Of Service | Privacy
          </p>
        </small>
      </div>
    </footer>
  );
};
export default Footer;

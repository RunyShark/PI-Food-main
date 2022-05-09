/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";

import "./nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-dad">
        <div>
          <ul className="nav-conteiner">
            <li className="nav-li">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/sergio-dario-moreno-sosa-aa204022a/"
              >
                Likend
              </a>
            </li>
            <li className="nav-li">
              {" "}
              <a target="_blank" href="https://github.com/RunyShark">
                Git
              </a>
            </li>
            <li className="nav-li">
              <Link to={`/create`}>Crear receta</Link>
            </li>
            <li className="nav-li">
              <Link to={`/home`}>Inicio</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

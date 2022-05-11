/* eslint-disable react/jsx-no-target-blank */
import { Link } from "react-router-dom";
import OrderTypes from "../OrderTypes/OrderTypes";
import OrderScore from "../OrderScore.jsx/OrderScore";
import OrderAz from "../OrderAz/OrderAz";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-dad">
        <div>
          <ul className="nav-conteiner">
            <li>
              <OrderTypes />
            </li>
            <li>
              <OrderScore />
            </li>
            <li>
              <OrderAz />
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

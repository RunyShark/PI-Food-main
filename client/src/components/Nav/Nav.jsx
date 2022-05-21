import { Link } from "react-router-dom";
import home from "../../helpers/Img/home-removebg-preview.png";
import form from "../../helpers/Img/ejejedsadasd-removebg-preview (1).png";
import fav from "../../helpers/Img/fav-removebg-preview.png";

import "./nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-dad">
        <div className="nav-logo">
          <a href="https://spoonacular.com/food-api" target="_blank">
            <h2 className="nav-nombre-app" id="alert">
              CooK-BooK 🥕
            </h2>
          </a>
        </div>
        <nav>
          <Link to={`/home`}>
            <img src={home} alt="inicio" className="nav-icon" />
          </Link>
          <Link to={`/create`}>
            <img src={form} alt="from" className="nav-icon" />
          </Link>
          <Link to={`/favorite`}>
            <img src={fav} alt="from" className="nav-icon" />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;

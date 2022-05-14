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
          <h2 className="nav-nombre-app"> CooK-BooK 🥕</h2>
        </div>
        <nav>
          <Link to={`/home`}>
            <img src={home} alt="inicio" className="nav-icon" />
          </Link>
          <Link to={`/create`}>
            <img src={form} alt="from" className="nav-icon" />
          </Link>
          <Link to={`/create`}>
            <img src={fav} alt="from" className="nav-icon" />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;

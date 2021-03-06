import { Link } from "react-router-dom";
import home from "../../helpers/Img/home-removebg-preview.png";
import form from "../../helpers/Img/ejejedsadasd-removebg-preview (1).png";
import fav from "../../helpers/Img/fav-removebg-preview.png";
import { useDispatch } from "react-redux";
import { getAll } from "../.././store/accions";
import "./nav.css";

const Nav = () => {
  const dispach = useDispatch();
  return (
    <>
      <div className="nav-dad">
        <div className="nav-logo">
          <Link to={`/`}>
            <h2 className="nav-nombre-app" id="alert">
              CooK-BooK 🥕
            </h2>
          </Link>
        </div>
        <nav>
          <Link
            to={`/home`}
            onClick={() => {
              dispach(getAll());
            }}
          >
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

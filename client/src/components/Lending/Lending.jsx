import { Link } from "react-router-dom";
import "./lending.css";
import imgf from "../../helpers/Img/841be8b857448d1e2d59637111a8b4fa-logotipo-de-ropa-de-gorro-de-chef.png";

const Lending = () => {
  return (
    <>
      <div className="lendin-full">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="lending-dad">
          <div>
            <button>
              <Link to={`/home`}>Bienvenido a CooK-BooK 🥕</Link>
            </button>
          </div>
          <img src={imgf} alt="hola" />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Lending;

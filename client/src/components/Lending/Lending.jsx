import { Link } from "react-router-dom";
import "./lending.css";

import imgf from "../../helpers/Img/logodo-removebg-preview.png";

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

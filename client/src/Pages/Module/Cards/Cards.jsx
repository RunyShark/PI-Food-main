import { Link } from "react-router-dom";
import "./cards.css";
const Cards = ({ id, name, Types, img, lvl }) => {
  return (
    <>
      <div className="card-dad-map">
        <div>
          <h2 className="titel-card">{name}</h2>

          <h4>
            Puntuacion <h5 className="number-card">{lvl}</h5>
          </h4>
          <hr />
          <h5 className="number-card">Tipo de dieta</h5>

          {Types.map((e) => (
            <p key={e.name}>{e.name}</p>
          ))}
          <div className="card-conteiner-btn">
            <hr />
            <button>
              <Link to={`/recipes/data/details/${id}`}>Detalles</Link>
            </button>
          </div>
        </div>

        <div className="img-card">
          <img src={img} alt={img} width="300px" />
        </div>
      </div>
    </>
  );
};

export default Cards;

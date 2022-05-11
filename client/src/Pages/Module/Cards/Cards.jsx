import { Link } from "react-router-dom";
import "./cards.css";
const Cards = ({ id, name, Types, img, lvl }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>Puntuacion:{lvl}</p>
        <ul>
          <p>Tipo de dieta</p>
          {Types.map((e) => (
            <li key={e.name}>{e.name}</li>
          ))}
        </ul>
        <div className="card-conteiner-btn">
          <button>
            <Link to={`/recipes/data/${id}`}>Detalles</Link>
          </button>
        </div>
        <img src={img} alt={img} />
      </div>
    </>
  );
};

export default Cards;

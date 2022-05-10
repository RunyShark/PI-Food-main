import { Link } from "react-router-dom";
import "./cards.css";
const Cards = ({ id, name, Types, img }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <ul>
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

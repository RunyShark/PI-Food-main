import { Link } from "react-router-dom";

const CardsName = ({ id, name, Types, img, score, lvl }) => {
  return (
    <>
      <div>
        <h2>{name}</h2>
        <p>{score}</p>
        <p>{lvl}</p>
        <ul>
          {Types.map((e) => (
            <li key={e.name}>{e.name}</li>
          ))}
        </ul>
        <div>
          <button>
            <Link to={`/recipes/data/${id}`}>Detalles</Link>
          </button>
        </div>
        <img src={img} alt={img} />
      </div>
    </>
  );
};

export default CardsName;

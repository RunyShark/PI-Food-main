import { Link } from "react-router-dom";

const Cards = ({ id, name, Types, img }) => {
  return (
    <>
      <div>
        <div>
          <div>
            <h2>{name}</h2>
            <ul>
              {Types.map((e) => (
                <li key={e.name}>{e.name}</li>
              ))}
            </ul>
            <div>
              <Link to={`/recipes/${id}`}>Detalles</Link>
            </div>
            <img src={img} alt={img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;

import { Link } from "react-router-dom";

const Lending = () => {
  return (
    <>
      <div className="lending-dad">
        <h1>CooK-BooK 🥕</h1>
        <Link to={`/home`}>
          <button>Bienvenido al app</button>
        </Link>
      </div>
    </>
  );
};

export default Lending;

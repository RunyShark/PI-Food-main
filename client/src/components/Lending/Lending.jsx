import { Link } from "react-router-dom";

const Lending = () => {
  return (
    <>
      <div className="lending-dad">
        <div className="lendin-buttom">
          <Link to={`/home`}>
            <button>Bienvenido al app</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lending;

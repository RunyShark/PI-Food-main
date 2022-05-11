import { Link } from "react-router-dom";
// import { getAll } from "../../store/accions";
// import { useDispatch } from "react-redux";

const Lending = () => {
  //const dispacht = useDispatch();
  return (
    <>
      <div className="lending-dad">
        <div className="lendin-buttom">
          <Link to={`/home`}>
            <button
            // onClick={() => {
            //   dispacht(getAll());
            // }}
            >
              Bienvenido al app
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Lending;

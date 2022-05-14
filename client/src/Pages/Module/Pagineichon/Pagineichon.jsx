import React from "react";
import { useSelector } from "react-redux";
//import rite from "../../../helpers/Img/xdcddsdasdsad-removebg-preview.png";
//import left from "../../../helpers/Img/leftd-removebg-preview.png";
import "./pagineichon.css";

const Pagineichon = ({ pagina, setPagina }) => {
  const { allDataRecipe } = useSelector((state) => state);

  const arr = [];

  const hols = allDataRecipe.length > 0 && Math.ceil(allDataRecipe.length / 9);

  if (allDataRecipe.length > 0) {
    for (let i = 1; i < hols + 1; i++) {
      arr.push(i);
    }
  }

  return (
    <div>
      <div className="pagination-butom">
        {/* <button
          onClick={() => {
            setPagina(pagina > 2 ? pagina - 1 : (pagina = 1));
          }}
        >
          <img src={left} alt="" className="pagination-icon" />
        </button> */}

        {arr?.map((e) => (
          <p
            key={e}
            onClick={() => {
              setPagina(e);
            }}
          >
            {e}
          </p>
        ))}

        {/* <button
          onClick={() => {
            setPagina(pagina < 20 ? pagina + 1 : (pagina = 1));
          }}
        >
          <img src={rite} alt="" className="pagination-icon" />
        </button> */}
      </div>
    </div>
  );
};

export default Pagineichon;

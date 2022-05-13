import React from "react";
import rite from "../../../helpers/Img/xdcddsdasdsad-removebg-preview.png";
import left from "../../../helpers/Img/leftd-removebg-preview.png";
import "./pagineichon.css";

const Pagineichon = ({ pagina, setPagina, limitationCards, setAnterior }) => {
  //   const handleClickMas = () => {

  //     setPagina(pagina + 1);
  //   };

  return (
    <div>
      <button
        onClick={() => {
          setPagina(pagina > 2 ? pagina - 1 : (pagina = 1));
        }}
      >
        <img src={left} alt="" className="pagination-icon" />
      </button>
      <button
        onClick={() => {
          setPagina(pagina < 20 ? pagina + 1 : (pagina = 1));
        }}
      >
        <img src={rite} alt="" className="pagination-icon" />
      </button>
    </div>
  );
};

export default Pagineichon;

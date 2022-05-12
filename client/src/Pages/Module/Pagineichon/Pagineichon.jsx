import React from "react";

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
        izquierda
      </button>
      <button
        onClick={() => {
          setPagina(pagina < 20 ? pagina + 1 : (pagina = 1));
        }}
      >
        derecha
      </button>
    </div>
  );
};

export default Pagineichon;

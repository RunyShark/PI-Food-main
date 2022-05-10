import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagineichon from "../Module/Pagineichon/Pagineichon";
import Cards from "../Module/Cards/Cards";

import { getName } from "../../store/accions";
import "./home.css";

const Home = () => {
  const [pagina, setPagina] = useState(1);
  console.log(pagina);
  const [anterior, setAnterior] = useState(0);
  console.log(anterior);
  // eslint-disable-next-line no-unused-vars
  const [porPagina, setPorPagina] = useState(5);
  const [serch, setSerch] = useState("");

  const dispacht = useDispatch();

  const { allDataRecipe, allDataName } = useSelector((states) => states);
  console.log(allDataName);

  const limitationCards = allDataRecipe.length / porPagina;
  console.log(limitationCards);

  const handleChangue = (e) => {
    e.preventDefault();
    setSerch(e.target.value);
    setPagina(1);
  };
  const handleClick = () => {
    dispacht(getName(serch));
  };

  //busqueda por nombre te manda a los detalles de la receta  ---
  //testear

  return (
    <>
      <div className="titel-home">
        <h1>Busqueda</h1>
        <input
          type="text"
          placeholder="Busqueda"
          onChange={handleChangue}
          value={serch}
        />
        <button onClick={handleClick}>
          <Link to={`/recipes/data`}>Buscar</Link>
        </button>
      </div>
      <div className="dad">
        <div className="conteiner-home">
          {allDataRecipe
            // eslint-disable-next-line array-callback-return
            .filter((e) => {
              if (serch === "") {
                return e;
              } else if (e.name.toLowerCase().includes(serch.toLowerCase())) {
                return e;
              }
            })
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((e) => {
              return (
                <div className="conteiner-data">
                  <Cards
                    key={e.id}
                    name={e.name}
                    img={e.img}
                    Types={e.Types}
                    id={e.id}
                  />
                </div>
              );
            })}

          <Pagineichon
            pagina={pagina}
            setPagina={setPagina}
            limitationCards={limitationCards}
            setAnterior={setAnterior}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagineichon from "../Module/Pagineichon/Pagineichon";
import Cards from "../Module/Cards/Cards";
import { getAll, getName } from "../../store/accions";
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

  const { allDataRecipe } = useSelector((states) => states);

  const limitationCards = allDataRecipe.length / porPagina;
  console.log(limitationCards);

  useEffect(() => {
    dispacht(getAll());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangue = (e) => {
    e.preventDefault();
    setSerch(e.target.value);
  };
  const handleClick = () => {
    dispacht(getName(serch));
  };

  //Solucionar llamdas de apis a locadas
  //busqueda por nombre te manda a los detalles de la receta
  //testear
  const name = serch;
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
          <Link to={`/recipes/${name}`}>Buscar</Link>
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

/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagineichon from "../Module/Pagineichon/Pagineichon";
import Cards from "../Module/Cards/Cards";
// import OrderAz from "./OR/OrderAz/OrderAz";
// import OrderScore from "./OR/OrderScore/OrderScore";
// import OrderTypes from "./OR/OrderTypes/OrderTypes";

import {
  getName,
  getAll,
  getOrder,
  getType,
  filterType,
} from "../../store/accions";
import "./home.css";

const Home = () => {
  const [pagina, setPagina] = useState(1);
  //const [Typediets, setTypeDiets] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [porPagina, setPorPagina] = useState(9);
  const [serch, setSerch] = useState("");
  const [p, setP] = useState("");

  const dispacht = useDispatch();

  const { allDataRecipe, typess } = useSelector((states) => states);

  const limitationCards = allDataRecipe.length / porPagina;

  useEffect(() => {
    if (p === "az") {
      dispacht(getOrder("az"));
    } else if (p === "za") {
      dispacht(getOrder("za"));
    } else if (p === "mayor") {
      dispacht(getOrder("mayor"));
    } else if (p === "menor") {
      dispacht(getOrder("menor"));
    } else if (p === "pescatarian") {
      dispacht(filterType("pescatarian"));
    } else if (p === "gluten free") {
      dispacht(filterType("gluten free"));
    } else if (p === "dairy free") {
      dispacht(filterType("dairy free"));
    } else if (p === "lacto ovo vegetarian") {
      dispacht(filterType("lacto ovo vegetarian"));
    } else if (p === "vegan") {
      dispacht(filterType("vegan"));
    } else if (p === "paleolithic") {
      dispacht(filterType("paleolithic"));
    } else if (p === "primal") {
      dispacht(filterType("primal"));
    } else if (p === "fodmap friendly") {
      dispacht(filterType("fodmap friendly"));
    } else if (p === "whole 30n") {
      dispacht(filterType("whole 30"));
    } else if (p === "ketogenic") {
      dispacht(filterType("ketogenic"));
    } else {
      dispacht(getAll());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p]);

  useEffect(() => {
    dispacht(getType());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangue = (e) => {
    e.preventDefault();
    setSerch(e.target.value);
    setPagina(1);
  };
  const handleClick = () => {
    dispacht(getName(serch));
  };
  const haldechan = (e) => {
    e.preventDefault();
    setP(e.target.value);
  };

  // const handleTypeDiets = (e) => {
  //   setTypeDiets(e.target.value); // solucionar bug de formulario
  // };
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
      <div>
        <div>
          <select defaultValue="default" onChange={(e) => haldechan(e)}>
            <option value="default" disabled>
              Order Alfa
            </option>
            <option value="">Inicio</option>
            <option value="az">A-Z</option>
            <option value="za">Z-A</option>
          </select>
        </div>
        <div>
          <select defaultValue="default" onChange={(e) => haldechan(e)}>
            <option value="default" disabled>
              SCORE
            </option>
            <option value="">Inicio</option>
            <option value="mayor">Mayor</option>
            <option value="menor">Menor</option>
          </select>
        </div>
        <div>
          <select defaultValue="default" onChange={(e) => haldechan(e)}>
            <option value="default" disabled>
              Dietas
            </option>

            {typess &&
              typess.map((e) => (
                <option value={e.name} key={e.id}>
                  {e.name}
                </option>
              ))}
            <option value="lacto ovo vegetarian">lacto ovo vegetarian</option>
          </select>
        </div>
      </div>
      <div className="dad">
        <div className="conteiner-home">
          {allDataRecipe
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
                    lvl={e.lvl}
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
          />
        </div>
      </div>
    </>
  );
};

export default Home;

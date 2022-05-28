/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagineichon from "../Module/Pagineichon/Pagineichon";
import Cards from "../Module/Cards/Cards";
import search from "../../helpers/Img/logodo-removebg-preview (1).png";

import {
  getName,
  getAll,
  getOrder,
  getType,
  filterType,
  filtroEnVivo,
} from "../../store/accions";
import "./home.css";

const Home = () => {
  const [pagina, setPagina] = useState(1);
  let navigate = useNavigate();
  const [porPagina, setPorPagina] = useState(9);
  const [serch, setSerch] = useState("");
  const [p, setP] = useState("");

  const dispacht = useDispatch();

  const { allDataRecipe, typess } = useSelector((states) => states);

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
    //
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
    dispacht(filtroEnVivo(e.target.value));
  };

  const handleClick = () => {
    if (serch !== "") {
      dispacht(getName(serch));
      navigate("/recipes/data/details", { replace: true });
    }
  };
  const haldechan = (e) => {
    e.preventDefault();
    setP(e.target.value);
  };

  return (
    <>
      <div className="dad-home">
        <div className="titel-home">
          <div className="home-grip-sercha">
            <input
              type="text"
              placeholder="Busqueda"
              onChange={handleChangue}
              value={serch}
            />

            <button
              disabled={serch === "" ? true : false}
              onClick={handleClick}
            >
              <img src={search} alt="" className="search-icon" />
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="home-selectors">
              <select defaultValue="default" onChange={(e) => haldechan(e)}>
                <option value="default" disabled>
                  Order Alfa
                </option>
                <option value="">Inicio</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
              </select>

              <select defaultValue="default" onChange={(e) => haldechan(e)}>
                <option value="default" disabled>
                  SCORE
                </option>
                <option value="">Inicio</option>
                <option value="mayor">Mayor</option>
                <option value="menor">Menor</option>
              </select>

              <select defaultValue="default" onChange={(e) => haldechan(e)}>
                <option value="default" disabled>
                  Dietas
                </option>
                <option value="">Inicio</option>
                {typess &&
                  typess.map((e) => (
                    <option value={e.name} key={e.id}>
                      {e.name}
                    </option>
                  ))}
                <option value="lacto ovo vegetarian">
                  lacto ovo vegetarian
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="dad">
          <div className="conteiner-home">
            {allDataRecipe.length === 0 ? (
              <>
                <br />
                <br />
                <br />
                <div className="classic-1"></div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </>
            ) : (
              allDataRecipe
                .slice(
                  (pagina - 1) * porPagina,
                  (pagina - 1) * porPagina + porPagina
                )
                .map((e) => {
                  return (
                    <div key={e.id} className="conteiner-data">
                      <Cards
                        name={e.name}
                        img={e.img}
                        lvl={e.lvl}
                        Types={e.Types}
                        id={e.id}
                        tiempoDe={e.tiempoDe}
                      />
                    </div>
                  );
                })
            )}
            <Pagineichon
              porPagina={porPagina}
              setPorPagina={setPorPagina}
              pagina={pagina}
              serch={serch}
              setPagina={setPagina}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

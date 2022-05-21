/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Pagineichon from "../Module/Pagineichon/Pagineichon";
import Cards from "../Module/Cards/Cards";
import search from "../../helpers/Img/logodo-removebg-preview (1).png";
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
  // eslint-disable-next-line no-unused-vars
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
            <button onClick={handleClick}>
              <Link to={`/recipes/data/details`}>
                <img src={search} alt="" className="search-icon" />
              </Link>
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
                <div class="classic-1"></div>
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
                .filter((e) => {
                  if (serch === "") {
                    return e;
                  } else if (
                    e.name.toLowerCase().includes(serch.toLowerCase())
                  ) {
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
                })
            )}
            <Pagineichon pagina={pagina} setPagina={setPagina} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

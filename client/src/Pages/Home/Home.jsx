import React, { useState, useEffect } from "react";
import Cards from "./Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/accions";
import "./home.css";

const Home = () => {
  const [serch, setSerch] = useState("");
  const dispacht = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { allDataRecipe } = useSelector((states) => states);

  useEffect(() => {
    dispacht(getAll());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangue = (e) => {
    e.preventDefault();
    setSerch(e.target.value);
  };

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
        </div>
      </div>
    </>
  );
};

export default Home;

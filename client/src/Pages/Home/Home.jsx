import React, { useEffect } from "react";
import Cards from "./Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/accions";
import "./home.css";

const Home = () => {
  const dispacht = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { allDataRecipe } = useSelector((states) => states);

  useEffect(() => {
    dispacht(getAll());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="titel-home">
        <h1>Recetas</h1>
      </div>
      <div className="dad">
        <div className="conteiner-home">
          {allDataRecipe?.map((e) => {
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

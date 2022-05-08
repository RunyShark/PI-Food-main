import React, { useEffect } from "react";
import Cards from "./Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../store/accions";

const Home = () => {
  const dispacht = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { allDataRecipe } = useSelector((states) => states);

  useEffect(() => {
    dispacht(getAll());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(allDataRecipe);
  return (
    <>
      <div>
        <h1>pepito</h1>
        {allDataRecipe?.map((e) => {
          console.log(e.Types);
          return (
            <Cards
              key={e.id}
              name={e.name}
              img={e.img}
              Types={e.Types}
              id={e.id}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;

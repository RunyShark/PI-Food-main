import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFav } from "../../../store/accions";
import FavoriteDetails from "../FavoriteDetails/FavoriteDetails";
import "./favorite.css";
const Favorite = () => {
  const { addFav } = useSelector((state) => state);

  const dispacht = useDispatch();
  useEffect(() => {
    dispacht(getFav());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="title-fav">
          <h1>Favoritos</h1>
        </div>
        {addFav.length === 0 ? (
          <>
            <h1>No hay data</h1>
          </>
        ) : (
          addFav.map((e) => (
            <FavoriteDetails
              key={e.id}
              id={e.id}
              name={e.name}
              detalis={e.detalis}
              step={e.step}
              lvl={e.lvl}
              img={e.img}
            />
          ))
        )}
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Favorite;
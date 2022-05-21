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
        {typeof addFav === "string" ? (
          <div className="error-fav">
            <h1>No hay data</h1>
          </div>
        ) : (
          addFav.length > 0 &&
          typeof addFav !== "string" &&
          addFav?.map((e) => {
            const { id, name, detalis, step, lvl, img } = e;
            return (
              <FavoriteDetails
                key={id}
                id={id}
                name={name}
                detalis={detalis}
                step={step}
                lvl={lvl}
                img={img}
              />
            );
          })
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

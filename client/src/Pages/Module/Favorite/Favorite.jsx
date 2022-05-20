import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFav } from "../../../store/accions";
import FavoriteDetails from "../FavoriteDetails/FavoriteDetails";
import imgCheft from "../../../helpers/Img/man-cook-microsoft.png";
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
            <img src={imgCheft} alt="imgCheft" />
          </div>
        ) : (
          addFav.length > 0 &&
          typeof addFav !== "string" &&
          addFav?.map((e) => (
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

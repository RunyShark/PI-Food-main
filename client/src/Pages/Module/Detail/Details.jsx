import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getID, addFav } from "../../../store/accions";

import "./detail.css";

const Detail = () => {
  const dispacht = useDispatch();
  const { idDataRecipe } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispacht(getID(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="dad-details">
        <div className="parrafo">
          <h1 dangerouslySetInnerHTML={{ __html: idDataRecipe.name }}></h1>
          <div className="griod-parr">
            <h3>Nivel: </h3>
            <p dangerouslySetInnerHTML={{ __html: idDataRecipe.lvl }}></p>
          </div>
          <img src={idDataRecipe.img} alt={idDataRecipe.id} />
          <p dangerouslySetInnerHTML={{ __html: idDataRecipe.detalis }}></p>
          <hr />
          <p dangerouslySetInnerHTML={{ __html: idDataRecipe.step }}></p>
          <div className="dad-details-dieta">
            <h3>Tipo de dieta</h3>
            {idDataRecipe.Types?.map((e, i) => (
              <p key={i}>{e.name}</p>
            ))}

            <button
              onClick={() => {
                dispacht(
                  addFav({
                    name: idDataRecipe.name,
                    detalis: idDataRecipe.detalis,
                    lvl: idDataRecipe.lvl,
                    img: idDataRecipe.img,
                    step: idDataRecipe.step,
                    Types: idDataRecipe.Types,
                  })
                );
                window.location.reload(alert("Se agrego correctamente ✔ 👌"));
              }}
            >
              ADD FAV
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

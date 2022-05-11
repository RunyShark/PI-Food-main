import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getID } from "../../../store/accions";
import { Link } from "react-router-dom";

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
      <div className="details-dad">
        <div className="details-titel">
          <h2>Detalles</h2>
        </div>
        <div className="details-name">
          <h1 dangerouslySetInnerHTML={{ __html: idDataRecipe.name }}></h1>
        </div>
        <div className="details-img">
          <img src={idDataRecipe.img} alt={idDataRecipe.id} />
        </div>
        <div className="details-lvl">
          <h3>Nivel</h3>
          <h5 dangerouslySetInnerHTML={{ __html: idDataRecipe.lvl }}></h5>
        </div>
        <h3>Pasos</h3>
        <div className="details-steps">
          <p dangerouslySetInnerHTML={{ __html: idDataRecipe.step }}></p>
        </div>
        <h3>Datos</h3>
        <div className="details-data">
          <h3 dangerouslySetInnerHTML={{ __html: idDataRecipe.detalis }}></h3>
        </div>
        <h3>Tipo de dieta</h3>
        <div className="details-data">
          <div>
            {idDataRecipe.Types?.map((e, i) => (
              <p key={i}>{e.name}</p>
            ))}
          </div>
        </div>
      </div>

      <Link to={`/home`}>Regresar</Link>
    </>
  );
};

export default Detail;

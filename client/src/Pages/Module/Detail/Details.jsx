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
          <h1>Soy un details</h1>
        </div>
        <div className="details-name">
          <p dangerouslySetInnerHTML={{ __html: idDataRecipe.name }}></p>
        </div>
        <div className="details-img">
          <img src={idDataRecipe.img} alt={idDataRecipe.id} />
        </div>
        <div className="details-score">
          <h4 dangerouslySetInnerHTML={{ __html: idDataRecipe.score }}></h4>
        </div>
        <div className="details-lvl">
          <h5 dangerouslySetInnerHTML={{ __html: idDataRecipe.lvl }}></h5>
        </div>
        <div className="details-steps">
          <p dangerouslySetInnerHTML={{ __html: idDataRecipe.step }}></p>
        </div>
        <div className="details-data">
          <h3 dangerouslySetInnerHTML={{ __html: idDataRecipe.detalis }}></h3>
        </div>
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
// name: esta.title,
// detalis: esta.summary,
// score: esta.spoonacularScore,
// lvl: esta.healthScore,
// step: esta.analyzedInstructions[0]?.steps.map(
//   (e) => `[${e.number}] ${e.step}`
// ),
// img: esta.image,
// Types: esta.diets.map((d) => {
//   return { name: d };
// }),

import { Link } from "react-router-dom";
import { deleteFav } from "../../../store/accions";
import { useDispatch } from "react-redux";
import "./favoriteDetails.css";
import borrar from "../../../helpers/Img/delete3-removebg-preview.png";
const FavoriteDetails = ({ name, detalis, lvl, img, id }) => {
  const dispacht = useDispatch();
  return (
    <>
      <div className="fav-details">
        <div className="fav-parrafo">
          <div className="fav-butomborrar">
            <button
              onClick={() => {
                dispacht(deleteFav(id));
                window.location.reload(alert("Borrado correctamente ✔ 👌"));
              }}
            >
              <img src={borrar} alt={borrar} />
            </button>
          </div>
          <h1>{name}</h1>
          <h3>Nivel {lvl}</h3>
          <img src={img} alt={img} />
          <p dangerouslySetInnerHTML={{ __html: detalis }}></p>
          <div>
            <button className="fav-butomupdate">
              <Link to={`/favorite/update/${id}`}>Actualizar informacion</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteDetails;

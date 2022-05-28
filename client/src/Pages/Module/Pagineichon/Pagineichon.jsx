import { useSelector } from "react-redux";
import "./pagineichon.css";

const Pagineichon = ({ setPagina, pagina }) => {
  const { allDataRecipe } = useSelector((state) => state);

  const arr = [];

  let allData = allDataRecipe.length / 9;

  const hols = allDataRecipe.length > 0 && Math.ceil(allData);

  if (allDataRecipe.length > 0) {
    for (let i = 1; i < hols + 1; i++) {
      arr.push(i);
    }
  }
  return (
    <div>
      <div className="pagination-butom">
        {arr?.map((e) => (
          <p
            key={e}
            onClick={() => {
              setPagina(e);
            }}
          >
            {e}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Pagineichon;

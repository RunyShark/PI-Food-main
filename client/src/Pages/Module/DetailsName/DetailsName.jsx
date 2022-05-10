import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CardsName from "../CardsName/CardsName";

const DetaisName = () => {
  //const dispacht = useDispatch();
  const { allDataName } = useSelector((state) => state);

  //   useEffect(() => {
  //     dispacht(getName());

  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  return (
    <>
      <h1> gola</h1>
      {allDataName.map((e) => {
        return (
          <div>
            <CardsName
              key={e.id}
              name={e.name}
              score={e.score}
              lvl={e.lvl}
              img={e.img}
              Types={e.Types}
              id={e.id}
            />
          </div>
        );
      })}

      <Link to={`/home`}>Regresar</Link>
    </>
  );
};

export default DetaisName;

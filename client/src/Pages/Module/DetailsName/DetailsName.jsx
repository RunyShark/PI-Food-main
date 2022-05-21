import { useSelector } from "react-redux";
import CardsName from "../CardsName/CardsName";
import "./detailsName.css";
const DetaisName = () => {
  const { allDataName } = useSelector((state) => state);

  return (
    <>
      {allDataName.length === 0 ? (
        <>
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
          <div class="classic-2"></div>
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
        </>
      ) : (
        allDataName.map((e) => {
          return (
            <div>
              <CardsName
                key={e.id}
                name={e.name}
                lvl={e.lvl}
                img={e.img}
                Types={e.Types}
                detalis={e.detalis}
                step={e.step}
                id={e.id}
              />
            </div>
          );
        })
      )}
    </>
  );
};

export default DetaisName;

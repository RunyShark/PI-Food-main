import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const DetaisName = ({ name, detalis, score, lvl, imgmTypes }) => {
  const dispacht = useDispatch();
  const { allDataName } = useSelector((state) => state);
  return (
    <>
      <div>
        <Link to={`/home`}>Regresar</Link>
      </div>
    </>
  );
};

export default DetaisName;

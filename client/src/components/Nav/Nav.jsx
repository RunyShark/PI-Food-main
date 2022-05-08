import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <div className="nav-dad">
        <div>
          <ul>
            <li>
              <Link to={`/create`}>Crear receta</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="">Equipos</Link>
          </li>
          <li>
            <Link to="">Empresa</Link>
          </li>
          <li>
            <Link to="">Distribuidores</Link>
          </li>
          <li>
            <Link to="">Servicio Técnico</Link>
          </li>
          <li>
            <Link to="">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

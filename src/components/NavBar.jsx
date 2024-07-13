import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link to="/">
        <div className="bg-black">
          <img
            className="w-80"
            src="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
            alt="Logo Dinan S.A."
            srcSet="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
          />
        </div>
      </Link>
      <nav className="flex items-center font-semibold">
        <button
          type="button"
          // onPointerDown={toggleMenu}
          className="p-4 lg:hidden"
        >
          <img
            className="w-16 min-w-16"
            src="https://www.svgrepo.com/show/532195/menu.svg"
            alt="Menu icon"
            srcSet="https://www.svgrepo.com/show/532195/menu.svg"
          />
        </button>
        <ul className="absolute bottom-0 right-0 top-0 z-50 flex w-11/12 flex-col gap-6 bg-red-600 p-4 pl-8 shadow-[-4px_0_6px_0_rgba(0,0,0,0.3)] md:text-lg lg:hidden">
          <li className="self-end">
            <button type="button" className="">
              <img
                className="w-16 min-w-16"
                src="https://www.svgrepo.com/show/503004/close.svg"
                alt="Menu icon"
                srcSet="https://www.svgrepo.com/show/503004/close.svg"
              />
            </button>
          </li>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Equipamientos">Equipamientos</Link>
          </li>
          <li>
            <Link to="/Sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/Distribuidores">Distribuidores</Link>
          </li>
          <li>
            <Link to="/Servicio-tecnico">Servicio Técnico</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
        <ul className="hidden items-center gap-6 p-4 px-6 text-center lg:flex xl:gap-10 xl:text-lg 2xl:px-10">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/Equipamientos">Equipamientos</Link>
          </li>
          <li>
            <Link to="/Sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/Distribuidores">Distribuidores</Link>
          </li>
          <li>
            <Link to="/Servicio-tecnico">Servicio Técnico</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

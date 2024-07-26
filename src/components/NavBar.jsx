import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between gap-4 bg-indigo-800 text-white xl:py-1">
      <Link to="/" className="xl:w-2/12 xl:max-w-72">
        <div className="">
          <img
            className="w-56 2xl:w-72"
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
          className="p-4 xl:hidden"
        >
          <img
            className="w-14"
            src="https://www.svgrepo.com/show/532195/menu.svg"
            alt="Menu icon"
            srcSet="https://www.svgrepo.com/show/532195/menu.svg"
          />
        </button>
        <ul className="absolute bottom-0 right-0 top-0 z-50 flex hidden w-10/12 flex-col gap-6 bg-red-600 p-4 pl-8 shadow-[-4px_0_6px_0_rgba(0,0,0,0.3)] md:w-8/12 md:pl-12 md:text-lg lg:w-1/2 xl:hidden">
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
        <ul className="hidden items-center gap-6 p-4 px-6 text-center xl:flex 2xl:gap-10 2xl:px-10 2xl:text-lg">
          <li className="min-w-fit border-red-600 hover:border-b-2">
            <Link to="/">Inicio</Link>
          </li>
          <li className="min-w-fit border-red-600 hover:border-b-2">
            <Link to="/Equipamientos">Equipamientos</Link>
          </li>
          <li className="min-w-fit border-red-600 hover:border-b-2">
            <Link to="/Sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li className="min-w-fit border-red-600 hover:border-b-2">
            <Link to="/Distribuidores">Distribuidores</Link>
          </li>
          <li className="min-w-fit border-red-600 hover:border-b-2">
            <Link to="/Servicio-tecnico">Servicio Técnico</Link>
          </li>
          <li className="min-w-fit border-red-600 hover:border-b-2">
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

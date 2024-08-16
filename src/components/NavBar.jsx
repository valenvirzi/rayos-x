import { Link } from "react-router-dom";
import { useState } from "react";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-4 bg-indigo-800 text-white shadow-[0px_5px_6px_0_rgba(0,0,0,0.3)] xl:py-1">
      <Link to="/" className="xl:w-2/12 xl:max-w-72">
        <div className="p-3 xl:p-0">
          <img
            className="hidden w-56 xl:inline-block 2xl:w-72"
            src="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
            alt="Logo Dinan S.A."
            srcSet="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
          />
          <img
            src="./media/logo-name.png"
            alt="Nombre logo"
            className="w-32 xl:hidden"
            srcSet="./media/logo-name.png"
          />
        </div>
      </Link>
      <nav className="flex items-center font-semibold">
        <button
          type="button"
          onPointerDown={toggleMenu}
          className="z-50 p-4 xl:hidden"
        >
          <img
            className={`w-14 ${menuOpen ? "rotate-90" : ""} transition-transform`}
            src="./media/logo-icon.png"
            alt="Menu icon"
            srcSet="./media/logo-icon.png"
          />
        </button>
        <ul
          className={`absolute ${menuOpen ? "flex translate-x-1" : ""} bottom-0 right-0 top-0 z-40 h-screen w-10/12 translate-x-full flex-col gap-6 bg-indigo-800 p-4 pl-8 pt-24 shadow-[-4px_0_6px_0_rgba(0,0,0,0.3)] transition-transform md:w-8/12 md:pl-12 md:text-lg lg:w-1/2 xl:hidden`}
        >
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
          <li className="min-w-fit border-white hover:border-b-2">
            <Link to="/">Inicio</Link>
          </li>
          <li className="min-w-fit border-white hover:border-b-2">
            <Link to="/Equipamientos">Equipamientos</Link>
          </li>
          <li className="min-w-fit border-white hover:border-b-2">
            <Link to="/Sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li className="min-w-fit border-white hover:border-b-2">
            <Link to="/Distribuidores">Distribuidores</Link>
          </li>
          <li className="min-w-fit border-white hover:border-b-2">
            <Link to="/Servicio-tecnico">Servicio Técnico</Link>
          </li>
          <li className="min-w-fit border-white hover:border-b-2">
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

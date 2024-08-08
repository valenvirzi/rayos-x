import { Link } from "react-router-dom";

export const Footer = () => {
  {
    /* TODO: Hacer Footer */
  }
  return (
    <footer className="flex flex-col bg-indigo-800 px-8 py-6 text-white">
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-2">
          <img
            className="w-16"
            src="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-iso-Blanco.svg"
            alt="icono empresa"
          />
          <p className="text-pretty text-sm">
            Diseño, Desarrollo y Fabricación de equipos de rayos X con
            tecnología propia bajo los{" "}
            <span className="font-semibold">
              más altos estándares de calidad
            </span>
            .
          </p>
        </div>
        <div className="">
          <ul className="flex flex-col items-center gap-2">
            <li>
              <Link>Política de Privacidad</Link>
            </li>
            <li>
              <Link>Servicio Técnico</Link>
            </li>
            <li>
              <Link>Cómo Llegar</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <ul className="flex flex-col items-center gap-2">
            <li>
              <a href="" className="flex flex-col items-center">
                <img src="" alt="" />
                <p>Bolonia 5329</p>
                <p>CABA, Argentina</p>
              </a>
            </li>
            <li>
              <a href="tel:+5491145677543">
                <img src="" alt="" />
                <p>+5491145677543</p>
              </a>
            </li>
            <li>
              <a href="mailto:rxdinan@rayosxdinan.com.ar">
                <img src="" alt="" />
                <p>rxdinan@rayosxdinan.com.ar</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className=""></div>
    </footer>
  );
};

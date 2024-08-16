// import { Link } from "react-router-dom";

export const Footer = () => {
  {
    /* TODO: Hacer Footer */
  }
  return (
    <footer className="flex flex-col gap-4 bg-indigo-800 px-8 py-6 text-white 2xl:px-12">
      <div className="flex flex-col items-center gap-4 xl:flex-row xl:justify-between">
        <div className="flex items-center gap-2 xl:self-start">
          <img
            className="w-56"
            src="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
            alt="icono empresa"
          />
        </div>
        <div className="flex flex-col items-center gap-3 text-sm xl:items-end">
          <div className="flex items-center gap-2">
            <h4 className="text-base">Links destacados</h4>
            <img
              src="./media/arrow-down.svg"
              alt=""
              className="w-6 animate-bounce"
            />
          </div>
          <ul className="flex flex-col items-center gap-2 xl:items-end xl:gap-3">
            <li>
              <a
                href=""
                className="flex items-center gap-2 xl:flex-row-reverse"
              >
                <img
                  src="./media/location-pin.svg"
                  alt="Ubicación"
                  className="w-6"
                />
                <div className="flex flex-col items-center">
                  <p>Bolonia 5329</p>
                  <p>CABA, Argentina</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href="tel:+5491145677543"
                className="flex items-center gap-2 xl:flex-row-reverse"
              >
                <img
                  src="./media/whatsapp-logo.svg"
                  alt="WhatsApp"
                  className="w-6"
                />
                <p>+54 9 11-4567-7543</p>
              </a>
            </li>
            <li>
              <a
                href="mailto:rxdinan@rayosxdinan.com.ar"
                className="flex items-center gap-2 xl:flex-row-reverse"
              >
                <img src="./media/mail-icon.svg" alt="Email" className="w-6" />
                <p>rxdinan@rayosxdinan.com.ar</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="">
        <p className="text-center text-sm xl:text-start">
          Todos los derechos reservados © 2024 Rayos X Dinan S.A.
        </p>
      </div>
    </footer>
  );
};

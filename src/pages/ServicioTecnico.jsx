import Form from "../components/Form";

const ServicioTecnico = () => {
  return (
    <div className="min-h-screen xl:flex xl:min-h-0 xl:bg-indigo-50 xl:p-16">
      <div className="flex flex-col overflow-hidden rounded xl:m-auto xl:flex-row xl:shadow-[3px_5px_6px_0_rgba(0,0,0,0.3)]">
        <div className="flex flex-col gap-6 bg-indigo-200 p-4 text-indigo-900 md:px-8 md:py-6 lg:px-16 lg:py-8 xl:flex-1 xl:flex-col-reverse xl:justify-between xl:p-8">
          <div className="flex flex-col gap-3">
            <div className="border-l-4 border-solid border-indigo-900 pl-2">
              <h4 className="text-lg font-semibold md:text-xl">Contactanos</h4>
            </div>
            <ul className="ml-4 flex flex-col gap-2 text-base font-semibold xl:items-start xl:gap-3">
              <li>
                <a href="" className="flex items-center gap-2">
                  <img
                    src="./media/location-pin-dark.svg"
                    alt="Ubicación"
                    className="w-6"
                  />
                  <div className="flex flex-col">
                    <p>Bolonia 5329</p>
                    <p>CABA, Argentina</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491145677543"
                  className="flex items-center gap-2"
                >
                  <img
                    src="./media/whatsapp-logo-dark.svg"
                    alt="WhatsApp"
                    className="w-6"
                  />
                  <p>+54 9 11-4567-7543</p>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rxdinan@rayosxdinan.com.ar"
                  className="flex items-center gap-2"
                >
                  <img
                    src="./media/mail-icon-dark.svg"
                    alt="Email"
                    className="w-6"
                  />
                  <p>rxdinan@rayosxdinan.com.ar</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <div className="border-l-4 border-solid border-indigo-900 pl-2">
              <h4 className="text-lg font-semibold md:text-xl">
                Servicio Técnico
              </h4>
            </div>
            <p className="ml-4 text-base font-semibold">
              Envíanos tu consulta, responderemos a la brevedad. ¡Gracias!
            </p>
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default ServicioTecnico;

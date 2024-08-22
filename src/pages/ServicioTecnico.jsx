const ServicioTecnico = () => {
  // TODO: Hacer pagina Servicio Técnico
  return (
    <div className="min-h-screen">
      <div className="flex flex-col bg-indigo-200">
        <div className="flex flex-col gap-3 p-4 text-indigo-900">
          <div className="border-l-4 border-solid border-indigo-900 pl-2">
            <h4 className="text-lg font-semibold">Contactanos</h4>
          </div>
          <ul className="mx-auto flex flex-col gap-2 text-sm font-semibold xl:items-start xl:gap-3">
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
              <a href="tel:+5491145677543" className="flex items-center gap-2">
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
        <form
          name="contactForm"
          id="contactForm"
          className="flex flex-col items-center gap-4 bg-white p-4"
          action=""
          method="get"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Servicio Técnico</h3>
            <p className="text-sm">
              Envíanos tu consulta, responderemos a la brevedad. ¡Gracias!
            </p>
          </div>
          <div className="flex w-full flex-col gap-1">
            <label
              className="text-sm font-semibold text-indigo-900"
              htmlFor="contactForm"
            >
              Cliente/Institución:
            </label>
            <input
              className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
              placeholder="Cliente/Institución"
              type="text"
            />
            <span className="text-xs text-red-600">
              * Please enter a valid email address.
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServicioTecnico;

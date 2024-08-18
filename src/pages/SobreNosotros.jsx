import SectionAbout from "../components/SectionAbout";

const SobreNosotros = () => {
  const AboutList = [
    {
      id: 1,
      title: "Nuestra Empresa",
      imgRoute: "./media/fabrica-dinan.jpg",
      para1:
        "Somos Rayos x Dinan, una empresa Argentina, situada en la ciudad de Buenos Aires que inició sus actividades en el año 1971 dedicándose al diseño, desarrollo y fabricación de equipos de rayos x con tecnología propia.",
      para2:
        "Desde nuestros inicios hemos instalado equipamientos en nuestro país, Bolivia, Brasil, Chile, China, Colombia, Cuba, Perú, Ecuador, Italia, México, Panamá, Rusia, Uruguay y Estados Unidos.",
    },
    {
      id: 2,
      title: "Inversión",
      imgRoute: "./media/fabrica-dinan-trabajando.jpg",
      para1:
        "Invertimos día a día en investigación y desarrollo manteniendo nuestros productos en el más alto nivel tecnológico.",
      para2:
        "Dichos equipos se fabrican con la meta de buscar las mejores opciones en productos médicos para diferentes países con el fin de responder a las crecientes necesidades que se presentan en el mercado.",
    },
    {
      id: 3,
      title: "Servicio",
      imgRoute: "./media/fabrica-dinan-adentro.jpg",
      para1:
        "Poseemos una amplia y eficiente red de atención y servicio técnico especializado en el país, Latinoamérica y Estados Unidos brindando un rápido soporte y asistencia total.",
      para2:
        "Este servicio se efectúa para todo el conjunto de unidades de radiología y de alta complejidad, con velocidad de respuesta y con lo que es más importante aún: una excelente y esmerada calidad de atención.",
    },
    {
      id: 4,
      title: "Tecnología",
      imgRoute: "./media/fabrica-dinan-camion.jpg",
      para1:
        "Fabricamos nuestros equipos con material de primera calidad y tecnología propia cumpliendo los más altos estándares de calidad exigidos.",
      para2:
        "Esto nos permite brindar a nuestros Clientes la mejor relación precio-valor existente en el mercado.",
    },
  ];
  return (
    <div className="flex flex-col text-pretty">
      {AboutList.map((section) => (
        <SectionAbout
          key={section.id}
          sectionImgRoute={section.imgRoute}
          sectionTitle={section.title}
          sectionPara1={section.para1}
          sectionPara2={section.para2}
        />
      ))}
      <section className="flex flex-col lg:flex-row">
        <div className="flex flex-col gap-4 px-8 py-6 md:gap-6 md:px-16 md:py-8 lg:flex-1 lg:px-8 xl:px-10 2xl:px-16 2xl:py-10">
          <h2 className="mb-2 text-xl font-semibold 2xl:text-2xl">
            Política de Calidad
          </h2>
          <ul className="ml-2 flex list-disc flex-col gap-2 text-sm md:gap-4 md:text-base lg:ml-6 2xl:text-lg">
            <li>
              Desarrollar, producir, comercializar, instalar y brindar servicio
              técnico para que nuestros productos sean seguros y eficaces.
            </li>
            <li>
              Cumplir con los requisitos y mantener la eficacia del Sistema de
              Gestión de la Calidad de acuerdo con la norma ISO 13485 y los
              marcos regulatorios aplicables.
            </li>
            <li>
              Responder a las necesidades y requisitos del cliente, para poder
              asegurar su satisfacción, cumpliendo con las especificaciones.
            </li>
            <li>
              Mantener la mejora contínua como base de todos los procesos de la
              empresa.
            </li>
            <li>
              Establecer metas de la calidad, criterios y formas de alcanzarlas.
            </li>
            <li>
              Proveer entrenamiento contínuo y educación del personal respecto
              de los requisitos del sistema de la calidad para todos los
              procesos que involucran a la empresa.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 px-8 py-6 md:gap-6 md:px-16 md:py-8 lg:flex-1 lg:px-8 xl:px-10 2xl:px-16 2xl:py-10">
          <h2 className="mb-2 text-xl font-semibold 2xl:text-2xl">
            Certificaciones
          </h2>
          <div className="flex h-full flex-col justify-between gap-6">
            <ul className="mb-2 flex flex-col items-center gap-6">
              <li className="flex">
                <a
                  href=""
                  className="min-w-60 rounded-sm border border-indigo-800 bg-indigo-800 p-2 py-3 text-center text-white hover:bg-white hover:text-indigo-800 md:w-80 md:p-4 xl:w-80"
                >
                  <span className="font-semibold">ISO 13485 IQNET</span>
                </a>
              </li>
              <li className="flex">
                <a
                  href=""
                  className="min-w-60 rounded-sm border border-indigo-800 bg-indigo-800 p-2 py-3 text-center text-white hover:bg-white hover:text-indigo-800 md:w-80 md:p-4 xl:w-80"
                >
                  <span className="font-semibold">ISO 13485 Rina</span>
                </a>
              </li>
              <li className="flex">
                <a
                  href=""
                  className="min-w-60 rounded-sm border border-indigo-800 bg-indigo-800 px-2 py-3 text-center text-white hover:bg-white hover:text-indigo-800 md:w-80 md:p-4 xl:w-80"
                >
                  <span className="font-semibold">HABILITACIÓN ANMAT</span>
                </a>
              </li>
              <li className="flex">
                <a
                  href=""
                  className="min-w-60 rounded-sm border border-indigo-800 bg-indigo-800 p-2 py-3 text-center text-white hover:bg-white hover:text-indigo-800 md:w-80 md:p-4 xl:w-80"
                >
                  <span className="font-semibold">BUENAS PRÁCTICAS</span>
                </a>
              </li>
            </ul>
            <img
              src="./media/certificacion.jpg"
              alt="Certificación"
              className="w-full max-w-xs self-center"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobreNosotros;

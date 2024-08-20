import CategoryCard from "../components/CategoryCard";

const Home = () => {
  // TODO: Hacer que las cateogrias saquen la info correspondiente para cada tarjeta (CategoryCard Properties) para que no sean todas iguales como lo son ahora.
  // TODO: Poner las certificaciones adecuadas que tiene la pagina original.
  const CategoryList = [
    {
      title: "Radiología",
      imgURL: "./media/radiologia.png",
      route: "Radiologia",
      description:
        "Equipos portátiles y móviles, Comandos digitales, generadores de rayos X de alta frecuencia.",
    },
    {
      title: "Cirugía",
      imgURL: "",
      route: "Cirugia",
      description:
        "Mesas porta-paciente con arco en C, equipo móvil de radioscopía televisada con soporte en C.",
    },
    {
      title: "Mamografía",
      imgURL: "",
      route: "Mamografia",
      description: "Equipos mamográficos.",
    },
    {
      title: "Digitalización de Imágenes",
      imgURL: "",
      route: "Digitalizacion-de-imagenes",
      description: "",
    },
    {
      title: "Telecomandado",
      imgURL: "",
      route: "Telecomandado",
      description: "Mesa telecomandada.",
    },
    {
      title: "Angiografía Digital",
      imgURL: "",
      route: "Angiografia-digital",
      description: "Equipos de Angiografía digital.",
    },
    {
      title: "Veterinaria",
      imgURL: "",
      route: "Veterinaria",
      description:
        "Equipos portátiles y Generadores de rayos X de alta frecuencia.",
    },
  ];
  return (
    <div>
      <section className="relative bg-[url('https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/medical-tests/hero/x-ray-skeleton-2x.jpg?h=1112&iar=0&w=2880&rev=19ea35630f8b41c8b521fe2ebb675978&hash=AE57FC897A6C201A9DC3E637BE6A3C1D')] bg-cover bg-no-repeat px-8 py-6 font-semibold text-white before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-black before:opacity-65 before:content-[''] md:px-16 md:py-8 xl:py-10 2xl:py-14">
        <div className="relative z-10 flex flex-col gap-4 md:gap-6">
          <img
            className="relative -left-6 max-w-md md:-left-8"
            src="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
            alt="Logo Dinan S.A."
            srcSet="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
          />
          <p className="max-w-xl text-pretty md:text-xl md:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed">
            Fabricando y desarrollando equipos de rayos X con tecnología propia
            bajo los más altos estándares de calidad, desde hace 50 años.
          </p>
          <button
            type="button"
            className="mt-1 max-w-96 rounded-md border-none bg-indigo-800 p-3 hover:bg-indigo-600 md:p-4 md:text-xl 2xl:mt-4"
          >
            <span>Ver catálogo</span>
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-6 px-8 py-6 md:px-16 xl:py-8 2xl:py-10">
        <h2 className="text-xl font-semibold md:text-2xl">Equipamientos</h2>
        {/* TODO: Pensar una mejor manera de presentar las categorias, quizas un flip en la tarjeta */}
        <ul className="flex flex-col items-center gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {CategoryList.map((category, index) => (
            <li
              key={index}
              className="w-full rounded-md shadow-[3px_5px_6px_0_rgba(0,0,0,0.3)] md:max-w-screen-md"
            >
              <CategoryCard
                categoryRoute={category.route}
                imgURL={category.imgURL}
                categoryTitle={category.title}
                categoryDescription={category.description}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center justify-around gap-1 text-pretty py-2 md:gap-4 lg:flex-col lg:gap-1 lg:px-16 lg:py-0">
        {/* <div className="flex items-center justify-between">
          <div className="flex flex-col justify-evenly gap-2 px-8 py-4 md:px-16 lg:p-6 2xl:py-10">
            <img
              className="w-10 max-w-16"
              src="https://www.svgrepo.com/show/533449/square-dollar-chart.svg"
              alt="Card icon"
            />
            <h3 className="text-lg font-semibold">
              Inversión constante en Investigación y Desarrollo
            </h3>
            <p>
              Manteniendo nuestros productos en el más alto nivel tecnológico.
            </p>
          </div>
          <div className="flex flex-col justify-evenly gap-2 px-8 py-4 md:px-16 lg:p-6 2xl:py-10">
            <img
              className="w-10 max-w-16"
              src="https://www.svgrepo.com/show/352785/handshake.svg"
              alt="Card icon"
            />
            <h3 className="text-lg font-semibold">
              Amplia y eficiente red de Atención y Servicio Técnico
            </h3>
            <p>Velocidad de respuesta y excelente calidad de atención.</p>
          </div>
        </div> */}
        <div className="flex w-full flex-col items-center justify-center gap-4 px-8 py-4 md:px-16 lg:flex-row lg:justify-between lg:p-6 2xl:py-10">
          <div className="flex flex-col justify-evenly gap-2 xl:gap-6 2xl:gap-10">
            <img
              className="w-10 max-w-16"
              src="https://www.svgrepo.com/show/422142/medal-tick-check-mark.svg"
              alt="Card icon"
            />
            <h3 className="text-lg font-semibold xl:text-xl 2xl:text-2xl">
              Cumplimiento de los más altos estándares de calidad
            </h3>
            <p className="md:text-lg xl:text-xl">
              Certificado bajo la norma
              <span className="font-semibold"> EN ISO 13485:2012</span>
            </p>
          </div>
          <img
            src="./media/certificacion.jpg"
            className="w-full md:max-w-screen-md lg:w-1/2"
            alt="Certificación"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;

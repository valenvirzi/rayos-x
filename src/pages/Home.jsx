import CategoryCard from "../components/CategoryCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <section className="relative bg-[url('https://www.ucsfhealth.org/-/media/project/ucsf/ucsf-health/medical-tests/hero/x-ray-skeleton-2x.jpg?h=1112&iar=0&w=2880&rev=19ea35630f8b41c8b521fe2ebb675978&hash=AE57FC897A6C201A9DC3E637BE6A3C1D')] bg-cover bg-no-repeat px-8 py-6 font-semibold text-white before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-black before:opacity-65 before:content-[''] md:px-16 md:py-8 xl:py-10 2xl:py-14">
        <div className="relative z-10 flex flex-col gap-4 md:gap-6">
          {/* <h2 className="text-xl md:text-2xl">RAYOS X DINAN</h2> */}
          <img
            className="relative -left-6 max-w-md md:-left-8"
            src="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
            alt="Logo Dinan S.A."
            srcSet="https://rayosxdinan.com.ar/wp-content/uploads/2021/04/Rayos-Dinan-Logoblanco.svg"
          />
          <p className="max-w-xl text-pretty md:text-xl md:leading-relaxed 2xl:text-2xl 2xl:leading-relaxed">
            Fabricando y desarrollando equipos de rayos x con tecnología propia
            bajo los más altos estándares de calidad, desde hace 50 años.
          </p>
          <button
            type="button"
            className="mt-1 max-w-96 rounded-md border-none bg-red-600 p-3 md:p-4 md:text-xl 2xl:mt-4"
          >
            <span>Ver catálogo</span>
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-around gap-1 text-pretty py-2 md:gap-4 lg:flex-row lg:gap-1 lg:px-16 lg:py-0">
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
        <div className="flex flex-col justify-evenly gap-2 bg-neutral-200 px-8 py-4 md:px-16 lg:p-6 2xl:py-10">
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
        <div className="flex flex-col justify-evenly gap-2 px-8 py-4 md:px-16 lg:p-6 2xl:py-10">
          <img
            className="w-10 max-w-16"
            src="https://www.svgrepo.com/show/422142/medal-tick-check-mark.svg"
            alt="Card icon"
          />
          <h3 className="text-lg font-semibold">
            Cumplimiento de los más altos estándares de calidad
          </h3>
          <p>Brindando la mejor relación precio/valor del mercado.</p>
        </div>
      </section>
      <section className="flex flex-col">
        <ul className="flex flex-col items-center gap-4 px-8">
          <li className="w-full">
            <CategoryCard
              categoryRoute={"Radiologia"}
              imgURL={
                "https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
              }
              categoryTitle={"Radiología"}
            />
          </li>
          <li className="w-full">
            {/* TODO: Determinar posicion de la imagen de fondo con propiedades */}
            <Link to={`/Equipamientos/Radiologia`} className="w-full">
              <article
                className={`bg- rounded-md border border-solid border-black bg-[url('./media/radiologia.png')] bg-contain bg-right bg-no-repeat p-4`}
              >
                <h4 className="font-medium">Radiología</h4>
              </article>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;

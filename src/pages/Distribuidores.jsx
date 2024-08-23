import DistributorCard from "../components/DistributorCard";

const Distribuidores = () => {
  // TODO: Hacer pagina Distribuidores
  const DistribuidoresList = [
    {
      id: 1,
      name: "María Elena Zárate Vidal",
      phone: 5493794426670,
      email: "mariaelena.electromedicina@gmail.com",
      company: "Electromedicina Nordeste",
      address: "Av. Chacabuco 761",
      location: "Ciudad de Corrientes",
      zone: "CORRIENTES | CHACO | FORMOSA | MISIONES",
      website: "",
    },
    {
      id: 2,
      name: "Oscar Lombardo",
      phone: 5492614239060,
      email: "bionicamza@hotmail.com",
      company: "Biónica Electromedicina",
      address: "J. F. Moreno 890",
      location: "Mendoza",
      zone: "MENDOZA",
      website: "",
    },
    {
      id: 3,
      name: "CIPAR Ingeniería SRL",
      phone: 5493434233220,
      email: "ventas@ciparingeniria.com.ar",
      company: "",
      address: "San Martín 1217",
      location: "Ciudad de Paraná",
      zone: "ENTRE RÍOS",
      website: "",
    },
    {
      id: 4,
      name: "Jorge Periotti",
      phone: 5493425133644,
      email: "infoitecingenieria@gmail.com",
      company: "ITEC Ingeniería y Desarrollo",
      address: "",
      location: "",
      zone: "ENTRE RÍOS | SANTA FÉ",
      website: "",
    },
    {
      id: 5,
      name: "Raúl Hernández",
      phone: 5492954425857,
      email: "hernandez.raul@live.com",
      company: "RH Implantes",
      address: "Calle Juan XXIII 864",
      location: "Santa Rosa",
      zone: "LA PAMPA",
      website: "",
    },
    {
      id: 6,
      name: "Juan Carlos Gardella",
      phone: 5493814217683,
      email: "sielmed@hotmail.com",
      company: "Sielmed Electromedicina",
      address: "Av. Jujuy 228",
      location: "San Miguel De Tucumán",
      zone: "TUCUMÁN",
      website: "",
    },
    {
      id: 7,
      name: "Nicol Loduca",
      phone: 0,
      email: "info@loduca.com.uy",
      company: "EMHI",
      address: "",
      location: "",
      zone: "URUGUAY",
      website: "www.loduca.com.uy",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 bg-indigo-200 bg-cover bg-center p-4 text-indigo-900 md:gap-4 md:px-8 md:py-6 xl:px-16 xl:py-8">
        <div className="border-l-4 border-solid border-indigo-900 pl-2">
          <h4 className="text-lg font-semibold md:text-xl xl:text-2xl">
            Distribuidores
          </h4>
        </div>
        <p className="ml-4 text-pretty text-sm md:text-base">
          Poseemos una amplia y eficiente red de distribucion en todo el país,
          Latinoamérica y Estados Unidos, con rápido soporte, asistencia total y
          una excelente calidad de atención.
        </p>
      </div>
      <div className="grid gap-3 px-8 py-4 max-md:place-items-center max-md:px-0 md:py-8 lg:grid-cols-2 lg:gap-4 lg:px-16 2xl:grid-cols-3 3xl:grid-cols-4">
        {DistribuidoresList.map((distributor) => (
          <DistributorCard
            key={distributor.id}
            distributorName={distributor.name}
            distributorPhone={distributor.phone}
            distributorEmail={distributor.email}
            distributorCompany={distributor.company}
            distributorAddress={distributor.address}
            distributorLocation={distributor.location}
            distributorZone={distributor.zone}
            distributorWebsite={distributor.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Distribuidores;

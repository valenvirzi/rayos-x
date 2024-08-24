// import { Outlet } from "react-router-dom";

import Producto from "../components/Producto";

const Catalogo = () => {
  // TODO: Hacer pagina Catalogo y un componente que muestre cada producto.
  return (
    <div className="flex flex-col items-center px-2 py-4">
      <h2>Catalogo</h2>
      {/* <Outlet /> */}
      <Producto />
    </div>
  );
};

export default Catalogo;

import { Outlet } from "react-router-dom";

const Equipamientos = () => {
  // TODO: Hacer pagina Equipamientos y un componente que muestre cada producto.
  return (
    <div>
      <h2>Equipamientos</h2>
      <Outlet />
    </div>
  );
};

export default Equipamientos;

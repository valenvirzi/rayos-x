import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Index from "./pages/Index.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Equipamientos from "./pages/Equipamientos.jsx";
import SobreNosotros from "./pages/SobreNosotros.jsx";
import Distribuidores from "./pages/Distribuidores.jsx";
import ServicioTecnico from "./pages/ServicioTecnico.jsx";
import Contacto from "./pages/Contacto.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/Equipamientos",
        element: <Equipamientos />,
        children: [
          {
            path: "/Equipamientos/:equipamientosId",
            element: <h2>Equipamientos Details</h2>,
          },
        ],
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Sobre-nosotros",
        element: <SobreNosotros />,
      },
      {
        path: "/Distribuidores",
        element: <Distribuidores />,
      },
      {
        path: "/Servicio-tecnico",
        element: <ServicioTecnico />,
      },
      {
        path: "/Contacto",
        element: <Contacto />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

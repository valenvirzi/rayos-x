import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Equipamientos",
    element: <h2>Equipamientos</h2>,
    children: [
      {
        path: "/Equipamientos/:equipamientosId",
        element: <h2>Equipamientos Details</h2>,
      },
    ],
  },
  {
    path: "/Sobre-nosotros",
    element: <h2>Sobre Nosotros</h2>,
  },
  {
    path: "/Distribuidores",
    element: <h2>Distribuidores</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  //TODO: Hacer Error Page
  return (
    <main>
      <div>
        <h1>Error 404</h1>
        <p>La página no ha sido encontrada</p>
      </div>
      <Link to="/">Volver al Inicio</Link>
    </main>
  );
};

export default NotFoundPage;

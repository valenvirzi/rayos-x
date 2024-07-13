import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main>
      <div>
        <h1>Error 404 Page Not Found</h1>
      </div>
      <Link to="/">Go back to Home Page</Link>
    </main>
  );
};

export default NotFoundPage;

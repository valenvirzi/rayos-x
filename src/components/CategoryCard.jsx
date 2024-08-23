import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({
  categoryRoute,
  imgURL,
  categoryTitle,
  categoryDescription,
}) => {
  return (
    <Link to={`/Equipamientos/${categoryRoute}`} className="w-full">
      <article
        className={`relative flex min-h-24 flex-row-reverse items-center gap-4 overflow-hidden rounded border border-solid border-indigo-800 bg-indigo-900 p-4 text-white hover:bg-white hover:text-indigo-900 md:min-h-32 md:justify-end md:p-5 lg:h-full lg:flex-col lg:justify-between 2xl:p-6`}
      >
        <img
          src={imgURL}
          alt={`Imagen ${categoryTitle}`}
          className="absolute bottom-0 right-3 top-0 max-h-full self-center max-md:max-w-12 md:h-2/3 lg:static lg:h-auto lg:w-2/4"
        />
        <div className="flex w-full flex-col gap-4 md:w-2/3 lg:w-full">
          <h4 className="w-3/4 font-semibold md:w-auto md:text-lg 3xl:text-xl">
            {categoryTitle}
          </h4>
          <p
            className={`hidden text-pretty md:inline-block md:text-sm lg:text-base 3xl:text-lg ${categoryDescription ? "" : "md:hidden"}`}
          >
            {categoryDescription}
          </p>
        </div>
      </article>
    </Link>
  );
};

CategoryCard.propTypes = {
  categoryRoute: PropTypes.string.isRequired,
  imgURL: PropTypes.string.isRequired,
  categoryTitle: PropTypes.string.isRequired,
  categoryDescription: PropTypes.string,
};

export default CategoryCard;

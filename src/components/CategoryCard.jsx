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
        className={`relative flex flex-row-reverse items-center gap-4 overflow-hidden rounded-md border border-solid border-indigo-800 p-4 text-indigo-950 hover:bg-indigo-800 hover:text-white md:justify-end md:p-5 lg:flex-col 2xl:p-6`}
      >
        <img
          src={imgURL}
          alt={`Imagen ${categoryTitle}`}
          className="absolute bottom-0 right-1 top-0 max-h-full max-md:max-w-12 md:h-2/3 md:self-center lg:static lg:w-2/4"
        />
        <div className="flex w-full flex-col gap-4 md:w-2/3 lg:w-full">
          <h4 className="font-semibold md:text-lg 3xl:text-xl">
            {categoryTitle}
          </h4>
          <p className="hidden text-pretty md:inline-block md:text-sm lg:text-base 3xl:text-lg">
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

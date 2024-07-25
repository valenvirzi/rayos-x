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
        className={`relative flex items-center gap-4 overflow-hidden rounded-md border border-solid border-black p-4 hover:bg-black hover:text-white md:flex-col md:p-5 2xl:p-6`}
      >
        <img
          src={imgURL}
          alt={`Imagen ${categoryTitle}`}
          className="absolute bottom-0 right-1 top-0 max-h-full md:static md:w-2/4"
        />
        <div className="flex w-full flex-col gap-4">
          <h4 className="font-semibold md:text-lg 3xl:text-xl">
            {categoryTitle}
          </h4>
          <p className="hidden text-pretty md:inline-block 3xl:text-lg">
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

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
        className={`flex items-center gap-4 rounded-md border border-solid border-black md:flex-col bg-[url('${imgURL}')] bg-contain bg-[95%_center] bg-no-repeat p-4 md:bg-none md:p-5 2xl:p-6`}
      >
        <img
          src={imgURL}
          alt={`Imagen ${categoryTitle}`}
          className="hidden md:inline-block md:w-2/4"
        />
        <div className="flex w-full flex-col gap-4">
          <h4 className="font-medium md:text-lg 3xl:text-xl">
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
  categoryRoute: PropTypes.string,
  imgURL: PropTypes.string,
  categoryTitle: PropTypes.string,
  categoryDescription: PropTypes.string,
};

export default CategoryCard;

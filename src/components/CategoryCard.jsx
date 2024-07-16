import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CategoryCard = ({ categoryRoute, imgURL, categoryTitle }) => {
  return (
    <Link to={`/Equipamientos/${categoryRoute}`} className="w-full">
      <article
        className={`bg-[url('${imgURL}')] rounded-md border border-solid border-black bg-contain p-4`}
      >
        <h4 className="font-medium">{categoryTitle}</h4>
      </article>
    </Link>
  );
};

CategoryCard.propTypes = {
  categoryRoute: PropTypes.string,
  imgURL: PropTypes.string,
  categoryTitle: PropTypes.string,
};

export default CategoryCard;

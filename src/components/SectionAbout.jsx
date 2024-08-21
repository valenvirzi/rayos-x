import PropTypes from "prop-types";

const SectionAbout = ({
  sectionImgRoute,
  sectionTitle,
  sectionPara1,
  sectionPara2,
}) => {
  return (
    <section className="flex flex-col even:bg-indigo-900 even:text-white lg:min-h-96 odd:lg:flex-row-reverse even:lg:flex-row">
      <div
        className={`bg-[url('${sectionImgRoute}')] bg-cover bg-left-bottom bg-no-repeat lg:flex-1`}
      >
        <img
          src={`${sectionImgRoute}`}
          alt="Foto Empresa"
          className="min-w-full md:h-96 lg:hidden"
        />
      </div>
      <div className="flex flex-col gap-3 px-8 py-6 md:px-16 md:py-10 lg:flex-1 lg:self-center 2xl:gap-6 2xl:py-28 3xl:gap-8">
        <h2 className="mb-2 text-xl font-semibold 2xl:text-2xl 3xl:text-3xl">
          {sectionTitle}
        </h2>
        <p className="text-sm md:text-base 2xl:text-lg">{sectionPara1}</p>
        <p className="text-sm md:text-base 2xl:text-lg">{sectionPara2}</p>
      </div>
    </section>
  );
};

SectionAbout.propTypes = {
  sectionImgRoute: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  sectionPara1: PropTypes.string.isRequired,
  sectionPara2: PropTypes.string.isRequired,
};

export default SectionAbout;

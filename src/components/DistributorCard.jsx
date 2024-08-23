import PropTypes from "prop-types";
import { useState } from "react";

const DistributorCard = ({
  distributorName,
  distributorPhone,
  distributorEmail,
  distributorCompany,
  distributorAddress,
  distributorLocation,
  distributorZone,
  distributorWebsite,
}) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const toggleInfo = () => {
    setInfoOpen(!infoOpen);
  };

  return (
    <article className="flex flex-col items-center justify-between gap-2 text-pretty break-words rounded-md border border-solid border-indigo-800 bg-white py-2 pr-2 shadow-[3px_5px_6px_0_rgba(0,0,0,0.3)] max-md:w-72 md:max-w-none md:pr-4 xl:gap-4 xl:pr-6 xl:pt-6">
      <div className="relative right-1 flex h-full w-full max-w-full flex-col gap-4 self-start bg-gradient-to-bl from-indigo-800 to-indigo-900 p-3 text-white shadow-[3px_5px_6px_0_rgba(0,0,0,0.3)] md:right-2 md:pl-4 xl:gap-8 xl:p-6">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold xl:text-base">
            {distributorZone}
          </h4>
          <button type="button" onClick={toggleInfo} className="p-2 md:hidden">
            <img
              className={`max-w-5 ${infoOpen ? "-rotate-180" : ""} transition-all`}
              src="./media/down-arrow.svg"
              alt="Abrir"
            />
          </button>
        </div>
        <ul
          className={`flex flex-col gap-2 text-sm ${infoOpen ? "" : "max-md:hidden"} xl:gap-4`}
        >
          <li
            className={`${distributorAddress && distributorLocation ? "" : "hidden"}`}
          >
            <a href="" className="flex items-center gap-2 xl:gap-4">
              <img
                src="./media/location-pin.svg"
                alt="Ubicación"
                className="w-6"
              />
              <div className="flex flex-col">
                <p>{distributorAddress}</p>
                <p>{distributorLocation}</p>
              </div>
            </a>
          </li>
          <li className={`${distributorPhone ? "" : "hidden"}`}>
            <a
              href={`tel:+${distributorPhone}`}
              className="flex items-center gap-2 xl:gap-4"
            >
              <img
                src="./media/whatsapp-logo.svg"
                alt="WhatsApp"
                className="w-6"
              />
              <p>+{distributorPhone}</p>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${distributorEmail}`}
              className="flex items-center gap-2 xl:gap-4"
            >
              <img src="./media/mail-icon.svg" alt="Email" className="w-6" />
              <p className="w-11/12 md:w-auto lg:w-10/12 xl:w-11/12">
                {distributorEmail}
              </p>
            </a>
          </li>
          <li className={`${distributorWebsite ? "" : "hidden"}`}>
            <a
              href={`${distributorWebsite}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 xl:gap-4"
            >
              <img src="./media/web-icon.svg" alt="Website" className="w-6" />
              <p>{distributorWebsite}</p>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center lg:gap-1 lg:py-2 xl:gap-2">
        <h4 className="font-semibold text-indigo-800 xl:text-xl">
          {distributorName}
        </h4>
        <p
          className={`text-sm xl:text-base ${distributorCompany ? "" : "invisible"}`}
        >
          {distributorCompany ? distributorCompany : "--"}
        </p>
      </div>
    </article>
  );
};

DistributorCard.propTypes = {
  distributorName: PropTypes.string.isRequired,
  distributorPhone: PropTypes.number,
  distributorEmail: PropTypes.string.isRequired,
  distributorCompany: PropTypes.string,
  distributorAddress: PropTypes.string,
  distributorLocation: PropTypes.string,
  distributorZone: PropTypes.string.isRequired,
  distributorWebsite: PropTypes.string,
};

export default DistributorCard;

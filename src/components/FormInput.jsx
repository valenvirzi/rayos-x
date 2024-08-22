import PropTypes from "prop-types";

const FormInput = ({ label, type, id, placeholder }) => {
  return (
    <div className="flex w-full flex-col gap-1">
      <label
        className="text-sm font-semibold text-indigo-900"
        htmlFor="contactForm"
      >
        {label}
      </label>
      <input
        className="rounded border border-indigo-900 bg-indigo-50 px-3 py-2 focus:outline focus:outline-2 focus:outline-indigo-600"
        placeholder={placeholder}
        type={type}
        required
        id={id}
      />
      <span className="text-xs text-red-600">
        {/* * Please enter a valid email address. */}
      </span>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;

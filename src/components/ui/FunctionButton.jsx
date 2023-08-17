import PropTypes from 'prop-types';

const FunctionButton = ({ className, label, onClick }) => {
  return (
    <button
      className={`rounded-lg px-2 py-1 text-sm hover:bg-gray-100 hover:underline ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

FunctionButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default FunctionButton;

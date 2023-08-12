import PropTypes from 'prop-types';

const CategoryButton = ({ icon, label, checked, onClick }) => {
  return (
    <button className="group flex w-16 flex-col items-center" onClick={onClick}>
      <div
        className={`flex h-10 w-full items-center justify-center rounded-lg border-2 bg-gray-300 hover:border-pm-main group-hover:border-pm-main ${
          checked ? 'border-pm-main' : 'border-gray-300'
        }`}
      >
        <img src={icon} alt="동물" className="h-7 w-7" />
      </div>

      <h2
        className={`mt-1 text-xs text-gray-800 ${
          checked ? 'font-bold' : 'font-medium'
        }`}
      >
        {label}
      </h2>
    </button>
  );
};

CategoryButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryButton;

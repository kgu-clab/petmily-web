import PropTypes from 'prop-types';

const CategoryButton = ({ icon, label }) => {
  return (
    <button className="group flex w-16 flex-col items-center">
      <div className="flex h-10 w-full items-center justify-center rounded-lg border-2 border-gray-300 bg-gray-300 hover:border-pm-main group-hover:border-pm-main">
        <img src={icon} alt="강아지" className="h-5 w-5" />
      </div>

      <h2 className="mt-1 text-sm font-medium text-gray-800">{label}</h2>
    </button>
  );
};

CategoryButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default CategoryButton;

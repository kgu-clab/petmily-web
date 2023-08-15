import PropTypes from 'prop-types';

const AnimalProfileTag = ({ icon, label, data }) => {
  return (
    <div className="flex w-20 flex-col items-center justify-center rounded-lg bg-gray-100 py-2">
      {icon}

      <ul className="mt-2 text-center">
        <li className="text-sm font-semibold">{data}</li>
        <li className="text-xs text-gray-600">{label}</li>
      </ul>
    </div>
  );
};

AnimalProfileTag.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};

export default AnimalProfileTag;

import PropTypes from 'prop-types';

const AnimalSection = ({ icon, title, className = '', children }) => {
  return (
    <div className="h-full rounded-lg bg-white p-4">
      <h1 className={`${className} font-xl flex gap-2 font-bold`}>
        {icon}
        {title}
      </h1>

      {children}
    </div>
  );
};

AnimalSection.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default AnimalSection;

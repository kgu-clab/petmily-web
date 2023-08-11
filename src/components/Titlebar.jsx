import PropTypes from 'prop-types';

const Titlebar = ({ title, sub }) => {
  return (
    <div>
      <h1 className="text-2xl font-extrabold">{title}</h1>
      <span className="text-sm font-normal">{sub}</span>
    </div>
  );
};

Titlebar.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
};

export default Titlebar;

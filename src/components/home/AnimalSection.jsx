import PropTypes from 'prop-types';
import Titlebar from '@components/ui/Titlebar';

const AnimalSection = ({ title, sub, to, children }) => {
  return (
    <div>
      <Titlebar title={title} sub={sub} to={to} />

      <div className="mt-4 grid grid-cols-5 gap-4">{children}</div>
    </div>
  );
};

AnimalSection.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AnimalSection;

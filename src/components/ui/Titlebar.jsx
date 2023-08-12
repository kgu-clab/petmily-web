import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Titlebar = ({ title, sub, to = '/' }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{title}</h1>

        <Link
          to={to}
          className="flex items-center justify-center rounded-xl px-3 py-1 text-gray-500 hover:bg-gray-300 hover:text-gray-900"
        >
          <p className="whitespace-nowrap text-sm font-medium">더 보기 &gt;</p>
        </Link>
      </div>

      <span className="text-sm font-normal">{sub}</span>
    </div>
  );
};

Titlebar.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default Titlebar;

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Titlebar = ({ title, sub, to }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-extrabold">{title}</h1>

        {to && (
          <Link
            to={to}
            className="flex items-center justify-center rounded-lg px-3 py-1.5 text-pm-main hover:bg-gray-300"
          >
            <p className="whitespace-nowrap text-sm font-semibold">더보기</p>
          </Link>
        )}
      </div>

      <span className="text-sm font-normal">{sub}</span>
    </div>
  );
};

Titlebar.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  to: PropTypes.string,
};

export default Titlebar;

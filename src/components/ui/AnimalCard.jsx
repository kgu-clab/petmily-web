import { API_BASE_URL } from '@common/environment';
import { formatCurrency } from '@common/utils';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const AnimalCard = ({ title, src, provider, price, icon, to }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex cursor-pointer flex-col rounded-lg transition ease-in-out hover:shadow-lg"
      onClick={() => navigate(to)}
    >
      {src && (
        <img
          src={`${API_BASE_URL}${src}`}
          alt="animal image"
          className="basis-3/5 rounded-t-lg object-cover"
        />
      )}

      <div className="grow rounded-b-lg bg-white p-2">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold">{title}</h1>

          {icon && <img src={icon} alt="종" className="h-6 w-6" />}
        </div>
        <p className="text-sm font-normal text-gray-500">{provider}</p>

        <p className="mt-1 text-sm font-semibold">
          <span className="text-pm-main">{formatCurrency(price)}</span> 원
        </p>
      </div>
    </div>
  );
};

AnimalCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  provider: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default AnimalCard;

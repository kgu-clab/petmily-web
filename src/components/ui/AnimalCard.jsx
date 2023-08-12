import { formatCurrency } from '@common/utils';
import PropTypes from 'prop-types';

const AnimalCard = ({ title, provider, price, icon }) => {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg transition ease-in-out hover:shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
        alt=""
        className="basis-3/5 rounded-t-lg object-cover"
      />

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
  provider: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};

export default AnimalCard;

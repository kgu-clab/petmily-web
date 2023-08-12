import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

const ThemeCard = ({ title, sub, image, to }) => {
  const navigate = useNavigate();

  return (
    <Card
      shadow={false}
      className="relative grid h-52 cursor-pointer items-end justify-start overflow-hidden text-center transition ease-in-out hover:shadow-xl"
      onClick={() => navigate(to)}
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
      >
        <img
          src={image}
          alt="image"
          className="h-full w-full object-cover transition ease-in-out hover:scale-125"
        />
        <div className="to-bg-black-10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-r from-black/50 via-black/30" />
      </CardHeader>

      <CardBody className="pointer-events-none relative whitespace-nowrap p-4 text-start">
        <div className="text-2xl font-bold text-white">{title}</div>
        <span className="font-medium text-white">{sub}</span>
      </CardBody>
    </Card>
  );
};

ThemeCard.propTypes = {
  title: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default ThemeCard;

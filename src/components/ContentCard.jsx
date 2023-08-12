import PropTypes from 'prop-types';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';

const ContentCard = ({ title, date, image }) => {
  return (
    <Card
      shadow={false}
      className="relative grid h-52 cursor-pointer items-end justify-center overflow-hidden text-center transition ease-in-out hover:shadow-xl"
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
        <div className="to-bg-black-10 pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30" />
      </CardHeader>

      <CardBody className="pointer-events-none relative whitespace-nowrap p-4">
        <div className="text-lg font-bold text-white">{title}</div>
        <span className="text-gray-400">{date}</span>
      </CardBody>
    </Card>
  );
};

ContentCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ContentCard;

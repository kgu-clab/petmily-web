import PropTypes from 'prop-types';

const GuideTagSection = ({ title, children }) => {
  return (
    <>
      <h2 className="mb-2 mt-4 font-bold text-gray-700">#{title}</h2>

      <div className="grid grid-cols-3 gap-4">{children}</div>
    </>
  );
};

GuideTagSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default GuideTagSection;

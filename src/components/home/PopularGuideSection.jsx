import PropTypes from 'prop-types';
import Titlebar from '@components/ui/Titlebar';

const PopularGuideSection = ({ children, to }) => {
  return (
    <div>
      <Titlebar
        title="인기 지식정보"
        sub="현재까지 꾸준한 조회수와 좋아요가 높은 지식정보입니다."
        to={to}
      />

      {children}
    </div>
  );
};

PopularGuideSection.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

export default PopularGuideSection;

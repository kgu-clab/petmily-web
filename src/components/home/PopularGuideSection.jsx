import PropTypes from 'prop-types';
import Titlebar from '@components/Titlebar';

const PopularGuideSection = ({ children }) => {
  return (
    <div>
      <Titlebar
        title="인기 지식정보"
        sub="현재까지 꾸준한 조회수와 좋아요가 높은 지식정보입니다."
      />

      {children}
    </div>
  );
};

PopularGuideSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PopularGuideSection;

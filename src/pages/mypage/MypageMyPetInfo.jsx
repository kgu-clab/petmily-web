import Titlebar from '@components/ui/Titlebar';

const MypageMyPetInfo = () => {
  return (
    <div>
      <Titlebar
        title="나의 반려동물"
        sub="팻밀리에서 분양한 반려동물 정보에요."
      />

      <Titlebar
        title="추천 콘텐츠"
        sub="분양한 반려동물에 관련된 콘텐츠에요."
      />
    </div>
  );
};

MypageMyPetInfo.propTypes = {};

export default MypageMyPetInfo;

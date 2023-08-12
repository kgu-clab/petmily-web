import AnimalSection from '@components/home/AnimalSection';
import AnimalCard from '@components/ui/AnimalCard';

const AnimalListPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* 전문업체분양 */}
      <AnimalSection
        title="전문업체분양"
        sub="팻밀리가 검증한 전문업체 분양입니다."
        to="/professional"
      >
        <AnimalCard
          title="시고르자브종"
          provider="한관희전문분양"
          price={100000}
        />
      </AnimalSection>

      {/* 보호소분양 */}
      <AnimalSection
        title="보호소분양"
        sub="보호소에서 보호하고 있는 반려동물입니다."
        to="/shelter"
      >
        <AnimalCard
          title="시고르자브종"
          provider="김정은보호소"
          price={100000}
        />
      </AnimalSection>

      {/* 개인무료분양 */}
      <AnimalSection
        title="개인무료분양"
        sub="개인 가정의 무료 분양입니다."
        to="/individual"
      >
        <AnimalCard
          title="시고르자브종"
          provider="팻밀리관리자"
          price={100000}
        />
      </AnimalSection>
    </div>
  );
};

AnimalListPage.propTypes = {};

export default AnimalListPage;

import AnimalSection from '@components/animal/AnimalListSection';
import AnimalCard from '@components/ui/AnimalCard';

const SalesListPage = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* 전문업체분양 */}
      <AnimalSection
        title="전문업체분양"
        sub="팻밀리가 검증한 전문업체 분양입니다."
        to="/sales/professional"
      ></AnimalSection>

      {/* 보호소분양 */}
      <AnimalSection
        title="보호소분양"
        sub="보호소에서 보호하고 있는 반려동물입니다."
        to="/sales/shelter"
      ></AnimalSection>

      {/* 개인무료분양 */}
      <AnimalSection
        title="개인무료분양"
        sub="개인 가정의 무료 분양입니다."
        to="/sales/individual"
      ></AnimalSection>
    </div>
  );
};

SalesListPage.propTypes = {};

export default SalesListPage;

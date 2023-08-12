import DogIcon from '@assets/dog.svg';
import CategoryButton from '@components/ui/CategoryButton';

const animals = [
  '전체',
  '강아지',
  '고양이',
  '새',
  '물고기',
  '소형 동물',
  '파충류',
];

const ProfessionalSalesPage = () => {
  return (
    <div className="flex gap-6">
      {animals.map((item) => (
        <CategoryButton key={item} icon={DogIcon} label={item} />
      ))}
    </div>
  );
};

ProfessionalSalesPage.propTypes = {};

export default ProfessionalSalesPage;

import AnimalCard from '@components/ui/AnimalCard';
import ContentCard from '@components/ui/ContentCard';
import Footer from '@components/Footer';
import Titlebar from '@components/Titlebar';
import AnimalSection from '@components/home/AnimalSection';
import GuideTagSection from '@components/home/GuideTagSection';
import PopularGuideSection from '@components/home/PopularGuideSection';

const HomePage = () => {
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
          price="100,000"
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
          price="100,000"
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
          price="100,000"
        />
      </AnimalSection>

      {/* 새로나온 가이드 */}
      <div>
        <Titlebar
          title="새로나온 가이드"
          sub="최근에 올라온 반려동물 가이드입니다."
          to="/guide"
        />

        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <ContentCard
              title="강아지 닭고기 간식 추천 10가지 - 맛있고 건강하게!"
              date="23.08.17"
              image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            />
          </div>

          <div>
            <ContentCard
              title="고양이 만세 자세, 왜 이러고 자는 걸까?"
              date="23.08.16"
              image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80"
            />
          </div>

          <div>
            <ContentCard
              title="고양이 울타리 추천 제품 10가지"
              date="23.08.15"
              image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>

          <div className="col-span-2">
            <ContentCard
              title="강아지 증명사진, 촬영 방법과 주의사항은?"
              date="23.08.15"
              image="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </div>
      </div>

      {/* 인기 지식정보 */}
      <PopularGuideSection>
        <GuideTagSection title="행동">
          <ContentCard
            title="강아지 뒷발차기 이유 3가지"
            date="23.08.17"
            image="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
          />
          <ContentCard
            title="짖음 방지 목걸이, 쓰면 안 되는 이유는?"
            date="23.08.17"
            image="https://images.unsplash.com/photo-1599378346264-f8cd45f471f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          />
          <ContentCard
            title="강아지 포옹 싫어하는 이유는?"
            date="23.08.15"
            image="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
          />
        </GuideTagSection>

        <GuideTagSection title="관리">
          <ContentCard
            title="강아지 켄넬 훈련"
            date="23.08.16"
            image="https://images.unsplash.com/photo-1562703219-98e4de78fbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          />
          <ContentCard
            title="강아지 체벌 하면 안 되는 이유 4가지"
            date="23.08.13"
            image="https://images.unsplash.com/photo-1585584114963-503344a119b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
          />
          <ContentCard
            title="강아지 양치 주기 - 하루에 몇 번?"
            date="23.08.13"
            image="https://images.unsplash.com/photo-1534822916-212967756e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          />
        </GuideTagSection>
      </PopularGuideSection>

      <Footer />
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;

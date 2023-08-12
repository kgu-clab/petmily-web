import ContentCard from '@components/ui/ContentCard';
import Titlebar from '@components/ui/Titlebar';
import GuideTagSection from '@components/home/GuideTagSection';
import PopularGuideSection from '@components/home/PopularGuideSection';
import ThemeCard from '@components/ui/ThemeCard';

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* 나에게 어울리는 반려동물 찾기 */}
      <div>
        <Titlebar
          title="나에게 어울리는 반려동물 찾기"
          sub="카테고리를 통해서 키우고 싶은 반려동물을 찾아봐요."
        />

        <div className="mt-4 grid grid-cols-3 gap-4">
          <ThemeCard
            title="모든 정보"
            sub="모든 종의 최신 분양 정보를 볼 수 있어요."
            image="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          />

          <ThemeCard
            title="강아지"
            sub="모든 개과의 분양 정보를 볼 수 있어요."
            image="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
          />

          <ThemeCard
            title="고양이"
            sub="모든 고양이과의 분양 정보를 볼 수 있어요."
            image="https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1657&q=80"
          />

          <ThemeCard
            title="새"
            sub="앵무새 등 조류의 분양 정보를 볼 수 있어요."
            image="https://images.unsplash.com/photo-1549608276-5786777e6587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          />

          <div className="col-span-2">
            <ThemeCard
              title="물고기"
              sub="구피, 금붕어 등 다양한 애완 물고기의 분양 정보를 볼 수 있어요."
              image="https://images.unsplash.com/photo-1578764843877-f0f292ea5b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            />
          </div>

          <div className="col-span-2">
            <ThemeCard
              title="소형 동물"
              sub="햄스터, 토끼, 고슴도치 등 기르기 쉬운 작은 애완동물의 분양 정보를 볼 수 있어요."
              image="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            />
          </div>

          <ThemeCard
            title="파충류"
            sub="거북이, 도마뱀 등 파충류의 분양 정보를 볼 수 있어요. "
            image="https://images.unsplash.com/photo-1617540021016-72023b487e99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
          />
        </div>
      </div>

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
    </div>
  );
};

HomePage.propTypes = {};

export default HomePage;

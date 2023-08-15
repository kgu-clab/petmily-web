import GuideTagSection from '@components/home/GuideTagSection';
import PopularGuideSection from '@components/home/PopularGuideSection';
import ContentCard from '@components/ui/ContentCard';
import Table from '@components/ui/Table';
import Titlebar from '@components/ui/Titlebar';

const GuidePage = () => {
  return (
    <div className="flex flex-col gap-16">
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

      {/* 필수 가이드 */}
      <div>
        <Titlebar title="필수 가이드" sub="반려동물이 처음이신가요?" />

        <div className="mt-4 grid grid-cols-3 gap-4">
          <ContentCard
            title="이런 건 먹으면 안돼요!"
            date="23.08.17"
            image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
          />

          <ContentCard
            title="동물 등록, 모두를 위한 선택"
            date="23.08.16"
            image="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80"
          />

          <ContentCard
            title="우리 아이를 위한 똑똑한 사료구매 방법"
            date="23.08.15"
            image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          />
        </div>
      </div>

      {/* 가이드 리스트 */}
      <div>
        <Titlebar title="전체" />

        <Table
          className="mt-4"
          headers={['번호', '제목', '작성자', '작성일']}
        ></Table>
      </div>
    </div>
  );
};
export default GuidePage;

import GuideTagSection from '@components/home/GuideTagSection';
import PopularGuideSection from '@components/home/PopularGuideSection';
import ContentCard from '@components/ui/ContentCard';
import Titlebar from '@components/ui/Titlebar';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { PropTypes } from 'prop-types';

const GuideCard = ({ imageSrc, title, readGuide }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105">
      <div className="relative overflow-hidden shadow-lg">
        <img
          src={imageSrc}
          alt="image"
          className="h-48 w-96 rounded-xl object-cover"
        />
      </div>
      <div className="h-28 p-6">
        <div className="h-32">
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
        </div>
      </div>
      <div className="flex justify-end pb-4 pe-4">
        <button
          className="rounded-lg bg-pm-main px-6 py-3 text-xs font-bold text-white hover:bg-blue-700"
          onClick={readGuide}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
};

GuideCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  readGuide: PropTypes.func.isRequired,
};

const GuidePage = () => {
  const readGuide = () => {};
  return (
    <div className="flex flex-col space-y-8 p-2">
      <div className="flex">
        <BookOpenIcon className=" h-10 w-10" />
        <h1 className="ml-2 p-1 text-4xl font-bold ">가이드</h1>
      </div>
      {/* 필수 가이드 */}
      <div>
        <Titlebar
          className=""
          title="필수 가이드"
          sub="반려동물이 처음이신가요?"
        />

        <div className="my-4">
          <div className="flex space-x-8">
            <GuideCard
              imageSrc="https://images.unsplash.com/photo-1562703219-98e4de78fbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              title="반려견이 먹으면 안되는 음식을 알아봐요"
              readGuide={readGuide}
            />

            <div className="flex space-x-8">
              <GuideCard
                imageSrc="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                title="동물등록이 어려우시다면?"
                readGuide={readGuide}
              />

              <div className="flex space-x-8">
                <GuideCard
                  imageSrc="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  title="반려동물도 예방접종을 하나요?"
                  readGuide={readGuide}
                />
              </div>
            </div>
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

      {/* 새로 나온 가이드 */}
      <div>
        <Titlebar title="새로 나온 가이드" sub="최근에 올라온 가이드예요" />

        {/* 새로 나온 가이드 리스트 */}
        <div className="my-4">
          <div className="flex space-x-8">
            <GuideCard
              imageSrc="https://images.unsplash.com/photo-1599378346264-f8cd45f471f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              title="강아지 닭고기 간식 추천 10가지 - 맛있고 건강하게!"
              readGuide={readGuide}
            />

            <div className="flex space-x-8">
              <GuideCard
                imageSrc="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                title="고양이 만세 자세, 왜 이러고 자는 걸까?"
                readGuide={readGuide}
              />

              <div className="flex space-x-8">
                <GuideCard
                  imageSrc="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                  title="강아지 증명사진, 촬영 방법과 주의사항은?"
                  readGuide={readGuide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GuidePage;

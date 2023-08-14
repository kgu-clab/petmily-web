import Titlebar from '@components/ui/Titlebar';
import { PropTypes } from 'prop-types';

const GuideCard = ({ imageSrc, title, readGuide }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105">
      <div className="relative overflow-hidden shadow-lg">
        <img src={imageSrc} alt="image" className="h-48 w-96 object-cover" />
      </div>
      <div className="h-36 p-6">
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
    <div className="flex flex-col">
      {/* 인기가이드 */}
      <div className="mx-4 my-4">
        <Titlebar
          className=""
          title="인기 가이드"
          sub="요즘 인기있는 반려동물 가이드를 알아봐요"
        />

        {/* 인기 가이드 리스트 */}
        <div className="my-4">
          <div className="flex space-x-8">
            <GuideCard
              imageSrc="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1143&q=80"
              title="강아지 체벌하면 안되는 이유"
              readGuide={readGuide}
            />

            <div className="flex space-x-8">
              <GuideCard
                imageSrc="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                title="강아지 훈련, 언제부터 해야 할까요?"
                readGuide={readGuide}
              />

              <div className="flex space-x-8">
                <GuideCard
                  imageSrc="https://images.unsplash.com/photo-1520580413066-ac45756bdc71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                  title="반려동물도 예방주사를 맞나요?"
                  readGuide={readGuide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 새로 나온 가이드 */}
      <div className="mx-4 my-4">
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

      {/* 필수 가이드 */}
      <div className="mx-4 my-4">
        <Titlebar title="필수 가이드" sub="반려동물이 처음이신가요?" />

        {/* 필수 가이드 리스트 */}
        <div className="my-4">
          <div className="flex space-x-8">
            <GuideCard
              imageSrc="https://images.unsplash.com/photo-1534822916-212967756e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
              title="이런 건 먹으면 안돼요!"
              readGuide={readGuide}
            />

            <div className="flex space-x-8">
              <GuideCard
                imageSrc="https://images.unsplash.com/photo-1562703219-98e4de78fbda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                title="동물 등록, 모두를 위한 선택"
                readGuide={readGuide}
              />

              <div className="flex space-x-8">
                <GuideCard
                  imageSrc="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  title="우리 아이를 위한 똑똑한 사료구매 방법"
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

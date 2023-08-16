import { Navigate, useNavigate } from 'react-router-dom';

const Choice = ({ text }) => {
  return (
    <div className="my-4 flex items-center ">
      <input
        type="checkbox"
        className="mr-1 h-5 w-5 rounded border-gray-300 focus:border-pm-main focus:ring-pm-main"
      />
      <label className="mr-4 text-sm font-normal text-gray-800">{text}</label>
    </div>
  );
};

const SurveyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto my-20 flex h-fit w-fit flex-col space-y-8 bg-white p-10">
      <h1 className="text-center text-4xl font-extrabold">설문조사</h1>
      <hr />
      <div className="space-y-8">
        <ul className="list-disc space-y-1">
          <li>하루에 반려동물에 투자할 수 있는 시간이 얼마나 되나요?</li>
          <div className="flex items-center ">
            <Choice text="1-2시간" />
            <Choice text="2-3시간" />
            <Choice text="3-4시간" />
            <Choice text="4시간 이상" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>주거 환경이 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <Choice text="아파트" />
            <Choice text="주택" />
            <Choice text="빌라" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>가족 구성원이 몇 명이신가요?</li>
          <div className="flex items-center ">
            <Choice text="1인 가구" />
            <Choice text="2인 가구" />
            <Choice text="3인 가구" />
            <Choice text="4인 가구 이상" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>가정 내에 알레르기를 가지고 있는 사람이 있나요?</li>
          <div className="flex items-center ">
            <Choice text="네" />
            <Choice text="아니요" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>반려동물이 아픈 경우 소비 가능한 지출이 어느 정도 이신가요?</li>
          <div className="flex items-center ">
            <Choice text="10만원 이하" />
            <Choice text="30만원 이하" />
            <Choice text="50만원 이하" />
            <Choice text="50만원 이상" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>산책은 일주일에 몇 번 하실 예정인가요?</li>
          <div className="flex items-center ">
            <Choice text="1회 이하" />
            <Choice text="3회 이하" />
            <Choice text="5회 이하" />
            <Choice text="5회 이상" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>키우고 계시는 반려동물이 있으신가요?</li>
          <div className="flex items-center ">
            <Choice text="네" />
            <Choice text="아니요" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>반려동물을 키워본 경험이 있으신가요?</li>
          <div className="flex items-center ">
            <Choice text="네" />
            <Choice text="아니요" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>집 평수가 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <Choice text="10평 이하" />
            <Choice text="20평 이하" />
            <Choice text="30평 이하" />
            <Choice text="30평 이상" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>직업이 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <Choice text="학생" />
            <Choice text="직장인" />
            <Choice text="무직" />
          </div>
        </ul>
        <hr />

        <ul className="list-disc space-y-1">
          <li>연령이 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <Choice text="10대" />
            <Choice text="20대" />
            <Choice text="30대" />
            <Choice text="40대 이상" />
          </div>
        </ul>
        <hr />
      </div>
      <button
        className="mt-8 rounded-md bg-pm-main p-3 text-white hover:bg-blue-700"
        type="button"
        onClick={() => navigate('/signup')}
      >
        제출하기
      </button>
    </div>
  );
};

export default SurveyPage;

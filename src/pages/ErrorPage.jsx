import { HandRaisedIcon } from '@heroicons/react/24/outline';

const ErrorPage = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center text-center">
      <div className="my-48 text-center">
        <HandRaisedIcon className="mx-auto h-40 w-40" />
        <div className="mt-4 flex flex-col">
          <span className="text-4xl font-bold">404</span>
          <span className="mb-6 text-lg font-bold">
            현재 찾을 수 없는 페이지를 요청하셨습니다.
          </span>
          <span className="text">
            페이지의 주소가 잘못 입력되었거나, <br />
            주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          </span>
        </div>
        <button
          className="m-4 h-10 w-24 rounded-lg bg-pm-main text-base text-white hover:bg-blue-700"
          type="button"
          onClick={navigator}
        >
          메인으로
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

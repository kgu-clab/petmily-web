import { HandRaisedIcon } from '@heroicons/react/24/outline';

const ErrorPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center text-center">
      <div className="my-48 text-center">
        <HandRaisedIcon className="mx-auto h-40 w-40" />
        <div className="mt-4 flex flex-col">
          <h1 className="text-4xl font-bold">404</h1>

          <span className="mb-6 text-lg font-bold">
            해당 페이지를 찾을 수 없습니다.
          </span>

          <span className="text-gray-600">
            페이지의 주소가 잘못 입력되었거나, <br />
            주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

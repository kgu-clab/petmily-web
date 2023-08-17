import { Spinner } from '@material-tailwind/react';

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="font-bold text-pm-main">연결 중입니다.</h1>
      <p className="text-sm text-gray-600">잠시만 기다려주세요.</p>

      <Spinner color="blue" className="mt-2 h-8 w-8" />
    </div>
  );
};

LoadingPage.propTypes = {};

export default LoadingPage;

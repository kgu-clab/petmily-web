import {
  BuildingStorefrontIcon,
  Cog6ToothIcon,
  IdentificationIcon,
} from '@heroicons/react/24/outline';
import { Breadcrumbs } from '@material-tailwind/react';
import { Heart } from 'iconoir-react';
import { useState } from 'react';
import MypageStoreInfo from './MypageStoreInfo';
import MypageMyPetInfo from './MypageMyPetInfo';
import MypageCard from '@components/mypage/MypageCard';
import { useQuery } from 'react-query';
import { getMyInfo } from '@common/api';
import MypageSalesInfo from './MypageSalesInfo';
import MypageSetup from './MypageSetup';
import LoadingPage from '../LoadingPage';

const MyPage = () => {
  const { data, isSuccess, isLoading } = useQuery('myInfo', getMyInfo);

  const [view, setView] = useState('마이펫');

  const renderComponent = {
    마이펫: <MypageMyPetInfo />,
    스토어: <MypageStoreInfo />,
    분양: <MypageSalesInfo />,
    설정: <MypageSetup />,
  }[view];

  const isSelected = (name) => {
    return view === name ? 'border-pm-main' : 'border-gray-300 bg-gray-50';
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isSuccess)
    return (
      <div className="flex flex-col">
        <Breadcrumbs
          fullWidth
          className="h-10 whitespace-nowrap rounded-lg bg-gray-300"
        >
          <p className="font-semibold">마이페이지</p>
        </Breadcrumbs>

        <div className="mt-10">
          <div className="flex gap-10 rounded-t-lg bg-pm-main bg-gradient-to-r from-blue-500 p-4 text-white">
            <img
              className="h-32 w-32 rounded-full border-2 object-cover"
              src="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            />

            <div className="py-4">
              <p className="text-3xl font-semibold">{data?.id}님</p>
              <p>{data?.email}</p>
              <p>{data?.address}</p>
            </div>
          </div>

          <div className="flex rounded-b-lg bg-white">
            <MypageCard
              icon={<IdentificationIcon className="h-8 w-8" />}
              className={isSelected('마이펫')}
              label="마이펫"
              text="분양한 반려동물 정보를 볼 수 있어요."
              onClick={() => setView('마이펫')}
            />

            <MypageCard
              icon={<BuildingStorefrontIcon className="h-8 w-8" />}
              className={isSelected('스토어')}
              label="스토어"
              text="스토어에 등록, 구매 내용을 볼 수 있어요."
              onClick={() => setView('스토어')}
            />

            <MypageCard
              icon={<Heart className="h-8 w-8" />}
              className={isSelected('분양')}
              label="분양"
              text="팻밀리 분양에 관련된 정보를 볼 수 있어요."
              onClick={() => setView('분양')}
            />

            <MypageCard
              icon={<Cog6ToothIcon className="h-8 w-8" />}
              className={isSelected('설정')}
              label="설정"
              text="프로필 수정 및 기타 설정을 할 수 있어요."
              onClick={() => setView('설정')}
            />
          </div>
        </div>

        <div className="mt-4 rounded-b-lg bg-white p-4">{renderComponent}</div>
      </div>
    );
};

MyPage.propTypes = {};

export default MyPage;

import { getMyInfo } from '@common/api';
import Table from '@components/ui/Table';
import Titlebar from '@components/ui/Titlebar';

import { Breadcrumbs, Button } from '@material-tailwind/react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const MyPage = () => {
  const navigate = useNavigate();
  const { data, isSuccess } = useQuery('myInfo', getMyInfo);

  const onClickLogout = () => {
    sessionStorage.clear();
    navigate('/');
  };

  const onClickAddSales = () => {
    navigate('/animal/registration');
  };

  if (isSuccess)
    return (
      <div className="flex flex-col gap-10">
        <div className="flex justify-between">
          <Breadcrumbs
            fullWidth
            className="h-10 whitespace-nowrap rounded-lg bg-gray-300"
          >
            <p className="font-semibold">마이페이지</p>
          </Breadcrumbs>

          <div className="flex gap-2">
            {data.type === 'PROFESSIONAL' && (
              <Button onClick={onClickAddSales}>분양 등록</Button>
            )}

            <Button color="amber">수정</Button>

            <Button color="red" onClick={onClickLogout}>
              로그아웃
            </Button>
          </div>
        </div>

        <div className="flex gap-10">
          <img
            className="h-48 w-48 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          />

          <div>
            <p className="text-2xl font-semibold">{data.id}님</p>
            <p className="text-lg text-gray-500">{data.email}</p>
            <p className="text-lg text-gray-500">{data.address}</p>
          </div>
        </div>

        <div>
          <Titlebar
            title="분양 내역"
            sub="반려동물 분양 요청 내역을 조회합니다."
          />

          <Table
            className="mt-4"
            headers={['품종', '분양자', '요청일', '상태']}
          >
            <tr className="hover:bg-gray-100">
              <td>
                <div className="flex items-center gap-2 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                    alt="image"
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <p>시고르자브종</p>
                </div>
              </td>
              <td>한관희전문분양</td>
              <td>23.08.16</td>
              <td className="text-pm-red">거절</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td>
                <div className="flex items-center gap-2 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                    alt="image"
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <p>시고르자브종</p>
                </div>
              </td>
              <td>한관희전문분양</td>
              <td>23.08.16</td>
              <td className="text-yellow-800">요청</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td>
                <div className="flex items-center gap-2 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                    alt="image"
                    className="h-10 w-10 rounded-full object-cover"
                  />

                  <p>시고르자브종</p>
                </div>
              </td>
              <td>한관희전문분양</td>
              <td>23.08.16</td>
              <td>
                <Link to={'/contract'} className="text-pm-main">
                  승인 (계약서)
                </Link>
              </td>
            </tr>
          </Table>
        </div>

        <div>
          <Titlebar
            title="등록 상품"
            sub="스토어에 등록한 상품 리스트입니다."
          />
        </div>

        <div>
          <Titlebar title="구매 내역" sub="스토어에서 거래한 내역입니다." />
        </div>
      </div>
    );
};

MyPage.propTypes = {};

export default MyPage;

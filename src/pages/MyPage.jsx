import { getMyInfo } from '@common/api';
import Table from '@components/ui/Table';
import Titlebar from '@components/ui/Titlebar';
import { HeartIcon } from '@heroicons/react/24/outline';
import { Breadcrumbs, Button } from '@material-tailwind/react';
import { PropTypes } from 'prop-types';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ image, name, price }) => {
  return (
    <div className="relative flex h-64 w-48 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:scale-105">
      <div className="relative overflow-hidden shadow-lg">
        <img
          src={image}
          alt="image"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div className="">
        <h1 className="ml-4 mt-4 text-xl font-bold text-gray-800">{name}</h1>
        <p className="ml-4 mt-4">{price}원</p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

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
      <div className="flex flex-col space-y-10">
        <Breadcrumbs
          fullWidth
          className="h-10 whitespace-nowrap rounded-lg bg-gray-300"
        >
          <p className="font-semibold">마이페이지</p>
        </Breadcrumbs>

        <div>
          <h1 className="text-2xl font-bold">
            {data.nickname}님,
            <br />
            안녕하세요~
          </h1>
        </div>

        <div className="flex bg-white p-4 shadow-md">
          <img
            className="b-4 m-4 h-48 w-48 rounded-full object-cover"
            src="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
          />
          <div className="my-2 ml-4 space-y-4">
            <p className="text-lg text-gray-500">{data.id}</p>
            <p className="text-lg text-gray-500">{data.email}</p>
            <p className="text-lg text-gray-500">{data.address}</p>

            <div className="flex">
              <HeartIcon alt="heart" className="m-1 h-5 w-5" />
              <span className=" text-2xl">멍멍</span>
              <span className="ml-1 text-lg text-pm-main">
                이와 함께한지 500일!
              </span>
            </div>
            <Button color="red" onClick={onClickLogout}>
              로그아웃
            </Button>
          </div>
        </div>

        {data.type === 'PROFESSIONAL' && (
          <div>
            <Button onClick={onClickAddSales}>분양 등록</Button>
          </div>
        )}

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

        <div className="flex flex-col">
          <div className="pb-4 text-2xl font-bold">등록 상품</div>
          <div className="flex space-x-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              name="장난감"
              price="1000"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              name="사료 1kg"
              price="6000"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              name="고양이가 좋아하는 츄르 (50개입)"
              price="8000"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="pb-4 text-2xl font-bold">스토어 구매 내역</div>
          <div className="flex space-x-4">
            <ProductCard
              image="https://images.unsplash.com/photo-1578764843877-f0f292ea5b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              name="팻밀리 반려견 리드줄"
              price="8000"
            />
            <ProductCard
              image="https://images.unsplash.com/photo-1578764843877-f0f292ea5b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              name="애견 칫솔"
              price="1200"
            />
          </div>
        </div>
      </div>
    );
};

MyPage.propTypes = {};

export default MyPage;

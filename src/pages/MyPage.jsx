import { UserCircleIcon, HeartIcon } from '@heroicons/react/24/outline';
import { PropTypes } from 'prop-types';

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
  const onClickContract = () => {
    alert('계약서');
  };
  return (
    <div className="space-y-10 p-4">
      <div className="flex">
        <UserCircleIcon alt="user" className="mx-2 h-10 w-10" />
        <h1 className="text-4xl font-extrabold">마이페이지</h1>
      </div>
      <div className="flex bg-white p-4 shadow-md">
        <img
          className="b-4 m-4 h-48 w-48 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1519196215731-1d6799ca0ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        />
        <div className="my-2 ml-4 space-y-8">
          <p className="text-lg text-pm-main">안녕하세요</p>
          <span className="text-3xl font-semibold">이름 </span>
          <span className="text-lg text-pm-main">님!</span>
          <p className="text-lg text-gray-500">아이디</p>
          <div className="flex">
            <HeartIcon alt="heart" className="m-1 h-5 w-5" />
            <span className=" text-2xl">멍멍</span>
            <span className="ml-1 text-lg text-pm-main">
              이와 함께한지 500일!
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="pb-4 text-2xl font-bold">작성 게시물</div>
        <table className="table-fixed border-separate space-y-4 border bg-white p-4 shadow-md">
          <caption className="mb-4 caption-top text-sm text-gray-600">
            최근 3개월 이내 게시 내역을 조회합니다.
          </caption>
          <thead className="border-1">
            <tr className="border-1">
              <th>제목</th>
              <th>게시 날짜</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            <tr className="hover:text-pm-main">
              <td className="truncate pl-2">
                반려견이 사료를 안 먹고 간식만 먹어요ㅜㅜ
              </td>
              <td>2023/7/12</td>
            </tr>
            <tr className="hover:text-pm-main">
              <td>저희집에 새로운 가족이 찾아왔어요!</td>
              <td>2023/5/10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col">
        <div className="pb-4 text-2xl font-bold">분양내역</div>
        <table className="table-fixed border-separate space-y-4 border bg-white p-4 shadow-md">
          <caption className="mb-4 caption-top text-sm text-gray-600">
            최근 6개월 이내 분양 내역을 조회합니다.
          </caption>
          <thead>
            <tr>
              <th>동물 분류</th>
              <th>품종</th>
              <th>분양 날짜</th>
              <th>유형</th>
              <th>계약서</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>개</td>
              <td>웰시코기</td>
              <td>2023/5/6</td>
              <td>입양자</td>
              <td>
                <button
                  className="h-8 w-12 rounded-lg text-base text-pm-main hover:underline"
                  type="button"
                  onClick={onClickContract}
                >
                  보기
                </button>
              </td>
            </tr>
            <tr>
              <td>햄스터</td>
              <td>골든햄스터</td>
              <td>2023/8/15</td>
              <td>분양자</td>
              <td>
                <button
                  className="h-8 w-12 rounded-lg text-base text-pm-main hover:underline"
                  type="button"
                  onClick={onClickContract}
                >
                  보기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
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

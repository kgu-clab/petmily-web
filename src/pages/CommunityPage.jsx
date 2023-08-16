import ThemeCard from '@components/ui/ThemeCard';
import { UserGroupIcon } from '@heroicons/react/24/outline';
import { Breadcrumbs } from '@material-tailwind/react';

const popularPostInfomation = [
  {
    sort: '잡담',
    title: '강아지가 산책을 너무 좋아해요',
    date: '2023/5/6',
    click: '21',
  },
  {
    sort: '질문',
    title: '츄르 많이줘도 될까요',
    date: '2023/6/6',
    click: '23',
  },
  {
    sort: '질문',
    title: '반려견이 어제부터 재채기를 해요',
    date: '2023/5/6',
    click: '21',
  },
];

const postInfomation = [
  {
    sort: '잡담',
    title: '안녕하세요',
    date: '2023/8/15',
    click: '1',
  },
  {
    sort: '질문',
    title: '강아지가 밥을 안먹어요',
    date: '2023/8/15',
    click: '6',
  },
  {
    sort: '인증',
    title: '애기 데려온지 한달',
    date: '2023/8/15',
    click: '16',
  },
  {
    sort: '잡담',
    title: '사료 추천해요',
    date: '2023/8/15',
    click: '8',
  },
  {
    sort: '질문',
    title: '광교 근처 애견카페 있나요',
    date: '2023/8/14',
    click: '3',
  },
];

const CommunityPage = () => {
  return (
    <div>
      <div className="my-10 flex flex-col space-y-12">
        {/* 인증 게시글 */}
        <p className="text-center text-2xl font-extrabold">인증 게시판</p>
        <div className="grid grid-cols-3 gap-2">
          <ThemeCard
            title="라이언"
            image="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
            name="라이언"
            sub="2023/8/15"
            to="/postDetail"
          />
          <ThemeCard
            title="무지"
            image="https://images.unsplash.com/photo-1578764843877-f0f292ea5b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            sub="2023/8/3"
            to="/postDetail"
          />
          <ThemeCard
            title="콘"
            image="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            sub="2023/8/1"
            to="/postDetail"
          />
        </div>

        <hr />

        {/* 인기글 리스트 */}
        <div>
          <p className="mb-4 text-center text-2xl font-extrabold">인기글</p>
          <table className="w-full table-fixed border-separate ">
            <thead>
              <tr>
                <th className="w-[30px] border-b border-gray-400">분류</th>
                <th className="w-[200px] border-b border-gray-400">제목</th>
                <th className="w-[80px] border-b border-gray-400">날짜</th>
                <th className="w-[30px] border-b border-gray-400">조회수</th>
              </tr>
            </thead>
            <tbody>
              {popularPostInfomation.map(({ sort, title, date, click }) => {
                return (
                  <tr key={title} className="hover:text-pm-main">
                    <td className="border-b border-gray-400 text-center text-gray-500">
                      {sort}
                    </td>
                    <td className="truncate border-b border-gray-400 font-semibold hover:underline">
                      {title}
                    </td>
                    <td className="border-b border-gray-400 text-center text-gray-500">
                      {date}
                    </td>
                    <td className="border-b border-gray-400 text-center text-gray-500">
                      {click}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <hr />

        {/* 전체글 리스트 */}
        <div>
          <p className="mb-4 text-center text-2xl font-extrabold">전체글</p>
          <table className=" w-full table-fixed border-separate">
            <thead>
              <tr>
                <th className="w-[30px] border-b border-gray-400">분류</th>
                <th className="w-[200px] border-b border-gray-400">제목</th>
                <th className="w-[80px] border-b border-gray-400">날짜</th>
                <th className="w-[30px] border-b border-gray-400">조회수</th>
              </tr>
            </thead>
            <tbody>
              {postInfomation.map(({ sort, title, date, click }) => {
                return (
                  <tr key={title} className=" hover:text-pm-main">
                    <td className="border-b border-gray-400 text-center text-gray-500">
                      {sort}
                    </td>
                    <td className="truncate border-b border-gray-400 hover:font-bold hover:underline">
                      {title}
                    </td>
                    <td className="border-b border-gray-400 text-center text-gray-500">
                      {date}
                    </td>
                    <td className="border-b border-gray-400 text-center text-gray-500">
                      {click}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;

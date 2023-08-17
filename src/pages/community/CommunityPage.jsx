import ThemeCard from '@components/ui/ThemeCard';
import { UserGroupIcon } from '@heroicons/react/24/outline';

const CommunityPage = () => {
  return (
    <div>
      <div className="flex flex-col space-y-8 p-2">
        <div className="flex">
          <UserGroupIcon alt="community" className="h-10 w-10" />
          <div className="ml-2 p-1 text-4xl font-bold">커뮤니티</div>
        </div>

        {/* 인증 게시글 */}
        <p className="text-center text-xl font-extrabold">인증 게시판</p>
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
          <p className="mb-4 text-center text-xl font-extrabold">인기글</p>
          <table className="w-full table-fixed border-separate ">
            <thead>
              <tr>
                <th className="w-[30px] border-b border-gray-400">분류</th>
                <th className="w-[200px] border-b border-gray-400">제목</th>
                <th className="w-[80px] border-b border-gray-400">날짜</th>
                <th className="w-[30px] border-b border-gray-400">조회수</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>

        <hr />

        {/* 전체글 리스트 */}
        <div>
          <p className="mb-4 text-center text-xl font-extrabold">전체글</p>
          <table className=" w-full table-fixed border-separate">
            <thead>
              <tr>
                <th className="w-[30px] border-b border-gray-400">분류</th>
                <th className="w-[200px] border-b border-gray-400">제목</th>
                <th className="w-[80px] border-b border-gray-400">날짜</th>
                <th className="w-[30px] border-b border-gray-400">조회수</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;

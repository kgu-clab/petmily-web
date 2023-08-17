import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMyBoard } from '@common/api';
import Titlebar from '@components/ui/Titlebar';
import Table from '@components/ui/Table';

const MypageSalesInfo = () => {
  const { data, isSuccess } = useQuery('mySales', getMyBoard);

  if (isSuccess)
    return (
      <div className="flex flex-col gap-10">
        <div>
          <Titlebar
            title="등록 내역"
            sub="반려동물 분양 등록한 내역을 조회합니다."
          />

          <Table
            className="mt-4"
            headers={['품종', '이름', '분양요청인원', '등록일', '기능']}
          >
            {data.map((animal) => (
              <tr key={animal.id} className="hover:bg-gray-100">
                <td className="p-2">{animal.species}</td>
                <td>{animal.name}</td>
                <td>{animal.requestUser.length}</td>
                <td>{animal.createdAt}</td>
                <td>
                  <Link
                    to={`/sales/${animal.id}`}
                    className="text-pm-main hover:underline"
                  >
                    선택
                  </Link>
                </td>
              </tr>
            ))}
          </Table>
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
      </div>
    );
};

MypageSalesInfo.propTypes = {};

export default MypageSalesInfo;

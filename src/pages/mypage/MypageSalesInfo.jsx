import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getMyBoard, getMyRequests } from '@common/api';
import Titlebar from '@components/ui/Titlebar';
import Table from '@components/ui/Table';

const MypageSalesInfo = () => {
  const mySales = useQuery('mySales', getMyBoard);
  const myRequests = useQuery('myRequest', getMyRequests);

  const stateButton = (state, contract, reqId, boardId) => {
    const typeMap = {
      WAIT: <button className="text-amber-500">대기</button>,
      CANCEL: <button className="text-pm-red">거절</button>,
      APPROVE:
        contract === null ? (
          <Link to={`/contract/${reqId}/${boardId}`} className="text-pm-main">
            계약서 작성
          </Link>
        ) : (
          <Link to={`/contract/${reqId}/${boardId}`} className="text-pm-main">
            계약서 보기
          </Link>
        ),
    }[state];

    return typeMap;
  };

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Titlebar
          title="분양 등록"
          sub="반려동물 분양을 등록한 내역을 조회합니다."
        />

        <Table
          className="mt-4 text-center"
          headers={['품종', '이름', '분양요청인원', '상태', '등록일', '기능']}
        >
          {mySales.isSuccess &&
            mySales.data.map((animal) => (
              <tr key={animal.id} className="hover:bg-gray-100">
                <td className="p-2">{animal.species}</td>
                <td>{animal.name}</td>
                <td>{animal.adoptionRequests.length}</td>
                <td>{animal.animalState}</td>
                <td>{animal.createdAt}</td>
                <td>
                  <Link
                    to={`/animal/sale/${animal.id}`}
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
          title="분양 신청"
          sub="반려동물 분양 요청 내역을 조회합니다."
        />

        <Table className="mt-4" headers={['품종', '분양자', '요청일', '상태']}>
          {myRequests.isSuccess &&
            myRequests.data.map((request) => (
              <tr
                key={request.animalAdoptionBoard.id}
                className="hover:bg-gray-100"
              >
                <td>
                  <div className="flex items-center gap-2 p-2">
                    <img
                      src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
                      alt="image"
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <p>{request.animalAdoptionBoard.species} </p>
                  </div>
                </td>
                <td>{request.animalAdoptionBoard.writer.nickname} </td>
                <td>{request.animalAdoptionBoard.createdAt} </td>
                <td>
                  {stateButton(
                    request.requestState,
                    request.contracts,
                    request.id,
                    request.animalAdoptionBoard.id,
                  )}
                </td>
              </tr>
            ))}
        </Table>
      </div>
    </div>
  );
};

MypageSalesInfo.propTypes = {};

export default MypageSalesInfo;

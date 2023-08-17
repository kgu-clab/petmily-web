import PropTypes from 'prop-types';
import { Breadcrumbs } from '@material-tailwind/react';
import { Link, useParams } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import {
  getAdoptionBoardsInfo,
  postAdoptionRequestsApprove,
} from '@common/api';
import Table from '@components/ui/Table';
import { formatUserType } from '@common/utils';
import { SERVER_IMG } from '@common/environment';
import { Alert, SuccessAlert } from '@common/alert';

const LabelBar = ({ label, value }) => {
  return (
    <div>
      <span className="text-sm text-gray-600">{label}</span>
      <h1 className="text-xl font-semibold">{value}</h1>
    </div>
  );
};

LabelBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

const AnimalSalePage = () => {
  const { id } = useParams();
  const { data, isSuccess } = useQuery('animalSale', () =>
    getAdoptionBoardsInfo(id),
  );

  const approveMutate = useMutation(postAdoptionRequestsApprove);

  const onClickSelect = (name, seq) => {
    Alert({
      icon: 'info',
      title: '분양자',
      html: `<b>${name}</b>님을 해당 반려동물의 분양자로 선택하며,<br />계약을 체결하겠습니까?`,
    }).then((result) => {
      if (result.isConfirmed) {
        approveMutate.mutate(seq);
        SuccessAlert({
          title: '분양자',
          text: '해당 분양자에게 분양요청을 보냈습니다.',
        });
      }
    });
  };

  if (isSuccess)
    return (
      <div>
        <Breadcrumbs
          fullWidth
          className="h-10 whitespace-nowrap rounded-lg bg-gray-300"
        >
          <Link to="/">분양</Link>
          <p className="font-semibold">요청자</p>
        </Breadcrumbs>

        <div className="mt-10 flex gap-4 rounded-lg bg-white p-4">
          <img
            src={SERVER_IMG(JSON.parse(data.imgUrl)[0])}
            alt="animal"
            className="w-60 rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <LabelBar label="품종" value={data.species} />
            <LabelBar label="이름" value={data.name} />
            <LabelBar label="색상" value={data.color} />
            <LabelBar label="성별" value={data.gender} />
          </div>
        </div>

        <Table
          className="mt-4 text-center"
          headers={['이름', '거주지', '이메일', '구분', '적합도 점수', '기능']}
        >
          {data.adoptionRequests.map((request) => (
            <tr key={request.user.seq}>
              <td className="p-2">{request.user.nickname}</td>
              <td className="p-2">{request.user.address}</td>
              <td className="p-2">{request.user.email}</td>
              <td className="p-2">{formatUserType(request.user.type)}</td>
              <td className="p-2">{0}</td>
              <td>
                <button
                  className="text-xs hover:underline"
                  onClick={() =>
                    onClickSelect(request.user.nickname, request.id)
                  }
                >
                  선택
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>
    );
};

AnimalSalePage.propTypes = {};

export default AnimalSalePage;

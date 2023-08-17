import { getLogInfo, getUserList, postLoginCheck } from '@common/api';
import FunctionButton from '@components/ui/FunctionButton';
import Table from '@components/ui/Table';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { formatUserType } from '@common/utils';
import dayjs from 'dayjs';
import { InputAlert } from '@common/alert';
import server from '@common/server';

const AdminPage = () => {
  const token = sessionStorage.getItem('access');
  const navigate = useNavigate();

  const [uptime, setUptime] = useState(dayjs());

  const logInfo = useQuery('logInfo', getLogInfo, {
    onSuccess: () => {
      setUptime(dayjs());
    },
  });
  const userList = useQuery('userList', getUserList);

  const onClickSMS = async (phone) => {
    const content = await InputAlert({
      title: '문자 전송',
      text: '내용을 입력해주세요.',
    });

    await server.post('/sms/send', {
      recipientPhoneNumber: phone,
      content,
    });
  };

  useEffect(() => {
    const checkToken = async () => {
      const result = await postLoginCheck(token);
      if (!token || !result) {
        navigate('/');
      }
    };

    checkToken();
  }, [navigate, token]);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-extrabold">관리자 페이지</h1>
        <h2 className="text-sm font-semibold text-gray-500">
          UPTIME: {uptime.format('YY-MM-DD HH:mm:ss')}
        </h2>
      </div>

      {/* 회원 로그 관리 */}
      <div>
        <h2 className="text-xl font-bold">로그</h2>
        <span className="text-sm font-light">
          실시간으로 관리가 필요한 로그에 대해 조회합니다.
        </span>

        <div className="max-h-96 overflow-auto rounded-lg">
          <Table
            className="mt-4 text-center"
            headers={['위험도', '종류', '분류', '아이디', ' IP', '시간']}
          >
            {logInfo.isSuccess &&
              logInfo?.data?.map((log) => (
                <tr key={log.createdAt}>
                  <td className="p-2">{log.danger?.toUpperCase()}</td>
                  <td>{log.logType}</td>
                  <td>{formatUserType(log.userType)}</td>
                  <td>{log.id}</td>
                  <td>{log.ip}</td>
                  <td>{dayjs(log.createdAt).format('YY-MM-DD HH:mm:ss')}</td>
                </tr>
              ))}
          </Table>
        </div>
      </div>

      <div className="space-y-12">
        {/* 회원관리 */}
        <div>
          <h2 className="text-xl font-bold">회원</h2>
          <span className="text-sm font-light">
            가입된 개인회원을 조회하고 관리합니다.
          </span>

          <div className="max-h-96 overflow-auto rounded-lg">
            <Table
              className="mt-4 text-center"
              headers={['아이디', '이름', '이메일', '가입일', '기능']}
            >
              {userList.isSuccess &&
                userList?.data?.map((user) => (
                  <tr key={user.id}>
                    <td className="p-2">{user.id}</td>
                    <td>{user.nickname}</td>
                    <td>{user.email}</td>
                    <td>{dayjs(user.createdAt).format('YY-MM-DD')}</td>
                    <td>
                      <FunctionButton
                        className="hover:text-pm-main"
                        label="문자"
                        onClick={() => onClickSMS(user.contact)}
                      />
                    </td>
                  </tr>
                ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

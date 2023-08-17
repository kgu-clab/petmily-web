import Table from '@components/ui/Table';

const AdminPage = () => {
  const onClickApprove = () => {
    alert('승인되었습니다.');
  };
  const onClickRefuse = () => {
    alert('거절되었습니다.');
  };
  const onClickSend = () => {
    prompt('내용을 입력해주세요', '');
  };

  return (
    <div className="m-4 space-y-8">
      <h1 className="text-3xl font-extrabold">관리자 페이지</h1>
      <div className="space-y-12">
        {/* 회원관리 */}
        <div>
          <span className="text-lg font-bold">회원 관리</span>
          <Table
            className="mt-4 text-center"
            headers={['아이디', '닉네임', '회원탈퇴', '메일발송', '문자발송']}
          >
            <tr>
              <td>id</td>
              <td>한관희전문분양</td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickApprove}
                >
                  승인
                </button>
              </td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickSend}
                >
                  승인
                </button>
              </td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickSend}
                >
                  승인
                </button>
              </td>
            </tr>
            <tr>
              <td>id</td>
              <td>한관희전문분양</td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickApprove}
                >
                  승인
                </button>
              </td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickSend}
                >
                  승인
                </button>
              </td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickSend}
                >
                  승인
                </button>
              </td>
            </tr>
            <tr>
              <td>id</td>
              <td>한관희전문분양</td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickApprove}
                >
                  승인
                </button>
              </td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickSend}
                >
                  승인
                </button>
              </td>
              <td>
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickSend}
                >
                  승인
                </button>
              </td>
            </tr>
          </Table>
        </div>

        <hr className="h-1 bg-gray-400" />

        {/* 회원 승인 관리 */}
        <div>
          <span className="text-lg font-bold">승인 관리</span>
          <Table
            className="mt-4 text-center"
            headers={['아이디', '닉네임', '회원 분류', '승인']}
          >
            <tr>
              <td>id</td>
              <td>한관희전문분양</td>
              <td>전문 업체</td>
              <td className="space-x-1">
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickApprove}
                >
                  승인
                </button>
                <button
                  className="rounded-md bg-red-400 p-1 text-white hover:bg-red-600"
                  onClick={onClickRefuse}
                >
                  거절
                </button>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>id</td>
              <td>김정은보호소</td>
              <td>보호소</td>
              <td className="space-x-1">
                <button
                  className="rounded-md bg-pm-main p-1 text-white hover:bg-blue-700"
                  onClick={onClickApprove}
                >
                  승인
                </button>
                <button
                  className="rounded-md bg-red-400 p-1 text-white hover:bg-red-600"
                  onClick={onClickRefuse}
                >
                  거절
                </button>
              </td>
            </tr>
          </Table>
        </div>

        <hr className="h-1 bg-gray-400" />

        {/* 회원 로그 관리 */}
        <div>
          <span className="text-lg font-bold">로그 관리</span>
          <Table
            className="mt-4 text-center"
            headers={[
              '아이디',
              '닉네임',
              '회원분류',
              '로그시간',
              '접속 ip',
              '위험도',
            ]}
          >
            <tr>
              <td>id</td>
              <td>한관희전문분양</td>
              <td>전문업체</td>
              <td>2023-8-16 18:23:04</td>
              <td>ip</td>
              <td>높음</td>
            </tr>
            <tr>
              <td>id</td>
              <td>이석현전문분양</td>
              <td>전문업체</td>
              <td>2023-8-16 18:23:04</td>
              <td>ip</td>
              <td>높음</td>
            </tr>
            <tr>
              <td>id</td>
              <td>김관식</td>
              <td>개인</td>
              <td>2023-8-16 18:23:04</td>
              <td>ip</td>
              <td>높음</td>
            </tr>
            <tr>
              <td>id</td>
              <td>김정은보호소</td>
              <td>보호소</td>
              <td>2023-8-16 18:23:04</td>
              <td>ip</td>
              <td>높음</td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

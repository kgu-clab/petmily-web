import Titlebar from '@components/ui/Titlebar';
import { Button } from '@material-tailwind/react';
import { Switch } from '@material-tailwind/react';
import { useState } from 'react';

export function SwitchDefault() {
  return <Switch />;
}

const MypageSetup = () => {
  const [fromData, setFromData] = useState({
    id: '',
    email: '',
    number: '',
  });
  const onChange = (e) => {
    const { value, name } = e.target;

    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onClick = () => {
    alert('수정되었습니다.');
  };

  return (
    <div className="m-4 space-y-6">
      <Titlebar title="수정" sub="회원 정보를 수정합니다." />
      <hr />
      <div className="space-y-4 ">
        <div className="flex ">
          <p className="w-16">이름</p>
          <input
            className="rounded-lg border p-1 font-normal "
            type="text"
            id="id"
            name="id"
            value={fromData.id}
            onChange={onChange}
            placeholder="아이디 변경"
          />{' '}
          <Button className="color-pm-main" onClick={onClick}>
            확인
          </Button>
        </div>
        <div className="flex">
          <p className="w-16">이메일</p>
          <input
            className="rounded-lg border p-1 font-normal "
            type="text"
            id="email"
            name="email"
            value={fromData.email}
            onChange={onChange}
            placeholder="이메일 변경"
          />{' '}
          <Button className="color-pm-main" onClick={onClick}>
            확인
          </Button>
        </div>
        <div className="flex">
          <p className="w-16">전화번호</p>
          <input
            className="rounded-lg border p-1 font-normal "
            type="text"
            id="number"
            name="number"
            value={fromData.number}
            onChange={onChange}
            placeholder="전화번호 변경"
          />{' '}
          <Button className="color-pm-main" onClick={onClick}>
            확인
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex gap-4">
          <p>메일 알림 거절</p>
          <SwitchDefault />
        </div>
        <div className="flex gap-4">
          <p>뉴스 레터</p>
          <SwitchDefault />
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <Button color="amber">저장</Button>

        <Button color="red">로그아웃</Button>
      </div>
    </div>
  );
};

MypageSetup.propTypes = {};

export default MypageSetup;

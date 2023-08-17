import Titlebar from '@components/ui/Titlebar';
import { Button } from '@material-tailwind/react';

const MypageSetup = () => {
  return (
    <div>
      <Titlebar title="수정" sub="회원 정보를 수정합니다." />

      <div className="mt-4">
        <p>메일 알림 거절</p>
        <p>뉴스 레터</p>
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

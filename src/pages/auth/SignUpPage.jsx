import { useState } from 'react';
import {
  HomeModernIcon,
  BuildingOffice2Icon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import {
  postSendVerificationCode,
  postUsers,
  postVerificationCode,
} from '@common/api';
import { SuccessAlert } from '@common/alert';
import { Button } from '@material-tailwind/react';
import { formatPhone } from '@common/utils';

const SignUpPage = () => {
  const navigate = useNavigate();

  const { mutate } = useMutation(postUsers, {
    onSuccess: () => {
      SuccessAlert({
        icon: 'success',
        title: '회원가입',
        text: '팻밀리에 가입을 환영합니다!',
      }).then(() => navigate('/login'));
    },
    onError: () => {},
  });

  const sendContactMutation = useMutation(postSendVerificationCode, {
    onSuccess: () => {
      setVerifyState('SEND');
    },
  });

  const verifyContactMutation = useMutation(postVerificationCode, {
    onSuccess: () => {
      setVerifyState('DONE');
    },
  });

  const [type, setType] = useState('INDIVIDUAL');
  const [verifyState, setVerifyState] = useState('NONE');
  const [fromData, setFromData] = useState({
    id: '',
    nickname: '',
    email: '',
    address: '',
    contact: '',
    businessNumber: '',
    verificationCode: '',
  });

  const onClickSignUp = () => {
    if (verifyState === 'DONE') {
      mutate({
        id: fromData.id,
        password: fromData.password,
        nickname: fromData.nickname,
        email: fromData.email,
        address: fromData.address,
        contact: fromData.contact,
        businessNumber: fromData.businessNumber,
        type,
      });
    } else {
      console.log('전화번호 인증하세요.');
    }
  };

  const onClickSendContact = () => {
    sendContactMutation.mutate({
      recipientPhoneNumber: fromData.contact,
    });
  };

  const onClickVerifyContact = () => {
    verifyContactMutation.mutate({
      recipientPhoneNumber: fromData.contact,
      verificationCode: fromData.verificationCode,
    });
  };

  const onChange = (e) => {
    const { value, name } = e.target;

    setFromData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onChangeContact = (e) => {
    const { value } = e.target;

    setFromData((prev) => ({
      ...prev,
      contact: formatPhone(value),
    }));
  };

  return (
    <div className="mx-auto my-2 flex h-fit w-fit flex-col bg-white p-10">
      {/* 로고 이미지 추가 */}
      <img src="/logo.svg" className="mx-auto flex h-10 w-10" />
      <h1 className="mb-8 mt-2 text-center text-2xl font-bold">회원가입</h1>

      <hr />

      <form className="my-10 flex flex-col space-y-5">
        {/* 회원분류선택 */}
        <div className="mx-auto my-4 flex items-center space-x-8">
          {/* 개인회원 */}
          <div
            className={`h-24 w-24 cursor-pointer rounded-lg border p-2 ${
              type === 'INDIVIDUAL' ? 'border-pm-main' : ''
            }`}
            onClick={() => setType('INDIVIDUAL')}
          >
            <div className="flex flex-col items-center">
              <UserIcon alt="user" className="mb-2 h-12 w-12" />
              <span className="text-sm font-bold">개인 회원</span>
            </div>
          </div>

          {/* 전문업체 */}
          <div
            className={`h-24 w-24 cursor-pointer rounded-lg border p-2 ${
              type === 'PROFESSIONAL' ? 'border-pm-main' : ''
            }`}
            onClick={() => setType('PROFESSIONAL')}
          >
            <div className="flex flex-col items-center">
              <BuildingOffice2Icon alt="company" className="mb-2 h-12 w-12" />
              <span className="text-sm font-bold">전문업체</span>
            </div>
          </div>

          {/* 보호소 */}
          <div
            className={`h-24 w-24 cursor-pointer rounded-lg border p-2 ${
              type === 'SHELTER' ? 'border-pm-main' : ''
            }`}
            onClick={() => setType('SHELTER')}
          >
            <div className="flex flex-col items-center">
              <HomeModernIcon alt="shelter" className="mb-2 h-12 w-12" />
              <span className="text-sm font-bold">보호소</span>
            </div>
          </div>
        </div>

        {/* 아이디 입력 */}
        <div className="flex flex-row items-center">
          <div className="mr-3 w-20 text-sm font-bold">아이디</div>
          <input
            className="flex-grow rounded-lg border p-3"
            type="text"
            id="id"
            name="id"
            value={fromData.id}
            onChange={onChange}
            placeholder="아이디를 입력해주세요."
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="flex flex-row items-center">
          <div className="mr-3 w-20 text-sm font-bold">비밀번호</div>
          <input
            className="flex-grow rounded-lg border p-3"
            type="password"
            id="password"
            name="password"
            value={FormData.password}
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요."
          />
        </div>

        {/* 비밀번호 확인 */}
        <div className="flex flex-row items-center">
          <div className="mr-3 w-20 text-sm font-bold">비밀번호 확인</div>
          <input
            className="flex-grow rounded-lg border p-3"
            type="password"
            id="passwordCheck"
            name="passwordConfirm"
            placeholder="비밀번호를 확인해주세요."
          />
        </div>

        {/* 전문업체 선택 시 등록번호 입력 */}
        {type === 'PROFESSIONAL' && (
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center">
              <div className="mr-3 w-20 text-sm font-bold">등록번호</div>
              <input
                className="flex-grow rounded-lg border p-3"
                type="text"
                id="businessNumber"
                name="businessNumber"
                value={FormData.businessNumber}
                onChange={onChange}
                placeholder="업체등록번호를 입력해주세요."
              />
            </div>
          </div>
        )}

        {/* 전문업체나 보호소 선택 시 소재지 입력 */}
        {(type === 'PROFESSIONAL' || type === 'SHELTER') && (
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center">
              <div className="mr-3 w-20 text-sm font-bold">소재지</div>
              <input
                className="flex-grow rounded-lg border p-3"
                type="text"
                id="address"
                name="address"
                value={fromData.address}
                onChange={onChange}
                placeholder="소재지를 입력해주세요."
              />
            </div>
          </div>
        )}

        {/* 이름 입력 */}
        <div className="flex flex-row items-center">
          <div className="mr-3 w-20 text-sm font-bold">이름</div>
          <input
            className="flex-grow rounded-lg border p-3"
            type="text"
            id="nickname"
            name="nickname"
            value={fromData.nickname}
            onChange={onChange}
            placeholder="이름을 입력해주세요."
          />
        </div>

        {/* 전화번호 입력 */}
        <div className="flex flex-row items-center">
          <div className="mr-3 w-20 text-sm font-bold">전화번호</div>

          <div className="flex flex-grow gap-2">
            <input
              className="w-52 rounded-lg border p-3"
              type="text"
              id="contact"
              name="contact"
              value={fromData.contact}
              onChange={onChangeContact}
              placeholder="전화번호를 입력해주세요."
            />

            <Button onClick={onClickSendContact}>인증번호 전송</Button>
          </div>
        </div>

        {/* 인증번호 입력 */}
        {verifyState === 'SEND' && (
          <div className="flex flex-row items-center">
            <div className="mr-3 w-20 text-sm font-bold">인증번호</div>

            <div className="flex flex-grow gap-2">
              <input
                className="flex-grow rounded-lg border p-3"
                type="text"
                id="verificationCode"
                name="verificationCode"
                placeholder="인증번호를 입력해주세요."
                onChange={onChange}
              />

              <Button onClick={onClickVerifyContact}>확인</Button>
            </div>
          </div>
        )}
      </form>

      {type === 'INDIVIDUAL' && (
        <button
          className="mb-12 rounded-md bg-pm-main p-3 text-white hover:bg-blue-700"
          type="button"
        >
          설문 조사하기
        </button>
      )}

      <hr />

      {/* 이용약관 */}
      <div className="my-10 flex flex-row items-start">
        <div className="mr-3 w-20 text-sm font-bold">이용약관</div>
        <div className="h-36 flex-grow overflow-auto rounded-lg border p-3">
          <textarea
            className="h-full w-full resize-none border-none text-xs focus:outline-none"
            id="terms"
            name="terms"
            readOnly={true}
          />
        </div>
      </div>

      {/* 이용약관 동의 */}
      <div className="flex items-center ">
        <input
          type="checkbox"
          className="mr-2 h-5 w-5 rounded border-gray-300 focus:border-pm-main focus:ring-pm-main"
          id="agreeToTerms"
        />
        <label
          htmlFor="agreeToTerms"
          className="text-sm font-normal text-gray-800"
        >
          이용약관에 전체동의합니다
        </label>
      </div>
      <button
        className="mt-8 rounded-md bg-pm-main p-3 text-white hover:bg-blue-700"
        type="button"
        onClick={onClickSignUp}
      >
        가입하기
      </button>
    </div>
  );
};

export default SignUpPage;

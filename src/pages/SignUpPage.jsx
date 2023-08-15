import { useState } from 'react';
import {
  HomeModernIcon,
  BuildingOffice2Icon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { Navigate } from 'react-router-dom';

const SignUpPage = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedIcon, setSelectedIcon] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [addressNumber, setAddressNumber] = useState('');
  const [shelterName, setShelterName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [sendMessage, setSendMessage] = useState('');
  const [verificationNumber, setVerificationNumber] = useState('');
  const [terms, setTerms] = useState('');

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
    setSendMessage(false);

    if (iconName === 'company') {
      setRegistrationNumber('');
    }
    if (iconName === 'company') {
      setAddressNumber('');
    }
  };

  const onChangeId = (e) => {
    const inputValue = e.target.value;
    setId(inputValue);

    const regex = /^[A-Za-z0-9]+$/;
    if (!regex.test(inputValue)) {
      setErrorMessage('영어와 숫자만 입력 가능합니다.');
    } else {
      setErrorMessage('');
    }
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeCheckPassword = (e) => {
    setPasswordCheck(e.target.value);
  };

  const onChangeRegistrationNumber = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const onChangeAddressNumber = (e) => {
    setAddressNumber(e.target.value);
  };

  const onChangeShelterName = (e) => {
    setShelterName(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    const inputPhoneNumber = e.target.value;
    const cleanedPhoneNumber = inputPhoneNumber.replace(/\D/g, '');

    setPhoneNumber(cleanedPhoneNumber);
  };

  const onChangeVerificationNumber = (e) => {
    setVerificationNumber(e.target.value);
  };

  const handleUserVerification = () => {
    setSendMessage(true);
  };

  return (
    <div className="mx-auto my-20 flex h-fit w-fit flex-col bg-white p-10">
      <h1 className="my-10 text-center text-2xl font-bold">회원가입</h1>

      <hr />

      <form className="my-10 flex flex-col space-y-5">
        {/* 회원분류선택 */}
        <div className="mx-auto my-4 flex items-center space-x-8">
          {/* 개인회원 */}
          <div
            className={`h-24 w-24 cursor-pointer rounded-lg border p-2 ${
              selectedIcon === 'user' && 'border-blue-500'
            }`}
            onClick={() => handleIconClick('user')}
          >
            <div className="flex flex-col items-center">
              <UserIcon alt="user" className="mb-2 h-12 w-12" />
              <span className="text-sm font-bold">개인 회원</span>
            </div>
          </div>

          {/* 전문업체 */}
          <div
            className={`h-24 w-24 cursor-pointer rounded-lg border p-2 ${
              selectedIcon === 'company' && 'border-blue-500'
            }`}
            onClick={() => handleIconClick('company')}
          >
            <div className="flex flex-col items-center">
              <BuildingOffice2Icon alt="company" className="mb-2 h-12 w-12" />
              <span className="text-sm font-bold">전문업체</span>
            </div>
          </div>

          {/* 보호소 */}
          <div
            className={`h-24 w-24 cursor-pointer rounded-lg border p-2 ${
              selectedIcon === 'shelter' && 'border-blue-500'
            }`}
            onClick={() => handleIconClick('shelter')}
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
            value={id}
            onChange={onChangeId}
            placeholder="아이디를 입력해주세요."
          />
        </div>

        {/* 영어나 숫자 외의 문자 입력 시 오류 메세지 */}
        {errorMessage && (
          <p className="ml-24 text-sm text-red-500">{errorMessage}</p>
        )}

        {/* 비밀번호 입력 */}
        <div className="flex flex-row items-center">
          <div className="mr-3 w-20 text-sm font-bold">비밀번호</div>
          <input
            className="flex-grow rounded-lg border p-3"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
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
            value={passwordCheck}
            onChange={onChangeCheckPassword}
            placeholder="비밀번호를 확인해주세요."
          />
        </div>

        {/* 전문업체 선택 시 등록번호 입력 */}
        {selectedIcon === 'company' && (
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center">
              <div className="mr-3 w-20 text-sm font-bold">등록번호</div>
              <input
                className="flex-grow rounded-lg border p-3"
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={registrationNumber}
                onChange={onChangeRegistrationNumber}
                placeholder="업체등록번호를 입력해주세요."
              />
            </div>
          </div>
        )}

        {/* 보호소 선택 시 보호소 이름 입력 */}
        {selectedIcon === 'shelter' && (
          <div className="flex flex-row items-center">
            <div className="mr-3 w-20 text-sm font-bold">보호소명</div>
            <input
              className="flex-grow rounded-lg border p-3"
              type="text"
              id="shelterName"
              name="shelterName"
              value={shelterName}
              onChange={onChangeShelterName}
              placeholder="보호소명을 입력해주세요."
            />
          </div>
        )}

        {/* 전문업체나 보호소 선택 시 소재지 입력 */}
        {(selectedIcon === 'company' || selectedIcon === 'shelter') && (
          <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-center">
              <div className="mr-3 w-20 text-sm font-bold">소재지</div>
              <input
                className="flex-grow rounded-lg border p-3"
                type="text"
                id="addressNumber"
                name="addressNumber"
                value={addressNumber}
                onChange={onChangeAddressNumber}
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
            id="name"
            name="name"
            value={name}
            onChange={onChangeName}
            placeholder="이름을 입력해주세요."
          />
        </div>

        {/* 전화번호 입력 */}
        <div className="flex flex-row items-center">
          <div className="mr-3 w-20 text-sm font-bold">전화번호</div>
          <div className="flex flex-grow">
            <input
              className="w-52 rounded-lg border p-3"
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
              placeholder="전화번호를 입력해주세요."
            />

            {/* 인증번호 전송 버튼 */}
            <button
              className="ml-3 w-28 rounded-lg bg-pm-main text-base text-white hover:bg-blue-700"
              type="button"
              onClick={handleUserVerification}
            >
              인증번호전송
            </button>
          </div>
        </div>

        {/* 인증번호 입력 */}
        {sendMessage && (
          <div className="flex flex-row items-center">
            <div className="mr-3 w-20 text-sm font-bold">인증번호</div>
            <input
              className="flex-grow rounded-lg border p-3"
              type="text"
              id="verificationNumber"
              name="verificationNumber"
              value={verificationNumber}
              onChange={onChangeVerificationNumber}
              placeholder="인증번호를 입력해주세요."
            />
          </div>
        )}
      </form>

      {selectedIcon === 'user' && (
        <button
          className="mb-12 rounded-md bg-pm-main p-3 text-white hover:bg-blue-700"
          type="button"
          onClick={Navigate}
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
            value={terms}
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
        onClick={Navigate}
      >
        가입하기
      </button>
    </div>
  );
};

export default SignUpPage;

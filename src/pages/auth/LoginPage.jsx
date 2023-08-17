import { postLogin } from '@common/api';
import { useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate } = useMutation(postLogin, {
    onSuccess: (data) => {
      if (data) {
        sessionStorage.setItem('access', data.accessToken);
        sessionStorage.setItem('refresh', data.refreshToken);
        navigate('/');
      } else {
        setErrorMessage('아이디 또는 비밀번호를 확인 후 다시 입력해주세요.');
      }
    },
  });

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    mutate({
      id,
      password,
    });
  };

  return (
    <div className="mx-auto my-20 h-fit w-fit bg-white p-10">
      <form>
        {/* 로고 이미지 추가 */}
        <img src="/logo.svg" className="mx-auto flex h-10 w-10" />
        <h1 className="mb-6 mt-2 text-center text-2xl font-bold">팻밀리</h1>

        <div className="flex flex-col space-y-1">
          <input
            className="rounded-lg border p-3 font-normal "
            type="text"
            id="username"
            name="username"
            value={id}
            onChange={onChangeId}
            placeholder="아이디"
          />
          <input
            className="rounded-lg border p-3 font-normal"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            placeholder="비밀번호"
          />
        </div>

        {errorMessage && (
          <p className="mt-5 text-center text-sm text-red-500">
            {errorMessage}
          </p>
        )}

        <div className="flex flex-col">
          <button
            className="my-6 h-10 rounded-lg bg-pm-main text-base text-white hover:bg-blue-700"
            type="button"
            onClick={onClickLogin}
          >
            로그인
          </button>

          <hr />

          <p className="my-5 text-center text-sm font-light">
            팻밀리가 처음이신가요?
          </p>

          <button
            className="h-10 w-80 rounded-lg bg-gray-400 text-base text-white hover:bg-gray-500"
            type="button"
            onClick={() => navigate('/signup')}
          >
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

import { SuccessAlert } from '@common/alert';
import server from '@common/server';
import { Button, Radio } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RadioDefault = ({ options, id, selectedValue, onOptionChange }) => {
  return (
    <div className="flex gap-4">
      {options.map((option, index) => (
        <Radio
          key={index}
          name={id}
          label={option}
          checked={selectedValue === option}
          onChange={() => onOptionChange(id, option)}
        />
      ))}
    </div>
  );
};

RadioDefault.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  onOptionChange: PropTypes.func.isRequired,
};

const SatisfactionPage = () => {
  const navigate = useNavigate();

  const [selectedValues, setSelectedValues] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
  });

  const [text, setText] = useState('');

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [questionId]: selectedOption,
    }));
  };

  const postSatisfaction = async () => {
    const res = await server.post('/satisfaction', {
      q1: selectedValues[0],
      q2: selectedValues[1],
      q3: selectedValues[2],
      q4: selectedValues[3],
      q5: selectedValues[4],
      q6: selectedValues[5],
      q7: text,
    });

    if (res.data.success) {
      SuccessAlert({
        title: '만족도 조사',
        text: '응답에 감사드립니다.',
      }).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <div className="mx-auto my-20 flex h-fit w-fit flex-col space-y-8 bg-white p-10">
      <h1 className="text-center text-4xl font-extrabold">만족도 조사</h1>

      <div className="mx-8 flex flex-col space-y-6">
        <ul className="list-disc space-y-4">
          <li>입양/분양 과정은 어떠셨나요?</li>
          <RadioDefault
            options={['만족', '보통', '불만족']}
            id="0"
            selectedValue={selectedValues['0']}
            onOptionChange={handleOptionChange}
          />
        </ul>

        <ul className="list-disc space-y-4">
          <li>입양/분양 과정에서 가장 만족스러웠던 사항은 무엇인가요?</li>
          <RadioDefault
            options={['계약서', '상세 프로필', '신뢰성']}
            id="1"
            selectedValue={selectedValues['1']}
            onOptionChange={handleOptionChange}
          />
        </ul>

        <ul className="list-disc space-y-4">
          <li>사이트에서 제공되는 가이드의 내용은 어떠셨나요?</li>
          <RadioDefault
            options={['도움된다', '보통이다', '도움되지 않는다']}
            id="2"
            selectedValue={selectedValues['2']}
            onOptionChange={handleOptionChange}
          />
        </ul>

        <ul className="list-disc space-y-4">
          <li>반려동물 상품 중고거래에 대해 어떻게 생각하시나요?</li>
          <RadioDefault
            options={['만족', '보통', '불만족']}
            id="3"
            selectedValue={selectedValues['3']}
            onOptionChange={handleOptionChange}
          />
        </ul>

        <ul className="list-disc space-y-4">
          <li>분양/입양 이후에도 팻밀리를 사용하실 의향이 있으신가요?</li>
          <RadioDefault
            options={['그렇다', '그렇지 않다', '생각해보겠다']}
            id="4"
            selectedValue={selectedValues['4']}
            onOptionChange={handleOptionChange}
          />
        </ul>

        <ul className="list-disc space-y-4">
          <li>
            입양/분양을 원하는 주변인에게 팻밀리를 추천하실 의향이 있으신가요?
          </li>
          <RadioDefault
            options={['그렇다', '그렇지 않다', '생각해보겠다']}
            id="5"
            selectedValue={selectedValues['5']}
            onOptionChange={handleOptionChange}
          />
        </ul>

        <ul className="list-disc space-y-4 ">
          <li>
            개선이 필요하다고 생각되는 점이 있으신 경우엔 글을 남겨주세요.
          </li>
          <div>
            <input
              placeholder="입력해주세요"
              className="h-20 w-full rounded-lg border px-2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </ul>
      </div>

      <Button
        radio="button"
        className="h-10 w-full rounded-md bg-pm-main align-bottom text-white hover:bg-blue-600"
        onClick={postSatisfaction}
      >
        제출
      </Button>
    </div>
  );
};

export default SatisfactionPage;

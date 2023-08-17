import { Radio } from '@material-tailwind/react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const RadioDefault = ({ options, id, selectedValue, onOptionChange }) => {
  return (
    <div className="flex gap-4">
      {options.map((option, index) => (
        <Radio
          key={index}
          name={id}
          label={option}
          checked={selectedValue === index}
          onChange={() => onOptionChange(id, index)}
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

const SurveyPage = ({ setView, setter }) => {
  const [selectedValues, setSelectedValues] = useState({
    0: '',
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
  });

  const handleOptionChange = (questionId, selectedOption) => {
    setSelectedValues((prevSelectedValues) => ({
      ...prevSelectedValues,
      [questionId]: selectedOption,
    }));
  };

  const onClick = () => {
    let sum = 0;
    for (const key in selectedValues) {
      if (typeof selectedValues[key] === 'number') {
        sum += selectedValues[key];
      }
    }

    setter(sum);
    setView('로그인');
  };

  return (
    <div className="mx-auto my-20 flex h-fit w-fit flex-col space-y-8 bg-white p-10">
      <h1 className="text-center text-4xl font-extrabold">설문조사</h1>

      <div className="space-y-8">
        <ul className="list-disc space-y-1">
          <li>하루에 반려동물에 투자할 수 있는 시간이 얼마나 되나요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['1~2시간', '2~3시간', '3~4시간', '4시간 이상']}
              id="0"
              selectedValue={selectedValues['0']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>주거 환경이 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['아파트', '주택', '빌라']}
              id="1"
              selectedValue={selectedValues['1']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>가족 구성원이 몇 명이신가요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['1인', '2인', '3인', '4인 이상']}
              id="2"
              selectedValue={selectedValues['2']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>가정 내에 알레르기를 가지고 있는 사람이 있나요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['네', '아니요']}
              id="3"
              selectedValue={selectedValues['3']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>반려동물이 아픈 경우 소비 가능한 지출이 어느 정도 이신가요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={[
                '10만원 이하',
                '30만원 이하',
                '50만원 이하',
                '50만원 이상',
              ]}
              id="4"
              selectedValue={selectedValues['4']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>산책은 일주일에 몇 번 하실 예정인가요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['1회 이하', '3회 이하', '5회 이하', '5회 이상']}
              id="5"
              selectedValue={selectedValues['5']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>키우고 계시는 반려동물이 있으신가요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['네', '아니요']}
              id="6"
              selectedValue={selectedValues['6']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>반려동물을 키워본 경험이 있으신가요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['네', '아니요']}
              id="7"
              selectedValue={selectedValues['7']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>집 평수가 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['10평 이하', '20평 이하', '30평 이하', '30평 이상']}
              id="8"
              selectedValue={selectedValues['8']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>직업이 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['학생', '무직', '직장인']}
              id="9"
              selectedValue={selectedValues['9']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>

        <ul className="list-disc space-y-1">
          <li>연령이 어떻게 되시나요?</li>
          <div className="flex items-center ">
            <RadioDefault
              options={['10대', '20대', '30대', '40대 이상']}
              id="10"
              selectedValue={selectedValues['10']}
              onOptionChange={handleOptionChange}
            />
          </div>
        </ul>
      </div>

      <button
        className="mt-8 rounded-md bg-pm-main p-3 text-white hover:bg-blue-700"
        type="button"
        onClick={onClick}
      >
        제출하기
      </button>
    </div>
  );
};

export default SurveyPage;

import { Button, Radio } from '@material-tailwind/react';
import { PropTypes } from 'prop-types';

const RadioDefault = ({ select1, select2, select3, id }) => {
  return (
    <div className="flex gap-4">
      <Radio name={id} label={select1} />
      <Radio name={id} label={select2} />
      <Radio name={id} label={select3} />
    </div>
  );
};

RadioDefault.propType = {
  select1: PropTypes.string.isRequired,
  select2: PropTypes.string.isRequired,
  select3: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

const SatisfactionPage = () => {
  return (
    <div className="mx-auto my-20 flex h-fit w-fit flex-col space-y-8 bg-white p-10">
      <h1 className="text-center text-4xl font-extrabold">만족도 조사</h1>
      <hr />
      <div className="mx-8 flex flex-col space-y-4">
        <ul className="list-disc space-y-4">
          <li>입양/분양 과정은 어떠셨나요?</li>
          <RadioDefault select1="만족" select2="보통" select3="불만족" id="0" />
        </ul>
        <hr />

        <ul className="list-disc space-y-4">
          <li>입양/분양 과정에서 가장 만족스러웠던 사항은 무엇인가요?</li>
          <RadioDefault
            select1="계약서"
            select2="상세 프로필"
            select3="신뢰성"
            id="1"
          />
        </ul>
        <hr />

        <ul className="list-disc space-y-4">
          <li>사이트에서 제공되는 가이드의 내용은 어떠셨나요?</li>
          <RadioDefault
            select1="도움된다"
            select2="보통이다"
            select3="도움되지 않는다"
            id="2"
          />
        </ul>
        <hr />

        <ul className="list-disc space-y-4">
          <li>반려동물 상품 중고거래에 대해 어떻게 생각하시나요?</li>
          <RadioDefault select1="만족" select2="보통" select3="불만족" id="3" />
        </ul>
        <hr />

        <ul className="list-disc space-y-4">
          <li>분양/입양 이후에도 팻밀리를 사용하실 의향이 있으신가요?</li>
          <RadioDefault
            select1="그렇다"
            select2="그렇지 않다"
            select3="생각해보겠다"
            id="4"
          />
        </ul>
        <hr />

        <ul className="list-disc space-y-4">
          <li>
            입양/분양을 원하는 주변인에게 팻밀리를 추천하실 의향이 있으신가요?
          </li>
          <RadioDefault
            select1="그렇다"
            select2="그렇지 않다"
            select3="생각해보겠다"
            id="5"
          />
        </ul>
        <hr />

        <ul className="list-disc space-y-4 ">
          <li>
            개선이 필요하다고 생각되는 점이 있으신 경우엔 글을 남겨주세요.
          </li>
          <div>
            <input placeholder="입력해주세요" className="h-20 w-full " />
            <Button
              radio="button"
              className="h-10 w-20 rounded-md bg-pm-main text-white"
            >
              입력
            </Button>
          </div>
        </ul>
        <hr />
      </div>
      <Button
        radio="button"
        className="h-10 w-full rounded-md bg-pm-main align-bottom text-white hover:bg-blue-600"
      >
        제출
      </Button>
    </div>
  );
};

export default SatisfactionPage;

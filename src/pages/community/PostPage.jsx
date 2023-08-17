import PropTypes from 'prop-types';
import { Textarea, Button } from '@material-tailwind/react';
import { useState } from 'react';
import Image from '@assets/guideImage.webp';
import Image2 from '@assets/guideImage2.webp';

const CommentBoxTextarea = ({ onCommentSubmit }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = () => {
    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <div className="relative">
      <Textarea
        variant="static"
        placeholder="댓글을 남겨주세요"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="flex w-full py-1.5">
        <div className="flex gap-2">
          <Button
            className="rounded-md bg-white text-pm-main"
            onClick={() => setComment('')}
          >
            취소
          </Button>
          <Button className="rounded-md bg-pm-main" onClick={handleSubmit}>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
};

CommentBoxTextarea.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};

const PostPage = () => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    if (comment !== '') {
      setComments([...comments, comment]);
    }
  };

  const postDetail = [
    {
      sort: '가이드',
      title: '동물 등록이 어려우시다면?',
      date: '2023/8/15',
      click: 46,
      content: 'aaa',
    },
  ];

  return (
    <div className="flex">
      {postDetail.map(({ sort, title, date, click, content }) => {
        return (
          <div className="ml-6 w-full space-y-4" key={title}>
            <hr />
            <h1 className="b-4 border-b border-gray-500 pb-4 text-3xl font-bold">
              {title}
            </h1>
            <hr />
            <div className="flex text-sm">
              <span className="border-r border-gray-500 px-2">{sort}</span>
              <span className="border-r border-gray-500 px-2">{date}</span>
              <span className="px-2">조회 수 : {click}</span>
            </div>
            <hr />
            <div className="mt-4 h-auto w-full overflow-auto bg-white p-5">
              <p className="p-4 ">
                <div className="space-y-3 p-4">
                  <span className="space-y-2">
                    동물 등록을 통해 반려동물을 잃어버렸을 때
                    국가동물보호정보시스템 상 동물등록정보를 통해 소유자를 찾을
                    수 있습니다.
                  </span>
                  <span className="font-bold text-red-400 underline underline-offset-1">
                    전국 의무 시행
                  </span>
                  <span>
                    중으로 등록대상은 주택·준주택에서 기르거나 주택 외의
                    장소에서 반려 목적으로 기르는 2개월 령 이상의 개입니다.
                    (고양이는 현재 의무가 아닌 선택사항으로 시범사업 진행)
                    하지만 도서 또는 동물등록업무를 대행하게 할 수 있는 자가
                    없는 읍·면 중 시·도 조례로 정하는 지역에서는 소유자의 선택에
                    따라 등록하지 않을 수 있습니다. (등록대상동물이 맹견이라면
                    동물등록 필수) 최초 등록시에는 동물에게 무선식별장치를
                    장착하기 위해 반드시 등록대상동물을 동반하여 방문신청해야
                    합니다
                  </span>
                  <br />
                  <br />
                  <img src={Image} className="h-full w-full" />
                  <br /> <span className="text-lg font-bold">동물등록방법</span>
                  <br />
                  <span>
                    내장형 무선식별장치 개체 삽입 / 외장형 무선식별장치 부착 중
                    택 1
                  </span>
                  <ul className="list-inside list-disc">
                    <li>
                      내장형 무선식별장치 : 체내 이물 반응이 없는 재질로 코팅된
                      쌀알만한 크기의 동물용 의료기기
                    </li>
                    <li>
                      외장형 무선식별장치 : 외출 시 목걸이 형태로 착용하는 장치
                    </li>
                  </ul>
                  <br />
                  <br />
                  <span className="font-bold">
                    등록대행업체(동물병원, 동물 보호 센터)에서의 등록 방법
                  </span>
                  <ol className="list-inside list-decimal">
                    <li>
                      무선식별장치 장착확인 (무선식별장치가 없는 경우 식별장치
                      비용 및 시술비 발생)
                    </li>
                    <li>
                      등물등록신청서 등 작성 및 제출 / 수수료 납부 (내장 1만원,
                      외장 3천원)
                    </li>
                    <li>검토 및 등록사항 기록</li>
                    <li>시·군·구청 등록 승인 후 등록증 수령</li>
                  </ol>
                  <br />
                  <br />
                  <span className="font-bold">시·군·구청 방문 등록 방법</span>
                  <ol className="list-inside list-decimal">
                    <li>무선식별장치 장착확인</li>
                    <li>
                      등물등록신청서 등 작성 및 제출 / 수수료 납부 (내장 1만원,
                      외장 3천원)
                    </li>
                    <li>검토 및 등록사항 기록</li>
                    <li>등록증 수령</li>
                  </ol>
                  <br />
                  <br />
                  <span>
                    지자체조례에 따라 대행업체를 통해서만 등록이 가능한 지역이
                    있으므로 시·군·구청등록을 원하신다면 가능여부를 사전에
                    확인해야 합니다. <br /> 등록신청인이 직접 방문하지 않고
                    대리인을 통해 신청시에는 필요한 서류들이 있으니 등록기관에
                    사전 연락하여 필요서류를 확인·준비하셔야 합니다. <br />{' '}
                    동물등록을 하지 않은 것이 적발된다면 최대 60만원 이하의
                    과태료가 부과됩니다. <br /> 소유자 변경 시에는 소유권을
                    이전받은 날부터 30일 이내로 시군구에 변경신고를 하지
                    않는다면 최대 40만원 이하의 과태료가 부과됩니다.
                  </span>
                  <br />
                  <br />
                  <img src={Image2} className="h-full w-full" />
                </div>
              </p>
            </div>
            <CommentBoxTextarea onCommentSubmit={addComment} />
            <div className="space-y-8 pt-4">
              {comments.map((comment, index) => (
                <div className="border-b border-gray-400 p-1" key={index}>
                  {index + 1}번째 댓글 : {comment}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostPage;

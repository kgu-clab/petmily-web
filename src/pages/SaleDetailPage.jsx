import { formatCurrency } from '@common/utils';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Button, Carousel, Textarea } from '@material-tailwind/react';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

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

const SaleDetail = () => {
  const price = 1000;
  const onClick = () => {};
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    if (comment !== '') {
      setComments([...comments, comment]);
    }
  };

  return (
    <div className="mt-4 flex h-auto w-full flex-col space-y-4 overflow-auto rounded-md bg-white p-4">
      {/* 상품 사진 수정 */}
      <Carousel className="h-full w-full rounded-md" autoplay>
        <img
          src="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2474&q=80"
          alt="image-1"
          className="h-full w-full rounded-md"
        />
        <img
          src="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2474&q=80"
          alt="image-1"
          className="h-full w-full rounded-md"
        />
        <img
          src="https://images.unsplash.com/photo-1526925712774-2833a7ecd0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2474&q=80"
          alt="image-1"
          className="h-full w-full rounded-md"
        />
      </Carousel>
      <div className="flex space-x-3">
        <UserCircleIcon className="h-12 w-12" />
        <span className="my-3 font-bold">사용자명</span>
      </div>
      <hr />
      <span className="text-2xl text-gray-600">리드줄</span>
      <p className="text-xl font-semibold">
        <span className="text-pm-main">{formatCurrency(price)}</span> 원
      </p>{' '}
      <span className="">
        너비가 좁아서 저희 강아지한테는 맞지 않네요 ㅜㅜ 소형견 친구들이
        착용하면 사이즈가 잘 맞을 것 같아요! 줄 길이는 1.8m입니다
      </span>
      <button
        className="rounded-md bg-pm-main p-3 hover:bg-blue-700"
        type="button"
        onClick={onClick}
      >
        구매하기
      </button>
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
};

SaleDetail.propTypes = {};

export default SaleDetail;
